/* G. Hemingway Copyright @2015
 * Manage the drawing context/canvas as a React View
 */

"use strict";


import React            from 'react';
import ViewerControls   from './viewer_controls';
import CompassView      from '../compass/compass';
import LoadQueueView    from '../load_queue';
import ModelTreeView    from '../model_tree/model_tree';

// Import shaders
require('./shaders/CopyShader');
require('./shaders/MaskPass');
require('./shaders/EffectComposer');
require('./shaders/FXAAShader');
require('./shaders/VelvetyShader');
require('./shaders/SSAOShader');
require('./shaders/ShaderPass');

/*************************************************************************/

export default class CADViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modelTree: {},
            selected: [],
            change: true
        };
        this.handleResize   = this.handleResize.bind(this);
        this.onShellLoad    = this.onShellLoad.bind(this);
        this.onModelAdd     = this.onModelAdd.bind(this);
        this.onModelRemove  = this.onModelRemove.bind(this);
        this.invalidate     = this.invalidate.bind(this);
        this.onKeypress     = this.onKeypress.bind(this);
        this.onMouseUp      = this.onMouseUp.bind(this);
        this.onMouseMove    = this.onMouseMove.bind(this);
    }

    onShellLoad(event) {
        this.state.change = false;
        this.invalidate(event);
    }

    onModelAdd(event) {
        var model = this.props.manager._models[event.path];
        // Add the model to the scene
        this.add3DObject(model.getObject3D(), 'geometry');
        this.add3DObject(model.getOverlay3D(), 'overlay');
        this.add3DObject(model.getAnnotation3D(), 'annotation');
        // calculate the scene's radius for draw distance calculations
        this.updateSceneBoundingBox(model.getBoundingBox());
        // center the view
        this.zoomToFit(model);
        // Update the model tree
        var tree = this.props.manager.getTree();
        this.setState({ modelTree:tree });
    }

    onModelRemove(event) {
        console.log('ModelRemove: ' + event.path);
        // Update the model tree
        var tree = this.props.manager.getTree();
        this.setState({ modelTree: tree });
    }

    onKeypress(event) {
        var obj;
        switch(event.keyCode || event.charCode || event.which) {
            // Explode on 'x' key pressed
            case 120:
                //this.explode(this.manager.getExplodeDistance());
                this.props.manager.dispatchEvent({ type: 'explode', step: 10 });
                this.invalidate();
                break;
            // Unexplode on 's' key pressed
            case 115:
                //this.explode(-this.manager.getExplodeDistance());
                this.props.manager.dispatchEvent({ type: 'explode', step: -10 });
                this.invalidate();
                break;
            // 'q' unselects all tree elements
            case 113:
                //this._parts[0].hideAllBoundingBoxes();
                //this.tree.deselect_all();
                //this.invalidate();
                break;
            // 'o' to toggle transparency
            case 111:
                this.props.manager.dispatchEvent({ type: 'opacity' });
                this.invalidate();
                break;
            // 'z' to zoomToFit
            case 122:
                //node = this.tree.get_selected(false);
                //obj = this._parts[0].getByID(node[0]);
                //if (!obj) {
                //    obj = this._parts[0];
                //}
                //this.zoomToFit(obj);
                break;
            // 'j' hide/show element
            case 106:
                this.props.manager.dispatchEvent({ type: 'visibility' });
                this.invalidate();
                break;
        }
    }

    componentWillMount() {
        var self = this;
        this.renderTargetParametersRGBA = {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat
        };

        this.sceneCenter = new THREE.Vector3(0,0,0);
        this.sceneRadius = 10000;
        this.props.manager.addEventListener("model:add", this.onModelAdd);
        this.props.manager.addEventListener("model:remove", this.onModelRemove);
        this.props.manager.addEventListener("shellLoad", this.onShellLoad);
        this.props.manager.addEventListener("invalidate", this.invalidate);
        // Keybased events
        window.addEventListener("keypress", this.onKeypress, true);
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
            console.log('Controls.change: ' + self.state.change);
            self.state.change = true;
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
            console.log('Controls.start: ' + self.state.change);
            self.continuousRendering = true;
            self.state.change = false;
        });
        this.controls.addEventListener("end", function() {
            console.log('Controls.end: ' + self.state.change);
            self.invalidate();
            self.continuousRendering = false;
        });

        // SCREEN RESIZE
        window.addEventListener("resize", this.handleResize);
        this.animate(true);
        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
        window.removeEventListener("keypress", this.onKeypress);
        this.props.manager.removeEventListener("model:add", this.onModelAdd);
        this.props.manager.removeEventListener("model:remove", this.onModelRemove);
        this.props.manager.removeEventListener("shellLoad", this.onShellLoad);
        this.props.manager.removeEventListener("invalidate", this.invalidate);
    }

    handleResize() {
        this.renderPassFXAA.uniforms['resolution'].value.set(1 / this.canvasParent.offsetWidth, 1 / this.canvasParent.offsetHeight);
        this.renderer.setSize(this.canvasParent.offsetWidth, this.canvasParent.offsetHeight);
        this.camera.aspect = this.canvasParent.offsetWidth / this.canvasParent.offsetHeight;
        this.composer.reset();
        this.controls.handleResize();
        this.controls.dispatchEvent({ type: 'change' });
        this.drawScene();
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
        //this.renderer.clear(false, true, false);
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
            this.props.manager.dispatchEvent({ type: 'render:update' });
        }
    }

    invalidate(options) {
        if (options && options.tree) {
            // Update the model tree
            var tree = this.props.manager.getTree();
            this.setState({ modelTree: tree });
        }
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

    updateSceneBoundingBox(newBoundingBox) {
        this.sceneCenter.copy(newBoundingBox.center());
        this.sceneRadius = newBoundingBox.size().length() / 2;
    };

    onClick(event) {
        var self = this, tree;
        if (_.size(this.props.manager._models) === 0) {
            return;
        }
        // Clear selections if meta key not pressed
        if (!event.metaKey) {
            _.each(this.props.manager._models, function(model) {
                model.hideAllBoundingBoxes();
            });
            // Update the model tree
            tree = this.props.manager.getTree();
            this.setState({ modelTree: tree });
        }
        var obj = _.reduce(this.props.manager._models, function(memo, model) {
            var val = model.select(self.camera, event.clientX, event.clientY);
            return memo || val;
        }, undefined);
        // Did we find an object
        if (obj) {
            obj = obj.getNamedParent();
            // Show the bounding box
            obj.showBoundingBox();
            // Update the model tree
            tree = this.props.manager.getTree();
            this.setState({ modelTree: tree });
        }
        this.invalidate();
    }

    onMouseUp(event) {
        console.log('MouseUp: ' + this.state.change);
        if (!this.state.change) {
            this.onClick(event);
        }
        this.state.change = false;
    }

    onMouseMove(event) {
        console.log('MouseMove: ' + this.state.change);
        if (!this.state.change) {
            var obj, self = this;
            if (_.size(this.props.manager._models) > 0) {
                _.each(this.props.manager._models, function(model) {
                    model.clearHighlights();
                });
                obj = _.reduce(this.props.manager._models, function(memo, model) {
                    var val = model.select(self.camera, event.clientX, event.clientY);
                    return memo || val;
                }, undefined);
                // Did we find an object
                if (obj) {
                    obj = obj.getNamedParent();
                    // Yes, go highlight it in the tree
                    obj.highlight(0xffff60);
                }
            }
            if (obj != this._lastHovered) {
                this.invalidate();
            }
            this._lastHovered = obj;
        }
    }

    render() {
        var compass = this.camera ? <CompassView
            compassParentId="cadjs-canvas"
            camera={this.camera}
            controls={this.controls}
            dispatcher={this.props.manager}
        /> : undefined;
        return <div>
            <canvas id="cadjs-canvas" onMouseUp={this.onMouseUp} onMouseMove={this.onMouseMove} />
            {compass}
            <LoadQueueView dispatcher={this.props.manager} />
            <ModelTreeView dispatcher={this.props.manager} tree={this.state.modelTree} />
        </div>;
    }
};

CADViewer.propTypes = {
    manager: React.PropTypes.object.isRequired
};