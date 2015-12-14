/* G. Hemingway Copyright @2015
 * Manage the drawing context/canvas as a React View
 */

"use strict";


import React            from 'react';
import ViewerControls   from './viewer_controls';
import CompassView      from '../compass/compass';
import LoadQueueView    from '../load_queue';

// Import shaders
require('./shaders/CopyShader');
require('./shaders/EffectComposer');
require('./shaders/FXAAShader');
require('./shaders/VelvetyShader');
require('./shaders/SSAOShader');
require('./shaders/ShaderPass');

/*************************************************************************/

export default class CADViewer extends React.Component {
    constructor(props) {
        super(props);
        this.handleResize = this.handleResize.bind(this);
        this.onModelAdd = this.onModelAdd.bind(this);
        this.onModelRemove = this.onModelRemove.bind(this);
        this.invalidate = this.invalidate.bind(this);
    }

    onModelAdd(event) {
        console.log('ModelAdd: ' + event.path);
        var model = this.props.dispatcher._models[event.path];
        //console.log(model);
        //if (this.type)
        // Add the model to the scene
        this.add3DObject(model.getObject3D(), 'geometry');
        this.add3DObject(model.getOverlay3D(), 'overlay');
        this.add3DObject(model.getAnnotation3D(), 'annotation');
        // calculate the scene's radius for draw distance calculations
        this.updateSceneBoundingBox(model.getBoundingBox());
        // center the view
        this.zoomToFit(model);
    }

    onModelRemove(event) {
        console.log('ModelRemove: ' + event.path);
    }

    componentWillMount() {
        this.renderTargetParametersRGBA = {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat
        };

        this.sceneCenter = new THREE.Vector3(0,0,0);
        this.sceneRadius = 10000;
        this.props.dispatcher.addEventListener("model:add", this.onModelAdd);
        this.props.dispatcher.addEventListener("model:remove", this.onModelRemove);
        this.props.dispatcher.addEventListener("shellLoad", this.invalidate);
    }

