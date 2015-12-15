/* Copyright G. Hemingway, 2015 - All rights reserved */
'use strict';


import React from 'react';
require('jstree');
require('./step_tree.scss');

/*************************************************************************/

export default class StepTreeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            node: undefined
        };
        this.onModelLoad = this.onModelLoad.bind(this);
    }

    onModelLoad() {
        var data = this.props.dispatcher.getTree();
        this.setState({ node: data });
    }

    componentDidMount() {
        this.props.dispatcher.addEventListener('model:add', this.onModelLoad);
        this._treeContainerSelector = $('#step-tree');
    }

    componentWillUnmount() {
        this.props.dispatcher.removeEventListener('model:add', this.onModelLoad);
    }

    componentDidUpdate() {
        var self = this;
        var geometryOnly = false;
        var treeData = this.state.node;
        if (this.tree) {
            this.tree.destroy();
        }
        this.tree = $.jstree.create(this._treeContainerSelector, {
            //plugins : [ 'contextmenu' ],
            core: {
                data: [ treeData ],
                animation: 50,
                themes: {
                    icons: false
                }
            }//,
            //contextmenu: {
            //    items: function(menuItem) {
            //        var obj = self._parts[0].getByID(menuItem.id),
            //            menu = {
            //                focusOn: {
            //                    label: "Focus On",
            //                    action: function() {
            //                        if (obj) {
            //                            self._viewer.zoomToFit(obj);
            //                        }
            //                    }
            //                }
            //            };
            //        if (obj.getObject3D().visible) {
            //            menu.hide = {
            //                label: "Hide",
            //                action: function() {
            //                    if (obj) {
            //                        obj.hide();
            //                        self._viewer.invalidate();
            //                    }
            //                }
            //            };
            //        } else {
            //            menu.show = {
            //                label: "Show",
            //                action: function() {
            //                    if (obj) {
            //                        obj.show();
            //                        self._viewer.invalidate();
            //                    }
            //                }
            //            };
            //        }
            //        return menu;
            //    }
            //}
        });
    }

    render() {
        return <div className="step-tree" id="step-tree"></div>;
    }
}

