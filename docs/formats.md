# File Formats

The contents of this directory pertain to the [JSON](http://www.json.org/) file formats used by *cad.js* and a supported binary serialization of those files.  The file formats are formally defined using [JSON Schema](http://json-schema.org/documentation.html).  Below is a presentation of the elements of this definition.  At the conclusion is a presentation of an extension to the [Universal Binary JSON](http://ubjson.org/) serialization, called TySON, that can be used with *cad.js* to further increase compression.

## JSON Schema

There are three file formats potentially used in the represetntation of a CAD drawing for rendering with *cad.js*.   Only the first is mandatory: a kind of manifest for the drawing, which  by convention is called *index.json*.  The corresponding JSON Schema definition for it is provided in the file of the same name in this directory.  The remaining two formats are used to externalize definitions that could otherwise be placed directly inside *index.json*.  These representations are for *shells* and *annotations*.  Their JSON Schema defintions are likewise provided in the files *shell.json* and *annotation.json*, respsectively, in this directory.

The following sections address the JSON Schema definitions of these file formats.

### *index.json*

This file defines a part assembly.  This definition is a JSON object.  The required properties  of this object are:

* *products* (array), defines the assembly's parts, potentially through a heirarchy of sub-parts
* *shapes* (array), define physical manifestations of products
* *shells* (array), defines aspects of shapes
* *annotations* (array), provide rendered information about shapes
* *root* (string), identifier of the root product

There are also two optional properties

* *useTyson*. which indicates if the TySON binary serialization is being used
* *batches*, which indicates the number of batches being used to collect externalized definitions 

If *useTyson* is not present, then it is assumed to be **false**.  If *batches* is not present, then it is assumed that externalized definitions for the assembly have not been batched.

#### Products

Products are defined as a JSON array of *product* defintions, each a JSON object.  Hierarchy is defined through optional *child* products for an individual product, defined by reference through the child product's identifier.  Shapes can also be associated with individual products.  These associations are likewise through identifies associated with individual shapes, as defined below.

##### Product

An individual product is a JSON object with the following required properties:

* *name* (string), which provides a name for the product
* *id* (string), which provides an identifier for the product, which can be used when referencing sub-products

Optional properties for *products* include:

* *children* (array), a list of product identifiers, establishing sub-part relationships
* *shapes* (array), a list of identifiers for shapes associated with the product
* *file* (string), a filename or path of the original drawing

While *children* and *shapes* are optional properties, at least one of them must occur in the definition of a product.

#### Shapes

Shapes are defined as a JSON array of *shape* definitions, each a JSON object.  Hierarchy is defined through optional *child* shapes for an individual shape, defined by reference through the child's identifier, plus some required orientation.

##### Shape

An individual shape is a JSON object with the following required properties:

* *id* (string), which provides an identifier for the shape

Optional properties for a shape include:

* *children*, a list for child shape spcifications, as defined below
* *shells*, a list for shell identifiers associated with the shape
* *annotations*, a list of annotation identifiers associated with the shape

while *children* and *shells* are optional properties, at least one of them must occur in the definition of a shape.

###### Child Shapes

The specification of child shapes is a list of JSON objects that have the following required properties:

* *ref* (string), an identifier for the shape
* *xform* (String or array), a transformation for the shape

If the *xform* property is a string, then its value must be a single letter designating a prefeined transform.  There is current only one: "I", indicating the identity transform:

```
[ 1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1 ]
```

If the *xform* property is an array, then it must be a sixteen element array of numbers specifying the spatial transformation of the child shape.

#### Shells

Shells are defined as a list of *shell* definitions, as described below.

##### Shell

An individual shell is a JSON object with the following required properties:

* *id* (string), an identifier for the shell
* *size* (integer), the number of faces in the shell
* *bbox* (array), the shell's bounding box

The bounding box, which is axis-aligned,  is specified by a six element JSON array of numbers, identifying two XYZ coordinates.

Optional properties of a *shell* include the following:

* *href* (string), name of an externalized definition for the shell
* *precision* (integer), the normalized precision of data values for the shell
* *values* (array), a list of unique values for the shell's normals and points
* *normalsIndex* (array), a list coordinates for shell normals as indices into the *values* array
* *pointsIndex* (array), a list of for shell points as indices from the *values* array
* *colorData* (array), a list of color specifications, as defined below.

If the *href* property is used, then the remaining optional properties must not occur.  The externalized definition of the *shell* must then contain the remaining optional properties, plus the *id* and *size* mandatory properties, as defined above.  The JSON Schema definition for an externalized shell specification is provided in the file *shell.json* in this directory.

For the *pointsIndex* and *normalsIndex* arrays, nine elements (defining three XYZ tuples) are used for each triangular face.

###### ColorData

The *colorData* property of a shell specifies a list of color specifications, each one of which is a JSON object.  The required properties of this object are:

* *duration* (integer), the number of vertices to which this color applies
* *data* (array), a normalized RGB color specification (JSON numbers from 0 to 1)

#### Annotations

Annotations are defined as a list of *annotation* defintions, as described below.

##### Annotation

An *annotation* is defined by a JSON object with the following required propoerties:

* *id* (string), an identifier for the annotation

Optional properties of an *annotation* include the following:

* *href* (string), name of an externalized definition of the annotation
* *lines* (array), a list of line segments for the annotation

If the *href* property is used, then the remaining optional properties must not occur.  The externalized definition of the *annotation* must then contain the remaining optional properties, plus the *id* mandatory property, as defined above.

The *lines* array provides a list of line segments, each a six element JSON array defining the starting and ending XYZ coordinates of the segment.

### Externalized Definitions

### *shell.json*

When externalized from *index.json*, a single *shell* is represented as a JSON object.  The required properties of thie object are as follows:

* *id* (string), an identifier for the shell
* *size* (integer), the number of faces in the shell
* *precision* (integer), the normalized precision of data values for the shell
* *values* (array), a list of unique values for the shell's normals and points
* *normalsIndex* (array), a list coordinates for shell normals as indices into the *values* array
* *pointsIndex* (array), a list of for shell points as indices from the *values* array
* *colorData* (array), a list of color specifications, as defined below.

Please refer to the definitions and notes for these properties above in the section under *index.json* devoted to *shells*.

### *annotation.json*

When externalized from *index.json*, a single *annotation* is represented as a JSON object.  The required properties of thie object are as follows:

* *id* (string), an identifier for the annotation
* *lines* (array), a list of line segments for the annotation

Please refer to the definitions and notes for these properties above in the section under *index.json* devoted to *annotations*.

## TySON and Universal Binary JSON

[Universal Binary JSON](http://ubjson.org/), or UBJSON, supports binary serialization of JSON.  A minor extension to UBJSON, called TySON, was created to further improve the compactness of the serialization for the purposes of *cad.js*  .  The extension addresses arrays of integers whose values can collectively be defined by a single UBJSON type descriptor.  Due to data compression techniques employed in *cad.js*, this is a recurring case and the resulting compression improvements are significant.

A Python implementation of a TySON serializer is provided with *cad.js*.  Algorithmically, it is quite straightforward.  It detects arrays consisting entirely of integers, selects a UBJSON type designator for the largest value in the array, and then encodes the entire sequence using this single type designator.  See *scripts/tyson.py* for futher details.