    componentDidMount() {
        var self = this;
        // RENDERER
        this.canvasParent = document.getElementById(this.props.viewContainerId);
        this.renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById('cadjs-canvas'),
            antialias: true,
            alpha: true
        });
        this.autoAntialiasing = !!this.renderer.context.getContextAttributes().antialias;
        this.renderer.setClearColor(new THREE.Color(0x000000), 1);
        this.renderer.setSize(this.canvasParent.offsetWidth, this.canvasParent.offsetHeight);
        this.renderer.sortObjects = true;
        this.renderer.autoClear = false;

        // SCENES
        this.geometryScene = new THREE.Scene();
        this.annotationScene = new THREE.Scene();
        this.overlayScene = new THREE.Scene();

        // CAMERA
        this.camera = new THREE.PerspectiveCamera(
            75,
            this.canvasParent.offsetWidth / this.canvasParent.offsetHeight,
            0.1,
            1000000
        );
        this.camera.position.x = -5000;
        this.camera.position.y = -5000;
        this.camera.position.z = 0;
        this.camera.lookAt(this.geometryScene.position);

        // EFFECT FXAA
        this.renderPassFXAA = new THREE.ShaderPass(THREE.FXAAShader);
        this.renderPassFXAA.uniforms['resolution'].value.set(1/this.canvasParent.offsetWidth, 1/this.canvasParent.offsetHeight);
        this.renderPassFXAA.renderToScreen = true;
        var renderPassCopy = new THREE.ShaderPass(THREE.CopyShader);
        renderPassCopy.renderToScreen = true;

        // ADD RENDER PASSES
        this.composer = new THREE.EffectComposer(this.renderer);
        this.composer.addPass(this.renderPassFXAA);
        this.composer.addPass(renderPassCopy);

        // VIEW CONTROLS
        this.controls =  new ViewerControls({
            viewer: this,
            camera: this.camera,
            canvas: this.renderer.domElement,
            renderPassFXAA: this.renderPassFXAA
        });

        // CONTROL EVENT HANDLERS
        this.controls.addEventListener('change', function() {
            var x0 = self.sceneCenter,
                x1 = self.camera.position,
                x2 = self.controls.target,
                x2subX1 = x2.clone().sub(x1),
                x1subX0 = x1.clone().sub(x0),
                c = x2subX1.clone().cross(x1.clone().sub(x0)).lengthSq() / x2subX1.lengthSq(),
                d = Math.sqrt(Math.abs(c - x1subX0.lengthSq()));
            self.camera.near = Math.max(0.1, d - self.sceneRadius);
            self.camera.far = d + self.sceneRadius;
            self.camera.updateProjectionMatrix();
            self.invalidate();
        });
        this.controls.addEventListener("start", function() {
            self.continuousRendering = true;
        });
        this.controls.addEventListener("end", function() {
            self.invalidate();
            self.continuousRendering = false;
        });

        this.forceUpdate();
        // SCREEN RESIZE
        window.addEventListener("resize", this.handleResize);
        this.animate(true);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
        this.props.dispatcher.removeEventListener("model:add", this.onModelAdd);
        this.props.dispatcher.removeEventListener("model:remove", this.onModelRemove);
        this.props.dispatcher.removeEventListener("shellLoad", this.invalidate);
    }

    handleResize() {
        //console.log('CADViewer Resize');
        this.renderPassFXAA.uniforms['resolution'].value.set(1 / this.canvasParent.offsetWidth, 1 / this.canvasParent.offsetHeight);
        this.renderer.setSize(this.canvasParent.offsetWidth, this.canvasParent.offsetHeight);
        this.camera.aspect = this.canvasParent.offsetWidth / this.canvasParent.offsetHeight;
        this.composer.reset();
        this.controls.handleResize();
        this.controls.dispatchEvent({ type: 'change' });
        this.update();
    }

    zoomToFit(object) {
        var object3d = object.getObject3D(),
            boundingBox = object.getBoundingBox(),
            radius = boundingBox.size().length() * 0.5,
            horizontalFOV = 2 * Math.atan(THREE.Math.degToRad(this.camera.fov * 0.5) * this.camera.aspect),
            fov = Math.min(THREE.Math.degToRad(this.camera.fov), horizontalFOV),
            dist = radius / Math.sin(fov * 0.5),
            newTargetPosition = boundingBox.max.clone().
            lerp(boundingBox.min, 0.5).
            applyMatrix4(object3d.matrixWorld);
        this.camera.position
            .sub(this.controls.target)
            .setLength(dist)
            .add(newTargetPosition);
        this.controls.target.copy(newTargetPosition);
        this.invalidate();
    }

    drawScene() {
        if (this.autoAntialiasing) {
            this.renderer.clear();
            this.renderer.render(this.geometryScene, this.camera);
        } else {
            //depthPassPlugin.enabled = true;
            this.renderer.render(this.geometryScene, this.camera, this.composer.renderTarget2, true);
            //depthPassPlugin.enabled = false;
            this.composer.render(0.5);
        }
        this.renderer.clear(false, true, false);
        this.renderer.render(this.overlayScene, this.camera);
        this.renderer.render(this.annotationScene, this.camera);
    }

    animate(forceRendering) {
        var self = this;
        window.requestAnimationFrame(function() {
            self.animate(false);
        });
        if (this.continuousRendering === true || this.shouldRender === true || forceRendering === true) {
            this.shouldRender = false;
            this.drawScene();
            this.controls.update();
            // Tell anyone listening to update their view
            this.props.dispatcher.dispatchEvent({ type: 'render:update' });
        }
    }

    invalidate() {
        this.shouldRender = true;
    }

    add3DObject(a3DObject, sceneName) {
        switch(sceneName) {
            case 'overlay':
                this.overlayScene.add(a3DObject);
                break;
            case 'annotation':
                this.annotationScene.add(a3DObject);
                break;
            case 'geometry':
            default:
                this.geometryScene.add(a3DObject);
                break;
        }
        this.invalidate();
    }

    update() {
        if (this.autoAntialiasing) {
            console.log('Viewer.update');
            this.renderer.clear();
            this.renderer.render(this.geometryScene, this.camera);
        } else {
            //depthPassPlugin.enabled = true;
            this.renderer.render(this.geometryScene, this.camera, this.composer.renderTarget2, true);
            //depthPassPlugin.enabled = false;
            this.composer.render(0.5);
        }
        this.renderer.clear(false, true, false);
        this.renderer.render(this.overlayScene, this.camera);
        this.renderer.render(this.annotationScene, this.camera);
    };

    updateSceneBoundingBox(newBoundingBox) {
        this.sceneCenter.copy(newBoundingBox.center());
        this.sceneRadius = newBoundingBox.size().length()/2;
    };

    render() {
        var compass = this.camera ? <CompassView
            compassParentId="cadjs-canvas"
            camera={this.camera}
            controls={this.controls}
            dispatcher={this.props.dispatcher}
        /> : undefined;
        return <div>
            <canvas id="cadjs-canvas" />
            {compass}
            <LoadQueueView dispatcher={this.props.dispatcher} />
        </div>;
    }
};

CADViewer.propTypes = {
    dispatcher: React.PropTypes.object.isRequired
};