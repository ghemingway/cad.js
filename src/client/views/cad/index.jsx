/* G. Hemingway Copyright @2015
 * Manage the drawing context/canvas as a React View
 */

"use strict";


let _                   = require('lodash');
import React            from 'react';
import ViewerControls   from './viewer_controls';
import CompassView      from '../compass/compass';
import LoadQueueView    from '../load_queue';
import ModelTreeView    from '../model_tree/model_tree';

// Import shaders
require('./shaders/VelvetyShader');

/*************************************************************************/

export default class CADViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modelTree: {},
            isViewChanging: false,
            lastHovered: undefined
        };
        this.handleResize   = this.handleResize.bind(this);
        this.onShellLoad    = this.onShellLoad.bind(this);
        this.onModelAdd     = this.onModelAdd.bind(this);
        this.onModelRemove  = this.onModelRemove.bind(this);
        this.invalidate     = this.invalidate.bind(this);
        this.onKeypress     = this.onKeypress.bind(this);
        this.onMouseUp      = this.onMouseUp.bind(this);
        this.onMouseMove    = this.onMouseMove.bind(this);
        this.onTreeClick    = this.onTreeClick.bind(this);
        this.onTreeChange   = this.onTreeChange.bind(this);
        this.onTreeNodeEnterExit = this.onTreeNodeEnterExit.bind(this);
    }

    onShellLoad(event) {
        // Get around the fact that viewerControls calls change a bunch at startup
        this.state.isViewChanging = false;
        this.invalidate(event);
    }

    onModelAdd(event) {
        let model = this.props.manager._models[event.path];
        // Add the model to the scene
        this.annotationScene.add(   model.getAnnotation3D());
        this.geometryScene.add(     model.getObject3D());
        this.overlayScene.add(      model.getOverlay3D());
        // calculate the scene's radius for draw distance calculations
        this.updateSceneBoundingBox(model.getBoundingBox());
        // Go to preset view for NC models
        if(model.type === 'nc') {
            this.camera.position.set(-6.997719433230415, 7.055664289079229, 10.589898666998387);
            this.camera.up.set(0.31370902211057955, -0.32595607647788327, 0.891817966657745);
        }
        // center the view
        this.zoomToFit([model]);
        // Update the model tree
        let tree = this.props.manager.getTree();
        this.setState({ modelTree:tree });
    }

    onModelRemove(event) {
        console.log('ModelRemove: ' + event.path);
        // TODO: Need to do anything here?
        // Update the model tree
        let tree = this.props.manager.getTree();
        this.setState({ modelTree: tree });
    }

    onKeypress(event) {
        switch(event.keyCode || event.charCode || event.which) {
            // Go to special viewing postion on 'a'
            case 97:
                //console.log(this.camera);
                this.camera.position.set(-6.997719433230415, 7.055664289079229, 10.589898666998387);
                this.camera.up.set(0.31370902211057955, -0.32595607647788327, 0.891817966657745);
                break;
            // Explode on 'x' key pressed
            case 120:
                this.props.manager.explode(10);
                break;
            // Unexplode on 's' key pressed
            case 115:
                this.props.manager.explode(-10);
                break;
            // 'q' reset all elements
            case 113:
                this.props.manager.clear();
                break;
            // 'o' to toggle transparency
            case 111:
                this.props.manager.toggleOpacity();
                break;
            // 'z' to zoomToFit
            case 122:
                let objs = this.props.manager.getSelected();
                this.zoomToFit(objs);
                break;
            // 'j' hide/show element
            case 106:
                this.props.manager.toggleVisibility();
                break;
        }
        this.invalidate({ tree: true });
    }

    componentWillMount() {
        this.sceneCenter = new THREE.Vector3(0,0,0);
        this.sceneRadius = 10000;
        this.props.manager.addEventListener("model:add", this.onModelAdd);
        this.props.manager.addEventListener("model:remove", this.onModelRemove);
        this.props.manager.addEventListener("shellLoad", this.onShellLoad);
        this.props.manager.addEventListener("annotationLoad", this.invalidate);
        this.props.manager.addEventListener("invalidate", this.invalidate);
        // Keybased events
        window.addEventListener("keypress", this.onKeypress, true);
    }

    componentDidMount() {
        let self = this;
        // RENDERER
        this.canvasParent = document.getElementById(this.props.viewContainerId);
        this.renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById('cadjs-canvas'),
            antialias: true,
            alpha: false
        });
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

        // VIEW CONTROLS
        this.controls =  new ViewerControls({
            viewer: this,
            camera: this.camera,
            canvas: this.renderer.domElement
        });

        // CONTROL EVENT HANDLERS
        this.controls.addEventListener('change', function() {
            self.state.isViewChanging = true;
            let x0 = self.sceneCenter,
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
            self.state.isViewChanging = false;
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
        this.props.manager.removeEventListener("shellLoad", this.invalidate);
        this.props.manager.removeEventListener("annotationLoad", this.invalidate);
        this.props.manager.removeEventListener("invalidate", this.invalidate);
    }

    handleResize() {
        this.renderer.setSize(this.canvasParent.offsetWidth, this.canvasParent.offsetHeight);
        this.camera.aspect = this.canvasParent.offsetWidth / this.canvasParent.offsetHeight;
        this.controls.handleResize();
        this.controls.dispatchEvent({ type: 'change' });
        this.drawScene();
    }

    zoomToFit(objects) {
        if (!objects || objects.length === 0) return;
        let object = objects[0];
        let object3d = object.getObject3D(),
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
        this.renderer.clear();
        this.renderer.render(this.geometryScene, this.camera);
        this.renderer.render(this.overlayScene, this.camera);
        this.renderer.render(this.annotationScene, this.camera);
    }

    animate(forceRendering) {
        let self = this;
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
            let tree = this.props.manager.getTree();
            this.setState({ modelTree: tree });
        }
        this.shouldRender = true;
    }

    updateSceneBoundingBox(newBoundingBox) {
        this.sceneCenter.copy(newBoundingBox.center());
        this.sceneRadius = newBoundingBox.size().length() / 2;
    };

    // Handle all object selection needs
    handleSelection(obj, event) {
        let change = false, flip = false;
        let selected = this.props.manager.getSelected();
        // Toggle selection if already selected
        if (obj && selected.length === 1 && selected[0].getID() === obj.getID()) {
            flip = true;
        }
        // Allow meta for multi-selection
        if (!event.metaKey && !flip) {
            // Clear all currently selected objects
            this.props.manager.clearSelected(selected);
            change = true;
        }
        // Did we find an object
        if (obj) {
            obj = obj.getNamedParent();
            // Toggle the bounding box
            obj.toggleSelection();
            change = true;
        }
        if (change) {
            // Update the model tree
            let tree = this.props.manager.getTree();
            this.setState({ modelTree: tree });
            this.invalidate();
        }
    }

    // Handle clicking in the model view for selection
    onMouseUp(event) {
        if (!this.state.isViewChanging && this.props.manager.modelCount() > 0) {
            let obj = this.props.manager.hitTest(this.camera, event);
            this.handleSelection(obj, event);
        }
    }

    // Handle clicking in the model tree for selection
    onTreeClick(node, event) {
        this.handleSelection(node.obj, event);
    }

    // Handle synchronization of collapse/expand in the tree
    onTreeChange(tree, parent, node) {
        if (!parent && node) {
            node.obj.toggleCollapsed();
            tree = this.props.manager.getTree();
            this.setState({ modelTree: tree });
        }
    }

    // Handle all object highlighting needs
    handleHighlighting(obj) {
        let change = false;
        if (this.state.lastHovered && (!obj || obj.getID() != this.state.lastHovered.getID())) {
            // Clear existing highlight
            this.state.lastHovered.toggleHighlight();
            change = true;
        }
        // Did we find a new object
        if (obj && (!this.state.lastHovered || obj.getID() != this.state.lastHovered.getID())) {
            obj = obj.getNamedParent();
            // Yes, go highlight it in the tree
            obj.toggleHighlight(0xffff60);
            change = true;
        }
        // Update the model tree and redraw if things have changed
        if (change) {
            let tree = this.props.manager.getTree();
            this.setState({ modelTree: tree });
            this.invalidate();
        }
        this.state.lastHovered = obj;
    }

    // Handle mouse movements in the model view for highlighting
    onMouseMove(event) {
        if (!this.state.isViewChanging && this.props.manager.modelCount() > 0) {
            let obj = this.props.manager.hitTest(this.camera, event);
            this.handleHighlighting(obj);
        }
    }

    // Handle mouse movements in the model tree for highlighting
    onTreeNodeEnterExit(node) {
        this.handleHighlighting(node.obj);
    }

    render() {
        let compass = this.camera ? <CompassView
            compassParentId="cadjs-canvas"
            camera={this.camera}
            controls={this.controls}
            dispatcher={this.props.manager}
        /> : undefined;
        return <div>
            <canvas id="cadjs-canvas" onMouseUp={this.onMouseUp} onMouseMove={this.onMouseMove} />
            {compass}
            <LoadQueueView dispatcher={this.props.manager} />
            <ModelTreeView
                onChange={this.onTreeChange}
                onClick={this.onTreeClick}
                onNodeEnter={this.onTreeNodeEnterExit}
                onNodeLeave={this.onTreeNodeEnterExit}
                tree={this.state.modelTree} />
        </div>;
    }
};

CADViewer.propTypes = {
    manager: React.PropTypes.object.isRequired
};