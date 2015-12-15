/* Copyright G. Hemingway, 2015 - All rights reserved */
'use strict';


import React from 'react';
require('jstree');
require('./step_tree.scss');

/*************************************************************************/

export default class StepTreeView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this._treeContainerSelector = $('#step-tree');
        this.tree = $.jstree.create(this._treeContainerSelector, {
            //plugins : [ 'contextmenu' ],
            core: {
                data: [this.props.data],
                animation: 50,
                themes: {
                    icons: false
                }
            }
        });

        this._treeContainerSelector.on("changed.jstree", function (e, data) {
            console.log(data.selected);
        });
//        this._treeContainerSelector.on('select_node.jstree deselect_node.jstree', function(event, data) {
//            console.log(event);
//            console.log(data);
//            //self._parts[0].hideAllBoundingBoxes();
//            //self._parts[0].clearHighlights();
////            for (var i = 0; i < data.selected.length; i++) {
////                var obj = self._parts[0].getByID(data.selected[i]);
////                if (obj) {
//////                    console.log(obj.getID());
////                    obj.showBoundingBox();
////                    self._viewer.invalidate();
////                    //obj.highlight(0xff0000);
////                }
////            }
//        });
    }

    render() {
        return <div className="step-tree" id="step-tree"></div>;
    }
}

