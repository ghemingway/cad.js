#    Copyright (C) 2011-2012 Alexander Shorin
#    All rights reserved.
#
#    Redistribution and use in source and binary forms, with or without
#    modification, are permitted provided that the following conditions
#    are met:
#
#    1. Redistributions of source code must retain the above copyright
#    notice, this list of conditions and the following disclaimer.
#    2. Redistributions in binary form must reproduce the above copyright
#    notice, this list of conditions and the following disclaimer in
#    the documentation and/or other materials provided with the
#    distribution.
#    3. The name of the author may not be used to endorse or promote
#    products derived from this software without specific prior
#    written permission.
#
#    THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS
#    OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
#    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
#    ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
#    DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
#    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
#    GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
#    INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
#    IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
#    OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN
#    IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

# Customized by Gabor Pap
# 2014

import logging
import sys

from math import isinf, isnan
from decimal import Decimal
from struct import pack, unpack

version = '.'.join(map(str, sys.version_info[:2]))

if version >= '3.0':
    from io import BytesIO
    basestring = (str, bytes)
    unicode = str
    bytes = bytes
    long = int
    xrange = range

    d = {}
    dict_keysiterator = type(d.keys())
    dict_valuesiterator = type(d.values())
    dict_itemsiterator = type(d.items())
else:
    from cStringIO import StringIO as BytesIO
    basestring = basestring
    unicode = unicode
    b = bytes = str
    long = long
    xrange = xrange

    d = {}
    dict_keysiterator = type(d.iterkeys())
    dict_valuesiterator = type(d.itervalues())
    dict_itemsiterator = type(d.iteritems())


b = lambda s: isinstance(s, unicode) and s.encode('latin1') or s
u = lambda s: isinstance(s, bytes) and s.decode('utf-8') or s
XRangeType = type(xrange(0))
LOG = logging.getLogger(__name__)

NOOP_SENTINEL = type('NoOp', (object,), {'__slots__': ()})()

MIXED = b('M')
NOOP = b('N')
EOS = b('E')
NULL = b('Z')
FALSE = b('F')
TRUE = b('T')
INT8 = b('B')
INT16 = b('i')
INT32 = b('I')
INT64 = b('L')
FLOAT = b('d')
DOUBLE = b('D')
STRING_S = b('s')
STRING_L = b('S')
HIDEF_S = b('h')
HIDEF_L = b('H')
ARRAY_S = b('a')
OBJECT_S = b('o')
ARRAY_L = b('A')
OBJECT_L = b('O')
FF = b(chr(255))

BOS_A = object()
BOS_O = object()

CONSTANTS = set([NOOP, EOS, NULL, FALSE, TRUE])
NUMBERS = set([INT8, INT16, INT32, INT64, FLOAT, DOUBLE])
STRINGS = set([STRING_S, STRING_L, HIDEF_S, HIDEF_L])
SHORT_OBJ = set([STRING_S, HIDEF_S, ARRAY_S, OBJECT_S])
LARGE_OBJ = set([STRING_L, HIDEF_L, ARRAY_L, OBJECT_L])
STREAMS = set([ARRAY_S, OBJECT_S])
OBJECT_KEYS = set([STRING_S, STRING_L])
FORBIDDEN = set([NOOP, EOS])

CHARS = dict((i, b(chr(i))) for i in range(256))


class DecodeError(ValueError):
    """UBJSON data decoding error."""


class MarkerError(DecodeError):
    """Raises if unknown or invalid marker was found in decoded data stream."""


class EarlyEndOfStreamError(DecodeError):
    """Raises when data stream unexpectedly ends."""


class EncodeError(TypeError):
    """Python object encoding error."""


