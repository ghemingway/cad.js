/* Copyright G. Hemingway, 2015 - All rights reserved */
'use strict';


import React from 'react';
import Tree from 'react-ui-tree';
require('./tree.scss');

/*************************************************************************/

export default class ModelTreeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tree: this.props.tree
        };
        this.renderNode = this.renderNode.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ tree: nextProps.tree });
    }

    onClickNode(node, event) {
        this.props.dispatcher.dispatchEvent({
            type: 'select',
            id: node.id,
            meta: event.metaKey
        });
    }

    renderNode(node) {
        //console.log(this);
        var cName = 'node';
        cName += (node.state && node.state.selected) ? ' is-active' : '';
        return <span
            id={node.id}
            className={cName}
            onClick={this.onClickNode.bind(this, node)}
            onMouseDown={function(e){e.stopPropagation()}}
        >
            {node.text}
        </span>;
    }

    render() {
        return <div className="model-tree">
            <div className="handle">
                <span />
            </div>
            <Tree
                paddingLeft={20}              // left padding for children nodes in pixels
                tree={this.state.tree}        // tree object
                renderNode={this.renderNode}  // renderNode(node) return react element
            />
        </div>;
    }
}

ModelTreeView.propTypes = {
    dispatcher: React.PropTypes.object.isRequired
};