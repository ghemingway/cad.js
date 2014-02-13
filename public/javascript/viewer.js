/* G. Hemingway Copyright @2014
 * Manage the drawing context
 */

"use strict";


/*************************************************************************/


define( [ "THREE", "compass", "viewer_controls" ], function( THREE, Compass, ViewerControls ) {
    // Define Viewer class
    function Viewer( canvasParentId, compassParentId ) {

        var self = this,
            shouldRender = false,
            continuousRendering = false,

            canvasParent, renderer, canvas, scene, camera,
            light1, light2, controls, compass,

            render, animate, add3DObject, invalidate;
        

        // RENDERER
        canvasParent = document.getElementById( canvasParentId );

        renderer = new THREE.WebGLRenderer( { antialias: true });
        renderer.setSize( canvasParent.offsetWidth, canvasParent.offsetHeight );

        //    renderer.shadowMapEnabled = true;
        //    renderer.shadowMapType = THREE.PCFShadowMap;
        renderer.sortObjects = true;

        // CANVAS
        canvas = renderer.domElement;
        canvasParent.appendChild( canvas );

        // SCENE
        scene = new THREE.Scene();

        // CAMERA
        camera = new THREE.PerspectiveCamera(
            75,
            canvasParent.offsetWidth / canvasParent.offsetHeight,
            0.1,
            1000000
        );
        camera.position.x = -5000;
        camera.position.y = -5000;
        camera.position.z = 0;
        camera.lookAt( scene.position );

        // LIGHTS
        scene.add( new THREE.AmbientLight( 0xdddddd ) );
        light1 = new THREE.DirectionalLight( 0xffffff, 0.5 );
        light1.position.set( 1, 1, 1 );
        scene.add( light1 );

        light2 = new THREE.DirectionalLight( 0xffffff, 0.5 );
        light2.position.set( 0, -1, 0 );
        scene.add( light2 );
        /*
         light3 = new THREE.SpotLight( 0xffffff, 1.5 );
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

        // VIEW CONTROLS
        controls =  ViewerControls({
            camera: camera,
            canvas: canvas
        });


        // COMPASS
        compass = new Compass( compassParentId, camera, controls, {
            width: 200,
            height: 200
        });

        scene.add( compass.object3D );


        // PRIVATE FUNCTIONS

        render = function() {
            renderer.render( scene,  camera );
        };

        animate = function( forceRendering ) {

            requestAnimationFrame( function() {
                animate( false );
            } );


            if ( continuousRendering === true || shouldRender === true || forceRendering === true ) {

                shouldRender = false;

                render();
                controls.update();
                compass.update();

            }
        };

        invalidate = function() {
            shouldRender = true;
        };

        add3DObject = function( a3DObject ) {
            scene.add( a3DObject );

            invalidate();
        };

        // CONTROL EVENT HANDLERS
        controls.addEventListener( 'change', function() {
            invalidate();
        });

        controls.addEventListener( 'start', function() {
            continuousRendering = true;
        });

        controls.addEventListener( 'end', function() {
            continuousRendering = false;
        });


        // SCREEN RESIZE
        window.addEventListener( "resize", function() {
            renderer.setSize( canvasParent.offsetWidth,  canvasParent.offsetHeight );
            camera.aspect =  canvasParent.offsetWidth / canvasParent.offsetHeight;
            camera.updateProjectionMatrix();
            camera.lookAt( scene.position );
            controls.handleResize();
            render();
        });


        // MAKING PUBLIC

        this.camera = camera;
        this.controls = controls;
        this.invalidate = invalidate;
        this.add3DObject = add3DObject;

        animate( true ); // Initial Rendering
    }


    // Extend Viewer with events
    THREE.EventDispatcher.prototype.apply(Viewer.prototype);

    return Viewer;
});