class TysonDecoder(object):
    # TODO: adjust the decoder to understand the tyson format, now it does
    # DRAFT 8 ubjson decoding


    """Decoder of UBJSON data to Python object following Draft 8 specification
    and using next data mapping:

    +--------+----------------------------+----------------------------+-------+
    | Marker | UBJSON type                | Python type                | Notes |
    +========+============================+============================+=======+
    | ``N``  | noop                       | :const:`~simpleubjson.NOOP`| \(1)  |
    +--------+----------------------------+----------------------------+-------+
    | ``Z``  | null                       | None                       |       |
    +--------+----------------------------+----------------------------+-------+
    | ``F``  | false                      | bool                       |       |
    +--------+----------------------------+----------------------------+-------+
    | ``T``  | true                       | bool                       |       |
    +--------+----------------------------+----------------------------+-------+
    | ``B``  | byte                       | int                        |       |
    +--------+----------------------------+----------------------------+-------+
    | ``i``  | int16                      | int                        |       |
    +--------+----------------------------+----------------------------+-------+
    | ``I``  | int32                      | int                        |       |
    +--------+----------------------------+----------------------------+-------+
    | ``L``  | int64                      | long                       |       |
    +--------+----------------------------+----------------------------+-------+
    | ``d``  | float                      | float                      |       |
    +--------+----------------------------+----------------------------+-------+
    | ``D``  | double                     | float                      |       |
    +--------+----------------------------+----------------------------+-------+
    | ``h``  | hugeint - 2 bytes          | decimal.Decimal            |       |
    +--------+----------------------------+----------------------------+-------+
    | ``H``  | hugeint - 5 bytes          | decimal.Decimal            |       |
    +--------+----------------------------+----------------------------+-------+
    | ``s``  | string - 2 bytes           | unicode                    |       |
    +--------+----------------------------+----------------------------+-------+
    | ``S``  | string - 5 bytes           | unicode                    |       |
    +--------+----------------------------+----------------------------+-------+
    | ``a``  | array - 2 bytes            | list                       |       |
    +--------+----------------------------+----------------------------+-------+
    | ``a``  | array - unsized            | generator                  | \(2)  |
    +--------+----------------------------+----------------------------+-------+
    | ``A``  | array - 5 bytes            | list                       |       |
    +--------+----------------------------+----------------------------+-------+
    | ``o``  | object - 2 bytes           | dict                       |       |
    +--------+----------------------------+----------------------------+-------+
    | ``o``  | object - unsized           | generator                  | \(3)  |
    +--------+----------------------------+----------------------------+-------+
    | ``O``  | object - 5 bytes           | dict                       |       |
    +--------+----------------------------+----------------------------+-------+

    Notes:

    (1)
        `NoOp` values are ignored by default if only `allow_noop` argument
        wasn't passed as ``True``.

    (2)
        Nested generators are automatically converted to lists.

    (3)
        Unsized objects are represented as list of 2-element tuple with object
        key and value.
    """

    dispatch = {}

    def __init__(self, source, allow_noop=False):
        if isinstance(source, unicode):
            source = source.encode('utf-8')
        if isinstance(source, bytes):
            source = BytesIO(source)
        self.read = source.read
        self.allow_noop = allow_noop
        self.dispatch = self.dispatch.copy()

    def __iter__(self):
        return self

    def next_tlv(self):
        tag = self.read(1)
        while tag == NOOP and not self.allow_noop:
            tag = self.read(1)
        if tag in NUMBERS:
            if tag == INT8:
                # Trivial operations for trivial cases saves a lot of time
                value = ord(self.read(1))
                if value > 128:
                    value -= 256
                    #value, = unpack('>b', self.read(1))
            elif tag == INT16:
                value, = unpack('>h', self.read(2))
            elif tag == INT32:
                value, = unpack('>i', self.read(4))
            elif tag == INT64:
                value, = unpack('>q', self.read(8))
            elif tag == FLOAT:
                value, = unpack('>f', self.read(4))
            elif tag == DOUBLE:
                value, = unpack('>d', self.read(8))
            else:
                raise MarkerError('tag %r not in NUMBERS %r' % (tag, NUMBERS))
            return tag, None, value
        elif tag in SHORT_OBJ:
            length = ord(self.read(1))
            if tag in STRINGS:
                if length == 255:
                    raise MarkerError(
                        'Short string objects (%r) should not have length 255'
                        % tag)
                return tag, length, self.read(length)
            return tag, length, None
        elif tag in LARGE_OBJ:
            length, = unpack('>I', self.read(4))
            if tag in STRINGS:
                return tag, length, self.read(length)
            return tag, length, None
        elif tag in CONSTANTS:
            return tag, None, None
        elif not tag:
            raise EarlyEndOfStreamError('nothing to decode')
        else:
            raise MarkerError('invalid marker 0x%02x (%r)' % (ord(tag), tag))

    def decode_next(self):
        tag, length, value = self.next_tlv()
        return self.dispatch[tag](self, tag, length, value)

    __next__ = next = decode_next

    def decode_noop(self, tag, length, value):
        return NOOP_SENTINEL
    dispatch[NOOP] = decode_noop

    def decode_none(self, tag, length, value):
        return None
    dispatch[NULL] = decode_none

    def decode_false(self, tag, length, value):
        return False
    dispatch[FALSE] = decode_false

    def decode_true(self, tag, length, value):
        return True
    dispatch[TRUE] = decode_true

    def decode_int(self, tag, length, value):
        return value
    dispatch[INT8] = decode_int
    dispatch[INT16] = decode_int
    dispatch[INT32] = decode_int
    dispatch[INT64] = decode_int

    def decode_float(self, tag, length, value):
        return value
    dispatch[FLOAT] = decode_float
    dispatch[DOUBLE] = decode_float

    def decode_string(self, tag, length, value):
        return value.decode('utf-8')
    dispatch[STRING_S] = decode_string
    dispatch[STRING_L] = decode_string

    def decode_hidef(self, tag, length, value):
        return Decimal(value.decode('utf-8'))
    dispatch[HIDEF_S] = decode_hidef
    dispatch[HIDEF_L] = decode_hidef

    def decode_array(self, tag, length, value):
        if tag == ARRAY_S and length == 255:
            return self.decode_array_stream(tag, length, value)
        res = [None] * length
        next_tlv = self.next_tlv
        dispatch = self.dispatch
        forbidden = FORBIDDEN
        streams = STREAMS
        for _ in range(length):
            tag, length, value = next_tlv()
            if tag in forbidden:
                raise MarkerError('invalid marker occurs: %02X' % ord(tag))
            item = dispatch[tag](self, tag, length, value)
            if tag in streams and length == 255:
                item = list(item)
            res[_] = item
        return res
    dispatch[ARRAY_S] = decode_array
    dispatch[ARRAY_L] = decode_array

    def decode_object(self, tag, length, value):
        if tag == OBJECT_S and length == 255:
            return self.decode_object_stream(tag, length, value)
        res = {}
        key = None
        next_tlv = self.next_tlv
        dispatch = self.dispatch
        forbidden = FORBIDDEN
        object_keys = OBJECT_KEYS
        streams = STREAMS
        for _ in range(length * 2):
            tag, length, value = next_tlv()
            if tag in forbidden:
                raise MarkerError('invalid marker found: %02X' % ord(tag))
            if key is None and tag not in object_keys:
                raise MarkerError('key should be string, got %r' % (tag))
            value = dispatch[tag](self, tag, length, value)
            if key is None:
                key = value
            else:
                if tag in streams and length == 255:
                    value = list(value)
                res[key] = value
                key = None
        return res
    dispatch[OBJECT_S] = decode_object
    dispatch[OBJECT_L] = decode_object

    def decode_array_stream(self, tag, length, value):
        dispatch = self.dispatch
        next_tlv = self.next_tlv
        eos = EOS
        streams = STREAMS
        def array_stream():
            while 1:
                tag, length, value = next_tlv()
                if tag == eos:
                    break
                item = dispatch[tag](self, tag, length, value)
                if tag in streams and length == 255:
                    yield list(item)
                else:
                    yield item
        return array_stream()

    def decode_object_stream(self, tag, length, value):
        dispatch = self.dispatch
        next_tlv = self.next_tlv
        eos = EOS
        object_keys = OBJECT_KEYS
        noop = NOOP
        noop_sentinel = NOOP_SENTINEL
        streams = STREAMS
        def object_stream():
            key = None
            while 1:
                tag, length, value = next_tlv()
                if tag == noop and key is None:
                    yield noop_sentinel, noop_sentinel
                elif tag == NOOP and key:
                    continue
                elif tag == eos:
                    if key:
                        raise EarlyEndOfStreamError('value missed for key %r'
                                                    % key)
                    break
                elif key is None and tag not in object_keys:
                    raise MarkerError('key should be string, got %r' % (tag))
                else:
                    value = dispatch[tag](self, tag, length, value)
                    if key is None:
                        key = value
                    elif tag in streams:
                        yield key, list(value)
                        key = None
                    else:
                        yield key, value
                        key = None
        return object_stream()


