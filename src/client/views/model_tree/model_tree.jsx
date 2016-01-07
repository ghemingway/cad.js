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

    onMouseEnter(node) {
        if (this.props.onNodeEnter) this.props.onNodeEnter(node);
    }

    onMouseLeave(node) {
        if (this.props.onNodeLeave) this.props.onNodeLeave(node);
    }

    renderNode(node) {
        let self = this;
        let cName = 'node';
        cName += (node.state && node.state.selected) ? ' is-active' : '';
        cName += (node.state && node.state.highlighted) ? ' is-highlighted' : '';
        cName += (node.state && !node.state.visible) ? ' is-hidden' : '';
        let exp = undefined;
        if (node.state && node.state.explodeDistance > 0) {
            let text = ' (' + node.state.explodeDistance + ')';
            exp = <span className="exp-distance">{text}</span>;
        }
        return <span
            id={node.id}
            className={cName}
            onClick={function(e){ self.props.onClick(node, e); }}
            onMouseEnter={this.onMouseEnter.bind(this, node)}
            onMouseLeave={this.onMouseLeave.bind(this, node)}
            onMouseDown={function(e){ e.stopPropagation(); }}
        >
            {node.text}{exp}
        </span>;
    }

    render() {
        return <div className="model-tree">
            <div className="handle">
                <span />
            </div>
            <Tree
                paddingLeft={20}                // left padding for children nodes in pixels
                tree={this.state.tree}          // tree object
                onChange={this.props.onChange}  // Pass along change events
                renderNode={this.renderNode}    // renderNode(node) return react element
            />
        </div>;
    }
}

ModelTreeView.propTypes = {
    onClick:        React.PropTypes.func.isRequired,
    onNodeEnter:    React.PropTypes.func,
    onNodeLeave:    React.PropTypes.func,
    onChange:       React.PropTypes.func
};