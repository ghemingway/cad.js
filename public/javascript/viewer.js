/* G. Hemingway Copyright @2014
 * Manage the drawing context
 */

"use strict";


/*************************************************************************/


define(["THREE", "compass", "viewer_controls"], function(THREE, Compass, ViewerControls) {
    function Viewer(canvasParentId, compassParentId, canvasClearColor) {
        var shouldRender = false,
            continuousRendering = false,
            canvasParent, renderer, canvas, scene, camera,
//          light1, light2,
            controls, compass,
            render, animate, add3DObject, invalidate,
            renderTargetParametersRGBA, depthTarget, depthPassPlugin,
            composer, renderPassSSAO, renderPassFXAA, renderPassCopy;

        renderTargetParametersRGBA = {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat
        };

        // RENDERER
        canvasParent = document.getElementById(canvasParentId);
        renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        this.renderer = renderer;
        
        renderer.setClearColor( canvasClearColor );
        renderer.setSize(canvasParent.offsetWidth, canvasParent.offsetHeight);
        //    renderer.shadowMapEnabled = true;
        //    renderer.shadowMapType = THREE.PCFShadowMap;
        renderer.sortObjects = true;
        renderer.autoClear = false;
        // DEPTH PASS
        depthTarget = new THREE.WebGLRenderTarget(canvasParent.offsetWidth, canvasParent.offsetHeight, renderTargetParametersRGBA);
        depthPassPlugin = new THREE.DepthPassPlugin();
        depthPassPlugin.renderTarget = depthTarget;
        depthPassPlugin.enabled = false;
        renderer.addPrePlugin(depthPassPlugin);
        // CANVAS
        canvas = renderer.domElement;
        canvasParent.appendChild(canvas);
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
        camera.lookAt(scene.position);

        // EFFECTS
        composer = new THREE.EffectComposer(renderer);
        // EFFECT SSAO
        renderPassSSAO = new THREE.ShaderPass(THREE.SSAOShader);
        renderPassSSAO.uniforms['tDepth'].value = depthTarget;
        renderPassSSAO.uniforms['size'].value.set(canvasParent.offsetWidth, canvasParent.offsetHeight);
        renderPassSSAO.uniforms['cameraNear'].value = camera.near;
        renderPassSSAO.uniforms['cameraFar'].value = camera.far;
        renderPassSSAO.uniforms['aoClamp'].value = 0.9;
        renderPassSSAO.uniforms['lumInfluence'].value = 0.5;
        renderPassSSAO.enabled = false;
        // EFFECT FXAA
        renderPassFXAA = new THREE.ShaderPass(THREE.FXAAShader);
        renderPassFXAA.uniforms['resolution'].value.set(1/canvasParent.offsetWidth, 1/canvasParent.offsetHeight);
        // EFFECTS COPY
        renderPassCopy = new THREE.ShaderPass(THREE.CopyShader);
        renderPassCopy.renderToScreen = true;
        // ADD RENDER PASSES
        composer.addPass(renderPassSSAO);
        composer.addPass(renderPassFXAA);
        composer.addPass(renderPassCopy);

        /* Lights are no longer needed since we use a simplified lighting shader
        // LIGHTS
        scene.add(new THREE.AmbientLight(0xdddddd));
        light1 = new THREE.DirectionalLight(0xffffff, 0.5);
        light1.position.set(1, 1, 1);
        scene.add( light1 );

        light2 = new THREE.DirectionalLight(0xffffff, 0.5);
        light2.position.set(0, -1, 0);
        scene.add(light2);
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
            viewer: this,
            camera: camera,
            canvas: canvas,
            renderPassSSAO: renderPassSSAO,
            renderPassFXAA: renderPassFXAA
        });

        // COMPASS
        compass = new Compass(compassParentId, camera, controls, {
            width: 200,
            height: 200
        });

        // PRIVATE FUNCTIONS
        render = function() {
            depthPassPlugin.enabled = true;
            renderer.render(scene, camera, composer.renderTarget2, true);
            depthPassPlugin.enabled = false;
            composer.render(0.5);
        };
        animate = function(forceRendering) {
            requestAnimationFrame(function() {
                animate(false);
            });
            if (continuousRendering === true || shouldRender === true || forceRendering === true) {
                shouldRender = false;
                render();
                controls.update();
                compass.update();
            }
        };
        invalidate = function() {
            shouldRender = true;
        };
        add3DObject = function(a3DObject) {
            scene.add( a3DObject );
            invalidate();
        };

        // CONTROL EVENT HANDLERS
        controls.addEventListener("change", function() {
            invalidate();
        });
        controls.addEventListener("start", function() {
            continuousRendering = true;
        });
        controls.addEventListener("end", function() {
            invalidate();
            continuousRendering = false;
        });

        // SCREEN RESIZE
        window.addEventListener("resize", function() {
            depthTarget = new THREE.WebGLRenderTarget(canvasParent.offsetWidth, canvasParent.offsetHeight, renderTargetParametersRGBA);
            depthPassPlugin.renderTarget = depthTarget;
            renderPassSSAO.uniforms['tDepth'].value = depthTarget;
            renderPassSSAO.uniforms['size'].value.set(canvasParent.offsetWidth, canvasParent.offsetHeight);
            renderPassFXAA.uniforms['resolution'].value.set(1/canvasParent.offsetWidth, 1/canvasParent.offsetHeight);
            renderer.setSize(canvasParent.offsetWidth, canvasParent.offsetHeight);
            camera.aspect = canvasParent.offsetWidth / canvasParent.offsetHeight;
            camera.updateProjectionMatrix();
            camera.lookAt(scene.position);
            composer.reset();
            controls.handleResize();
            render();
        });

        // MAKING PUBLIC
        this.camera = camera;
        this.controls = controls;
        this.invalidate = invalidate;
        this.add3DObject = add3DObject;
        animate(true); // Initial Rendering
    }

    // Extend Viewer with events
    THREE.EventDispatcher.prototype.apply(Viewer.prototype);
    return Viewer;
});