class TysonEncoder(object):
    """Encoder of Python objects into UBJSON data following Draft 8
    specification rules with next data mapping:

    +-----------------------------+------------------------------------+-------+
    | Python type                 | UBJSON type                        | Notes |
    +=============================+====================================+=======+
    | :const:`~simpleubjson.NOOP` | NoOp                               |       |
    +-----------------------------+------------------------------------+-------+
    | :const:`None`               | null                               |       |
    +-----------------------------+------------------------------------+-------+
    | :class:`bool`               | :const:`False` => false            |       |
    |                             | :const:`True`  => true             |       |
    +-----------------------------+------------------------------------+-------+
    | :class:`int`,               | `integer` or `huge`                | \(1)  |
    | :class:`long`               |                                    |       |
    +-----------------------------+------------------------------------+-------+
    | :class:`float`              | `float`, `null` or `huge`          | \(2)  |
    +-----------------------------+------------------------------------+-------+
    | :class:`str`,               | string                             | \(3)  |
    | :class:`unicode`            |                                    | \(4)  |
    +-----------------------------+------------------------------------+-------+
    | :class:`tuple`,             | sized array                        | \(3)  |
    | :class:`list`,              |                                    |       |
    | :class:`set`,               |                                    |       |
    | :class:`frozenset`,         |                                    |       |
    +-----------------------------+------------------------------------+-------+
    | :class:`generator`,         | unsized array                      |       |
    | :class:`XRange`             |                                    |       |
    +-----------------------------+------------------------------------+-------+
    | :class:`dict`               | object                             | \(3)  |
    |                             |                                    | \(5)  |
    +-----------------------------+------------------------------------+-------+
    | :class:`dict_itemsiterator` | unsized object                     | \(5)  |
    +-----------------------------+------------------------------------+-------+
    | :class:`decimal.Decimal`    | hidef                              |       |
    +-----------------------------+------------------------------------+-------+

    Notes:

    (1)
        Depending on value it may be encoded into various UBJSON types:

        * [-2^7, 2^7): ``int8``
        * [-2^15, 2^15): ``int16``
        * [-2^31, 2^31): ``int32``
        * [-2^63, 2^63): ``int64``
        * everything bigger/smaller: ``huge``

    (2)
        Depending on value it may be encoded into various UBJSON types:

        * 1.18e-38 <= abs(value) <= 3.4e38: ``float``
        * 2.23e-308 <= abs(value) < 1.8e308: ``double``
        * :const:`inf`, :const:`-inf`: ``null``
        * everything bigger/smaller: ``huge``

    (3)
        Depending on object length short or long version of UBJSON type may be
        produced.

    (4)
        Unicode string are been encoded with utf-8 charset. Byte strings are
        required to have `utf-8` encoding or :exc:`simpleubjson.EncodeError`
        will be raised.

    (5)
        Dict keys should have string type or :exc:`simpleubjson.EncodeError`
        will be raised.

    Customization: When an integer array is encountered the encoder uses the
        type information of the largest element, if it fails for any reason it
         reverts and encodes the whole sequence as MIXED.

         This works well when the numbers in the array are mostly in the same
         range

    """

    dispatch = {}

    def __init__(self, default=None):
        self._default = default or self.default

    def default(self, obj):
        raise EncodeError('unable to encode %r' % obj)

    @classmethod
    def encode(cls, data, output=None):
        """Encodes Python object to Universal Binary JSON data.

        :param data: Python object.
        :param output: `.write([data])`-able object. If omitted result would be
                       returned instead of written into.

        :return: Encoded Python object. See mapping table below.
                 If `output` param is specified, all data would be written into it
                 by chunks and None will be returned.
        """
        res = TysonEncoder(None).encode_next(data)

        if output:
            output.write(res)
        else:
            return res

    def encode_next(self, obj):
        tobj = type(obj)
        if tobj in self.dispatch:
            res = self.dispatch[tobj](self, obj)
        else:
            return self.encode_next(self._default(obj))
        if isinstance(res, bytes):
            return res
        return bytes().join(res)

    def encode_noop(self, obj):
        return NOOP
    dispatch[type(NOOP_SENTINEL)] = encode_noop

    def encode_none(self, obj):
        return NULL
    dispatch[type(None)] = encode_none

    def encode_bool(self, obj):
        return TRUE if obj else FALSE
    dispatch[bool] = encode_bool

    def encode_int(self, obj, int_type=None):
        if int_type:
            if type(obj) not in [int, long]:
                raise EncodeError('Not an integer: %r' % obj)
            if int_type == INT8:
                return CHARS[obj % 256]
            elif int_type == INT16:
                return pack('>h', obj)
            elif int_type == INT32:
                return pack('>i', obj)
            elif int_type == INT64:
                return pack('>q', obj)
        if (-2 ** 7) <= obj <= (2 ** 7 - 1):
            return INT8 + CHARS[obj % 256]
        elif (-2 ** 15) <= obj <= (2 ** 15 - 1):
            return INT16 + pack('>h', obj)
        elif (-2 ** 31) <= obj <= (2 ** 31 - 1):
            return INT32 + pack('>i', obj)
        elif (-2 ** 63) <= obj <= (2 ** 63 - 1):
            return INT64 + pack('>q', obj)
        else:
            return self.encode_decimal(Decimal(obj))
    dispatch[int] = encode_int
    dispatch[long] = encode_int

    def encode_float(self, obj):
        if 1.18e-38 <= abs(obj) <= 3.4e38:
            return FLOAT + pack('>f', obj)
        elif 2.23e-308 <= abs(obj) < 1.8e308:
            return DOUBLE + pack('>d', obj)
        elif isinf(obj) or isnan(obj):
            return NULL
        else:
            return self.encode_decimal(Decimal(obj))
    dispatch[float] = encode_float

    def _encode_str(self, obj):
        length = len(obj)
        if length < 255:
            return STRING_S + CHARS[length] + obj
        else:
            return STRING_L + INT32 + pack('>i', length) + obj

    def encode_bytes(self, obj):
        try:
            obj.decode('utf-8')
        except UnicodeDecodeError:
            raise EncodeError('Invalid UTF-8 byte string: %r' % obj)
        else:
            return self._encode_str(obj)
    dispatch[bytes] = encode_bytes

    def encode_str(self, obj):
        return self._encode_str(obj.encode('utf-8'))
    dispatch[unicode] = encode_str

    def encode_decimal(self, obj):
        obj = unicode(obj).encode('utf-8')
        length = len(obj)
        if length < 255:
            return HIDEF_S + CHARS[length] + obj
        else:
            return HIDEF_L + pack('>i', length) + obj
    dispatch[Decimal] = encode_decimal

    def encode_sequence(self, obj):
        length = len(obj)

        array_type = MIXED
        try:
            encoded_item = self.encode_next(max([abs(item) for item in obj]))
            if encoded_item.startswith(INT8):
                array_type = INT8
            elif encoded_item.startswith(INT16):
                array_type = INT16
            elif encoded_item.startswith(INT32):
                array_type = INT32
            elif encoded_item.startswith(INT64):
                array_type = INT64
        except:
            # not number elements
            array_type = MIXED

        if array_type != MIXED:
            try:
                if length < 255:
                    return_value = ARRAY_S + array_type + CHARS[length]
                else:
                    return_value = ARRAY_L + array_type + pack('>I', length)
                for item in obj:
                    return_value += self.encode_int(item, array_type)
                yield return_value
            except:
                # the maximum was an integer, but the array is not homogeneous
                array_type = MIXED

        if array_type == MIXED:
            if length < 255:
                yield ARRAY_S + array_type + CHARS[length]
            else:
                yield ARRAY_L + array_type + pack('>I', length)
            for item in obj:
                yield self.encode_next(item)

    dispatch[tuple] = encode_sequence
    dispatch[list] = encode_sequence
    dispatch[set] = encode_sequence
    dispatch[frozenset] = encode_sequence

    def encode_dict(self, obj):
        length = len(obj)
        if length < 255:
            yield OBJECT_S + CHARS[length]
        else:
            yield OBJECT_L + pack('>I', length)
        for key, value in obj.items():
            if isinstance(key, unicode):
                yield self.encode_str(key)
            elif isinstance(key, bytes):
                yield self.encode_bytes(key)
            else:
                raise EncodeError('invalid object key %r' % key)
            yield self.encode_next(value)
    dispatch[dict] = encode_dict

    def encode_generator(self, obj):
        yield ARRAY_S + FF
        for item in obj:
            yield self.encode_next(item)
        yield EOS
    dispatch[xrange] = encode_generator
    dispatch[type((i for i in ()))] = encode_generator
    dispatch[dict_keysiterator] = encode_generator
    dispatch[dict_valuesiterator] = encode_generator

    def encode_dictitems(self, obj):
        yield OBJECT_S + FF
        for key, value in obj:
            if isinstance(key, unicode):
                yield self.encode_str(key)
            elif isinstance(key, bytes):
                yield self.encode_bytes(key)
            else:
                raise EncodeError('invalid object key %r' % key)
            yield self.encode_next(value)
        yield EOS
    dispatch[dict_itemsiterator] = encode_dictitems
