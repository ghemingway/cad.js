/* L. Juracz Copyright @2014
 * Manage the view control
 */

"use strict";

/* Globals: console */

/********************************* Helper Functions ********************************/

define(["THREE", "TrackballControls"], function(THREE, TrackballControls) {

    function ViewerControls( options ) {
        var trackballControl = null,
            camera = options.camera,
            canvas = options.canvas,
            viewDistance = options.viewDistance || 13000,
            viewAngles = options.viewAngles || new THREE.Euler( 0, 0 ,0),
            referenceOrientation = new THREE.Vector3( 0, 0, 1 );

        function init() {
            trackballControl = new THREE.TrackballControls( camera, canvas );
            trackballControl.rotateSpeed = 1.0;
            trackballControl.zoomSpeed = 1.2;
            trackballControl.panSpeed = 0.8;
            trackballControl.noZoom = false;
            trackballControl.noPan = false;
            trackballControl.staticMoving = true;
            trackballControl.dynamicDampingFactor = 0.3;
            // Initial position
            trackballControl.up0.set( 0, 1, 0 );
            trackballControl.position0 = referenceOrientation.clone().applyEuler( viewAngles  );
            trackballControl.position0.multiplyScalar( -viewDistance );
            trackballControl.sceneRadius = viewDistance;
            trackballControl._reset = trackballControl.reset;
            trackballControl._update = trackballControl.update;
            trackballControl.reset = function () {
                var radius = this.sceneRadius || 0;
                this._reset();
                camera.far = radius + camera.position.length();
            };
            trackballControl.update = function () {
                var radius = this.sceneRadius || 0;
                this._update();
                camera.far = radius + camera.position.length();
            };
            trackballControl.reset();
            trackballControl.setRotationFromEuler = function (euler, opt_upVector) {
                var distance = trackballControl.object.position.length(),
                    upVector = typeof(opt_upVector) === 'undefined' ? trackballControl.up0 : opt_upVector;
                trackballControl.position0 = referenceOrientation.clone().applyEuler(euler).multiplyScalar(-distance);
                trackballControl.up0.set(upVector.x, upVector.y, upVector.z);
                trackballControl.reset();
            };
        }
        if ( camera !== undefined && camera !== null ) {
            init();
        } else {
            throw( new Error("No camera specified") );
        }

        return trackballControl;
    }

    return ViewerControls;
});

