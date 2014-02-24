/* G. Hemingway Copyright @2014
 * Visual model navigator - Helps with orientation and viewing aspects
 */

"use strict";

/************************* Compass Class *********************************************/


define([
    "THREE",
    "text!templates/compass_dom.html"
], function(THREE, compassDomText) {
    'use strict';

    function setStyleTransform (element, value) {
        var style = element.style,
            styleNames = setStyleTransform._transformPropertyNames,
            i;
        for (i=0;i<styleNames.length;++i) {
            if (typeof(style[styleNames[i]]) !== 'undefined') {
                style[styleNames[i]] = value;
            }
        }
    }
    setStyleTransform._transformPropertyNames = [
        'transform',
        'webkitTransform',
        'MozTransform'
    ];


    function Compass(compassParentId, camera, controls, config) {
        this.compassParent = $('#'+compassParentId);
        this.controls = controls;
        this.camera = camera;
        this.config = {
            magnitude: config.magnitude ? config.magnitude : 100,
            width: config.width ? config.width : 200,
            height: config.height ? config.height: 200
        };
        this.compassParent.html(compassDomText);
        this.compassCube = document.getElementById('compass-cube');
        this.compassCubeMatrix = new THREE.Matrix4();

        this.bindEvents();
    }

    Compass.prototype.bindEvents = function () {
        var that = this,
            cubeButtons = document.querySelectorAll('.cube-button'),
            defaultUpVector = new THREE.Vector3(0,1,0);
        Array.prototype.map.call(cubeButtons, function (button) {
            button.addEventListener('click', function () {
                var upVector, upValues, eulerOrder;
                if (typeof(button.dataset.up) !== 'undefined') {
                    upValues = button.dataset.up.split(',').map(parseFloat);
                    upVector = new THREE.Vector3(upValues[0],upValues[1],upValues[2]);
                } else {
                    upVector = defaultUpVector;
                }
                eulerOrder = typeof(button.dataset.order) === 'undefined' ? 'XYZ' : button.dataset.order;

                var conversionFactor = Math.PI / 180.0;
                var viewAngles = new THREE.Euler(parseFloat(button.dataset.x)*conversionFactor,
                                                 parseFloat(button.dataset.y)*conversionFactor,
                                                 parseFloat(button.dataset.z)*conversionFactor,
                                                 eulerOrder);

                that.controls.setRotationFromEuler(viewAngles, upVector /* allowed to be undefined */);

            });
        });
    };

    Compass.prototype.update = function () {
        var up = this.camera.up,
            lookFrom = this.camera.position,
            lookTarget = this.controls.target,
            matrix = new THREE.Matrix4(),
            roundedMatrix;
        matrix.lookAt(lookTarget, lookFrom, up);
        this.compassCubeMatrix.getInverse(matrix);
        roundedMatrix = Array.prototype.map.call(this.compassCubeMatrix.elements, function (v) {
            return v.toFixed(3);
        });
        setStyleTransform(this.compassCube, 'perspective(500px) matrix3d('+roundedMatrix.join()+')');
    };

    return Compass;
});
