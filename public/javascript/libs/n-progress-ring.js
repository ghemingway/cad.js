(function () {
    'use strict';
    
    function Timer() {
        this.now = this.then = Date.now();
        this.delta = 0;
    }
    Timer.prototype.update = function () {
        this.now = Date.now();
        this.delta = (this.now - this.then) / 1000;
        this.then = this.now;
    };
    
    function shallowExtend(object) {
        var i, property;
        for (i=1; i<arguments.length; ++i) {
            for (property in arguments[i]) {
                if (arguments[i].hasOwnProperty(property)) {
                    object[property] = arguments[i][property];
                }
            }
        }
        return object;
    }
    
    function glVectorString(precision) {
        var i, values = [],
            s = "vec" + (arguments.length - 1);
        for (i=1; i<arguments.length; ++i) {
            values.push(arguments[i].toPrecision(precision));
        }
        s += '(' + values.join(',') + ')';
        return s;
    }
    
    function addLineNumbersToString(s) {
        var i = 1;
        return i + ': ' + s.replace(/\n/g, function () {
            return '\n' + (++i) + ': ';
        });
    }
    
    
    // THE THINGY
    
    function NProgressRing (opt_config) {
        this.config = shallowExtend({}, this.DEFAULTS, opt_config || {});
        
        this.initDOM();
        this.initGL();
        this.initShader();
        
        this.timer = new Timer();
        this.rotation = 0;
        this.update(this.config.values);
        this.doFrame();
    }
    
    NProgressRing.prototype.DEFAULTS = {
        parentElement: null,
        values: [0],
        size: 256,
        innerRadius: 0.4,
        colorR: 1,
        colorG: 1,
        colorB: 1,
        colorA: 1,
        rotationSpeed: 0.25*Math.PI
    };
    
    NProgressRing.prototype.initDOM = function () {
        this.element = document.createElement('canvas');
        this.element.setAttribute('width', this.config.size);
        this.element.setAttribute('height', this.config.size);
        if (this.config.parentElement) {
            this.config.parentElement.appendChild(this.element);
        }
    };
    
    NProgressRing.prototype.initGL = function () {
        var gl = this.gl = this.element.getContext('webgl');
        gl.clearColor(0,0,0,0);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
        gl.enable(gl.BLEND);
        gl.disable(gl.DEPTH_TEST);
        this.program = gl.createProgram();
        this.quadArray = new Float32Array([
            -1.0, -1.0, 
             1.0, -1.0, 
            -1.0,  1.0, 
            -1.0,  1.0, 
             1.0, -1.0, 
             1.0,  1.0
        ]);
    };
    
    NProgressRing.prototype.initShader = function () {
        var gl = this.gl,
            indexList = [0];
        while (indexList.length < this.config.values.length) {
            indexList.push(indexList[indexList.length-1] + 1);
        }
        if (gl.isShader(this.vertexShader)) {
            gl.detachShader(this.program, this.vertexShader);
            gl.deleteShader(this.vertexShader);
        }
        if (gl.isShader(this.fragmentShader)) {
            gl.detachShader(this.program, this.fragmentShader);
            gl.deleteShader(this.fragmentShader);
        }
        this.vertexShader = this.makeShader(gl.VERTEX_SHADER, [
            "precision mediump float;",
            "attribute vec2 a_position;",
            "varying vec2 v_coord;",
            "",
            "void main() {",
                "v_coord = a_position;",
                "gl_Position = vec4(a_position, 0., 1.);",
            "}"
        ].join('\n'));
        this.fragmentShader = this.makeShader(gl.FRAGMENT_SHADER, [
            "#define PI 3.141592653589793",
            "#define TWOPI 6.283185307179586",
            "#define HALFPI 1.5707963267948966",
            
            "precision mediump float;",
            
            "const vec3 COLOR = " + glVectorString(3, this.config.colorR, this.config.colorG, this.config.colorB) + ";",
            "const float ALPHA = " + this.config.colorA.toPrecision(4) + ";",
            "const int SIZE = " + this.config.size + ";",
            "const int SEGMENT_COUNT = " + this.config.values.length + ";",
            "const float SEGMENT_WIDTH = TWOPI / float(SEGMENT_COUNT);",
            "const float PIXEL = 2. / float(SIZE);",
            "const float HALFPIXEL = PIXEL * 0.5;",
            "const float TWOPIXEL = PIXEL * 2.;",
            "const float ONEANDAHALFPIXEL = PIXEL + HALFPIXEL;",
            "const float MAX_RADIUS = 1.0;",
            "const float MIN_RADIUS = " + this.config.innerRadius.toPrecision(4) + ";",
            "const float RADIUS_THICKNESS = MAX_RADIUS - MIN_RADIUS;",
            
            "uniform float u_values[" + this.config.values.length + "];",
            "uniform float u_rotation;",
            
            "varying vec2 v_coord;",
            "",
            "float value_to_radius(float value) {",
                "return min(RADIUS_THICKNESS * value + MIN_RADIUS, MAX_RADIUS);",
            "}",
            "",
            "void main() {",
                "vec2 p = normalize(v_coord);",
                "float currentAngleFraction = mod(-atan(p.y, p.x) + HALFPI + u_rotation, TWOPI) / TWOPI;",
                //"gl_FragColor = vec4(COLOR, currentAngleFraction); return;",
                
                "int currentIndex = int(floor(currentAngleFraction * float(SEGMENT_COUNT)));",
                //"gl_FragColor = vec4(COLOR, float(currentIndex + 1) / float(SEGMENT_COUNT)); return;",
                
                "float value = 1.0;",
                indexList.map(function (index) {
                    return [
                        "if (currentIndex == " + index + ") {",
                        "value = u_values[" + index + "];",
                        "}"
                    ].join('\n');
                }).join('\n'),
                //"gl_FragColor = vec4(COLOR, radius); return;",
                
                "float outside = (value_to_radius(value) - length(v_coord));",
                "float alpha;",
                "if (MIN_RADIUS > 0.) {",
                    "float inside = length(v_coord) - MIN_RADIUS;",
                    "alpha = min(outside, inside);",
                "} else {",
                    "alpha = outside;",
                "}",
                "alpha = clamp(alpha / PIXEL, 0., 1.) * ALPHA * value;",
                "gl_FragColor = vec4(COLOR, alpha);",
            "}"
        ].join('\n'));
        gl.attachShader(this.program, this.vertexShader);
        gl.attachShader(this.program, this.fragmentShader);
        gl.linkProgram(this.program);
        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
            console.error('could not link shader program');
        }
        gl.useProgram(this.program);
        this.positionAttribute = gl.getAttribLocation(this.program, 'a_position');
        this.valuesUniform = gl.getUniformLocation(this.program, 'u_values');
        this.rotationUniform = gl.getUniformLocation(this.program, 'u_rotation');
    };
    
    NProgressRing.prototype.makeShader = function (kind, source) {
        var shader = this.gl.createShader(kind);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.error(this.gl.getShaderInfoLog(shader));
            console.debug(addLineNumbersToString(source));
            return null;
        }
        return shader;
    };
    
    NProgressRing.prototype.update = function (values) {
        var count = values.length,
            didNeedAnimationFrame = this.needsAnimationFrame;
        this.config.values = values;
        if (count !== this.lastCount) {
            this.initShader();
            this.lastCount = values.length;
        }
        this.needsAnimationFrame = this.config.rotationSpeed !== 0 && !(Math.min.apply(Math, this.config.values) === 1 || Math.max.apply(Math, this.config.values) === 0);
        if (this.config.rotationSpeed == 0 || this.needsAnimationFrame && !didNeedAnimationFrame) {
            this.doFrame();
        }
    };
    
    NProgressRing.prototype.doFrame = function () {
        this.timer.update();
        this.rotation += this.config.rotationSpeed * this.timer.delta;
        this.draw();
        if (this.needsAnimationFrame) {
            this.requestedFrame = requestAnimationFrame(this.doFrame.bind(this));
        }
    };
    
    NProgressRing.prototype.draw = function () {
        var gl = this.gl;
        this.quadBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.quadBuffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            this.quadArray, 
            gl.STATIC_DRAW);
        gl.enableVertexAttribArray(this.positionAttribute);
        gl.vertexAttribPointer(this.positionAttribute, 2, gl.FLOAT, false, 0, 0);
        gl.uniform1fv(this.valuesUniform, this.config.values);
        gl.uniform1f(this.rotationUniform, this.rotation);
        
        gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    
    window.NPROGRESSRING = NProgressRing;
    
})();
