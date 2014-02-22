/* G. Hemingway Copyright @2014
 * Visual model navigator - Helps with orientation and viewing aspects
 */

"use strict";

/************************* Compass Class *********************************************/


define(["THREE"], function(THREE) {
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


    function Compass(compassParent, camera, controls, config) {
        this.controls = controls;
        this.camera = camera;
        this.config = {
            magnitude: config.magnitude ? config.magnitude : 100,
            width: config.width ? config.width : 200,
            height: config.height ? config.height: 200
        };
        this.compassCube = document.getElementById('compass-cube');
        this.compassCubeMatrix = new THREE.Matrix4();

        this.bindEvents();
    }

    Compass.prototype.bindEvents = function () {
        var cubeButtons = document.querySelectorAll('.cube-button');
        Array.prototype.map.call(cubeButtons, function (button) {
            button.addEventListener('click', function () {
                // TODO: bind these to the correct `controls`
                console.log(button.dataset);
                //rotation.x = button.dataset.x;
                //rotation.y = button.dataset.y;
                //rotation.z = button.dataset.z;
            });
        });
    };

    Compass.prototype.update = function () {
        //var rotation = new THREE.Euler().setFromQuaternion(this.mainCamera.quaternion.clone().inverse());
        //setStyleTransform(this.compassCube, 'perspective(500px) ' +
        //    'rotateX('+rotation.x+'rad) ' +
        //    'rotateY('+rotation.y+'rad) ' +
        //    'rotateZ('+rotation.z+'rad) ');
        //var i, matrix = this.mainCamera.matrixWorld.toArray();
        //matrix[3] = matrix[7] = matrix[11] = matrix[12] = matrix[13] = matrix[14] = matrix[15] = 0;
        //var s = 'perspective(500px) matrix3d('+matrix.map(function (v) {
        //    return v.toFixed(10);
        //}).join()+')';
        //console.log(matrix, s);
        //setStyleTransform(this.compassCube, s);

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
