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

    // Extend Viewer with events
    THREE.EventDispatcher.prototype.apply(Viewer.prototype);
    return Viewer;
});