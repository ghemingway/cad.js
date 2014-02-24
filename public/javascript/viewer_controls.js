/* L. Juracz Copyright @2014
 * Manage the view control
 */

"use strict";

/* Globals: console */

/********************************* Helper Functions ********************************/

define(["THREE", "TrackballControls", "dat"], function(THREE, TrackballControls, dat) {

    function ViewerControls( options ) {
        var trackballControl = null,
            camera = options.camera,
            canvas = options.canvas,
            viewDistance = options.viewDistance || 13000,
            viewAngles = options.viewAngles || new THREE.Euler( 0, 0 ,0),
        //viewAngles = options.viewAngles || new THREE.Euler( 0, 0, 0 ),
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
            trackballControl.reset();
            /*
            // Widgets
            var gui = new dat.GUI();
            var cameraControlsFolder = gui.addFolder( 'Camera Controls' );
            var distanceController = cameraControlsFolder.add( cameraOrientation, 'distance', 0, 50000 ).listen();
            var aspectController = cameraControlsFolder.add( cameraOrientation, 'aspect', [
                'front',
                'back',
                'left',
                'right',
                'top',
                'bottom'
            ] ).listen();

            cameraControlsFolder.open();

            cameraOrientation.aspect = 'front';

            // Widget Event handlers
            distanceController.onChange( function( val ) {
                var aspect = cameraOrientation.aspect;

                trackballControl.position0.copy( trackballControl.object.position );
                trackballControl.position0.normalize().multiplyScalar( Math.max( val, .1 ) );
                trackballControl.reset();

                cameraOrientation.aspect = aspect;
            } );

            aspectController.onChange( function ( val ) {

                switch ( val ) {

                    case 'back':
                        viewAngles = new THREE.Euler( 0, Math.PI, 0);
                        trackballControl.up0.set( 0, 1, 0 );
                        break;
                    case 'left':
                        viewAngles = new THREE.Euler( 0, -Math.PI / 2, 0);
                        trackballControl.up0.set( 0, 1, 0 );
                        break;
                    case 'right':
                        viewAngles = new THREE.Euler( 0, Math.PI / 2, 0);
                        trackballControl.up0.set( 0, 1, 0 );
                        break;
                    case 'top':
                        viewAngles = new THREE.Euler( Math.PI / 2 , 0, 0);
                        trackballControl.up0.set( 0, 0, 1 );
                        break;
                    case 'bottom':
                        viewAngles = new THREE.Euler( -Math.PI / 2, 0, 0);
                        trackballControl.up0.set( 0, 0, -1 );
                        break;

                    default :
                    case 'front':
                        viewAngles = new THREE.Euler( 0, 0, 0);
                        trackballControl.up0.set( 0, 1, 0 );
                        break;

                }

                var distance = trackballControl.object.position.length();

                trackballControl.position0 = trackballControl.referenceOrientation.clone().applyEuler( viewAngles );
                trackballControl.position0.multiplyScalar( -distance );
                trackballControl.reset();

                cameraOrientation.aspect = val;

            } );
            */
            trackballControl.setRotationFromEuler = function (euler, opt_upVector) {
                var distance = trackballControl.object.position.length(),
                    upVector = typeof(opt_upVector) === 'undefined' ? trackballControl.up0 : opt_upVector;
                trackballControl.position0 = referenceOrientation.clone().applyEuler(euler);
                trackballControl.up0.set(upVector.x, upVector.y, upVector.z);
                trackballControl.position0.multiplyScalar(-distance);
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

    function CameraOrientationHelper( viewAngles, viewDistance, trackballControl ) {
        var that = {
            distance: null,
            angles: {
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0
            },
            aspect: 'front',
            update: function( newViewAngles, newViewDistance ) {
                that.angles.rotationX = makePositiveAngle( Math.round( viewAngles.x * 180/Math.PI ) );
                that.angles.rotationY = makePositiveAngle( Math.round( viewAngles.y * 180/Math.PI ) );
                that.angles.rotationZ = makePositiveAngle( Math.round( viewAngles.z * 180/Math.PI ) );
                that.distance = newViewDistance;
            }
        };
        that.update( viewAngles, viewDistance );

        var on_trackBallControlChanged = function() {
            that.distance = trackballControl.object.position.length();
            that.angles.rotationX = makePositiveAngle( Math.round( trackballControl.object.rotation.x * 180/Math.PI ) );
            that.angles.rotationY = makePositiveAngle( Math.round( trackballControl.object.rotation.y * 180/Math.PI ) );
            that.angles.rotationZ = makePositiveAngle( Math.round( trackballControl.object.rotation.z * 180/Math.PI ) );

            that.aspect = 'custom';

        };

        trackballControl.addEventListener( 'change' , on_trackBallControlChanged );

        return that;
    }

    function makePositiveAngle( rotA ) {
        if ( rotA >= 0 ) {
            return rotA;
        } else {
            return 360 + rotA;
        }
    }
    return ViewerControls;
});

