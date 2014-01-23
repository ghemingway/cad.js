/* G. Hemingway Copyright @2014
 * Manage the drawing context
 */

"use strict";


/*************************************************************************/


define(["THREE", "compass", "viewer_controls"], function(THREE, Compass, ViewerControls) {
    // Define Viewer class
    function Viewer(canvasParent, compassParent) {
        // RENDERER
        this.canvasParent = document.getElementById(canvasParent);
        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.renderer.setSize(this.canvasParent.offsetWidth, this.canvasParent.offsetHeight);
//    this.renderer.shadowMapEnabled = true;
//    this.renderer.shadowMapType = THREE.PCFShadowMap;
        this.renderer.sortObjects = true;

        // CANVAS
        this.canvas = this.renderer.domElement;
        this.canvasParent.appendChild(this.canvas);

        // SCENE
        this.clock = new THREE.Clock();
        this.scene = new THREE.Scene();

        // CAMERA
        this.camera = new THREE.PerspectiveCamera(75, this.canvasParent.offsetWidth / this.canvasParent.offsetHeight, 0.1, 1000000);
        this.camera.position.x = -5000;
        this.camera.position.y = -5000;
        this.camera.position.z = 0;
        this.camera.lookAt(this.scene.position);

        // LIGHTS
        this.scene.add(new THREE.AmbientLight(0xdddddd));
        var light1 = new THREE.DirectionalLight(0xffffff, 0.5);
        light1.position.set(1, 1, 1);
        this.scene.add(light1);

        var light2 = new THREE.DirectionalLight(0xffffff, 0.5);
        light2.position.set(0, -1, 0);
        this.scene.add( light2 );
        /*
         var light3 = new THREE.SpotLight( 0xffffff, 1.5 );
         light3.position.set( 0, 0, 10000 );
         light3.castShadow = true;
         light3.shadowCameraNear = 200;
         light3.shadowCameraFar = this.camera.far;
         light3.shadowCameraFov = 50;
         light3.shadowBias = -0.00022;
         light3.shadowDarkness = 0.5;
         light3.shadowMapWidth = 2048;
         light3.shadowMapHeight = 2048;
         this.scene.add(light3);
         */
        var self = this;
        // VIEW CONTROLS
        this.controls = ViewerControls({
            camera: this.camera,
            canvas: this.canvas
        });

        // COMPASS
        this.compass = new Compass(compassParent, this.camera, this.controls, {
            width: 200,
            height: 200
        });
        this.scene.add(this.compass.object3D);

        // EVENT HANDLERS
        this.controls.addEventListener('change', function() {
            self.render();
        });
        window.addEventListener("resize", function() {
            self.onResize();
        });
        this.animate();
    }

    Viewer.prototype.onResize = function() {
        this.renderer.setSize(this.canvasParent.offsetWidth, this.canvasParent.offsetHeight);
        this.camera.aspect = this.canvasParent.offsetWidth / this.canvasParent.offsetHeight;
        this.camera.updateProjectionMatrix();
        this.camera.lookAt(this.scene.position);
        this.controls.handleResize();
        this.render();
    };

    Viewer.prototype.animate = function() {
        var self = this;
        requestAnimationFrame(function() {
            self.animate();
        });
        this.render();
        this.controls.update();
        this.compass.update();
    };

    Viewer.prototype.render = function() {
        this.renderer.render(this.scene, this.camera);
    };

    Viewer.prototype.buildBoundingBox = function( box ) {
        if (box.empty()) {
            return undefined;
        }
        // Create the new box buffer
        var geometry = new THREE.BufferGeometry();
        geometry.addAttribute( 'position', Float32Array, 36, 3 );

        var positions = geometry.attributes.position.array;
        //Front face bottom
        positions[0]  = box.min.x;
        positions[1]  = box.min.y;
        positions[2]  = box.min.z;
        positions[3]  = box.max.x;
        positions[4]  = box.min.y;
        positions[5]  = box.min.z;
        //Front face left
        positions[6]  = box.min.x;
        positions[7]  = box.min.y;
        positions[8]  = box.min.z;
        positions[9]  = box.min.x;
        positions[10] = box.max.y;
        positions[11] = box.min.z;
        // Front face top
        positions[12] = box.min.x;
        positions[13] = box.max.y;
        positions[14] = box.min.z;
        positions[15] = box.max.x;
        positions[16] = box.max.y;
        positions[17] = box.min.z;
        // Front face right
        positions[18] = box.max.x;
        positions[19] = box.min.y;
        positions[20] = box.min.z;
        positions[21] = box.max.x;
        positions[22] = box.max.y;
        positions[23] = box.min.z;

        // Lower left ->
        positions[24] = box.min.x;

        positions[25] = box.min.y;
        positions[26] = box.min.z;
        positions[27] = box.min.x;
        positions[28] = box.min.y;
        positions[29] = box.max.z;
        // Lower right ->
        positions[30] = box.max.x;
        positions[31] = box.min.y;
        positions[32] = box.min.z;
        positions[33] = box.max.x;
        positions[34] = box.min.y;
        positions[35] = box.max.z;
        // Upper left ->
        positions[36] = box.min.x;
        positions[37] = box.max.y;
        positions[38] = box.min.z;
        positions[39] = box.min.x;
        positions[40] = box.max.y;
        positions[41] = box.max.z;
        // Upper right ->
        positions[42] = box.max.x;
        positions[43] = box.max.y;
        positions[44] = box.min.z;
        positions[45] = box.max.x;
        positions[46] = box.max.y;
        positions[47] = box.max.z;

        // Back face bottom
        positions[48] = box.min.x;
        positions[49] = box.min.y;
        positions[50] = box.max.z;
        positions[51] = box.max.x;
        positions[52] = box.min.y;
        positions[53] = box.max.z;
        // Back face left
        positions[54] = box.min.x;
        positions[55] = box.min.y;
        positions[56] = box.max.z;
        positions[57] = box.min.x;
        positions[58] = box.max.y;
        positions[59] = box.max.z;
        // Back face top
        positions[60] = box.min.x;
        positions[61] = box.max.y;
        positions[62] = box.max.z;
        positions[63] = box.max.x;
        positions[64] = box.max.y;
        positions[65] = box.max.z;
        // Back face right
        positions[66] = box.max.x;
        positions[67] = box.min.y;
        positions[68] = box.max.z;
        positions[69] = box.max.x;
        positions[70] = box.max.y;
        positions[71] = box.max.z;

        // Return the new Bounding Box Geometry
        var material = new THREE.LineBasicMaterial({
            linewidth: 2,
            color: 0x4f95bc
        });
        return new THREE.Line(geometry, material, THREE.LinePieces);
    };

    // Extend Viewer with events
    THREE.EventDispatcher.prototype.apply(Viewer.prototype);
    return Viewer;
});