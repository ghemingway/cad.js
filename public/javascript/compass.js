/* G. Hemingway Copyright @2014
 * Visual model navigator - Helps with orientation and viewing aspects
 */

"use strict";

/************************* Compass Class *********************************************/


define(["THREE"], function(THREE) {
    function Compass(compassParent, camera, controls, config) {
        this.controls = controls;
        this.mainCamera = camera;
        this.config = {
            magnitude: config.magnitude ? config.magnitude : 100,
            width: config.width ? config.width : 200,
            height: config.height ? config.height: 200
        };

        // RENDERER
        this.compassParent = document.getElementById(compassParent);
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setClearColor(0x000000, 0);
        this.renderer.setSize(200, 200);
        // CANVAS
        this.canvas = this.renderer.domElement;
        this.compassParent.appendChild(this.canvas);
        // SCENE
        this.scene = new THREE.Scene();
        // CAMERA
        this.camera = new THREE.PerspectiveCamera(50, 1, 1, 1000);
        this.build();

        var self = this;
        this.renderer.domElement.addEventListener('mousemove', function(event) { self.onMouseMove(event); }, true );
        this.renderer.domElement.addEventListener('mousedown', function(event) { self.onMouseDown(event); }, false );
        this.renderer.domElement.addEventListener('mouseup', function(event) { self.onMouseUp(event); }, false );
    }

    Compass.prototype.build = function() {
        var geometry = new THREE.CubeGeometry( 40, 40, 40 );
        var object = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }));


        // Axes
        var origin = new THREE.Vector3(0.0, 0.0, 0.0);
        var xAxisArrow = new THREE.ArrowHelper(new THREE.Vector3(1.0, 0.0, 0.0), origin, 100.0, 0xff0000, 20, 10);
        var yAxisArrow = new THREE.ArrowHelper(new THREE.Vector3(0.0, 1.0, 0.0), origin, 100.0, 0x00ff00, 20, 10);
        var zAxisArrow = new THREE.ArrowHelper(new THREE.Vector3(0.0, 0.0, 1.0), origin, 100.0, 0x0000ff, 20, 10);
        this.scene.add(xAxisArrow);
        this.scene.add(yAxisArrow);
        this.scene.add(zAxisArrow);
        this.update();
    };

    Compass.prototype.update = function() {
        this.camera.up.copy(this.mainCamera.up);
        this.camera.position.copy(this.mainCamera.position);
        this.camera.position.sub(this.controls.target);
        this.camera.lookAt(this.scene.position);
        this.camera.position.setLength(300);
        this.renderer.render(this.scene, this.camera);
    };

    Compass.prototype.onMouseMove = function(event) {
        event.preventDefault();
        event.stopPropagation();
//    console.log("MouseMove");
    };

    Compass.prototype.onMouseDown = function(event) {
        event.preventDefault();
//    console.log("MouseDown");
    };

    Compass.prototype.onMouseUp = function(event) {
        event.preventDefault();
//    console.log("MouseUp");
    };

    return Compass;
});