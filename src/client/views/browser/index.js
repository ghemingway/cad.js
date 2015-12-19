/* Copyright G. Hemingway, 2015 - All rights reserved */
'use strict';


import React from 'react';
require('./browser.scss');

/*************************************************************************/

class FileItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <li className="row">
            <span id={this.props.name} onClick={this.props.onClick} className="filename col-xs-8">{this.props.name}</span>
            <span className="fileperc col-xs-4 pull-right">{this.props.type}</span>
        </li>;
    }
}

FileItem.propTypes = {
    name: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired
};

export default class BrowserView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        var self = this;
        $.ajax({
            method: 'GET',
            url: '/v1/models',
            success: function(files) {
                self.setState({ files: files });
            }
        });
    }

    handleClick(event) {
        var file = _.findWhere(this.state.files, { name: event.target.id });
        this.props.router.navigate(file.name + '?type=' + file.type, { trigger: true });
    }

    render() {
        var self = this;
        var files = this.state.files.map(function(file) {
            return <FileItem onClick={self.handleClick} key={file.name} name={file.name} type={file.type} />
        });
        return <div className="container-fluid">
            <div className="row">
                <div className="col-xs-2"></div>
                <ul className="browser col-xs-10">{files}</ul>
            </div>
        </div>;
    }
}

BrowserView.propTypes = {
    router: React.PropTypes.object.isRequired,
    socket: React.PropTypes.object
};