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


    function Compass(compassParentId, camera, controls) {
        var that = this;
        this.compassParent = $('#'+compassParentId);
        this.controls = controls;
        this.camera = camera;
        this.compassParent.html(compassDomText);
        this.$cubeButtons = $('.cube-button', this.compassParent);
        this.compassCube = document.getElementById('compass-cube');
        this.compassCubeMatrix = new THREE.Matrix4();
        this.bindEvents();
    }

    Compass.prototype.bindEvents = function () {
        var that = this,
            defaultUpVector = new THREE.Vector3(0,1,0);
        this.$cubeButtons.
            on('mouseenter', function (e) {
                that.$cubeButtons.
                    removeClass('hover').
                    filter('[data-group="'+$(this).attr('data-group')+'"]').
                    addClass('hover');
            }).
            on('mouseleave', function (e) {
                that.$cubeButtons.removeClass('hover');
            }).
            on('click', function (e) {
                var upVector, upValues, eulerOrder;
                if (typeof(this.dataset.up) !== 'undefined') {
                    upValues = this.dataset.up.split(',').map(parseFloat);
                    upVector = new THREE.Vector3(upValues[0],upValues[1],upValues[2]);
                } else {
                    upVector = defaultUpVector;
                }
                eulerOrder = typeof(this.dataset.order) === 'undefined' ? 'XYZ' : this.dataset.order;

                var conversionFactor = Math.PI / 180.0;
                var viewAngles = new THREE.Euler(parseFloat(this.dataset.x)*conversionFactor,
                                                 parseFloat(this.dataset.y)*conversionFactor,
                                                 parseFloat(this.dataset.z)*conversionFactor,
                                                 eulerOrder);

                that.controls.setRotationFromEuler(viewAngles, upVector /* allowed to be undefined */);
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
        setStyleTransform(this.compassCube, 'perspective(300px) matrix3d('+roundedMatrix.join()+')');
    };

    return Compass;
});
