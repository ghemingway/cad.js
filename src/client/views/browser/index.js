/* Copyright G. Hemingway, 2015 - All rights reserved */
'use strict';


import React            from 'react';
import UploadView       from './upload';
import FilterView       from './filter';
require('./browser.scss');

/*************************************************************************/

class FileItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <li className="row">
            <span id={this.props.file.name} onClick={this.props.onClick} className="filename col-xs-8">{this.props.file.name}</span>
            <span className="fileperc col-xs-4 pull-right">{this.props.file.types}</span>
        </li>;
    }
}

FileItem.propTypes = {
    file: React.PropTypes.object.isRequired
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
        let self = this;
        $.ajax({
            method: 'GET',
            url: '/v1/models',
            headers: {
                'Authorization': this.props.token,
                'Content-Type': 'application/json'
            }
        }).then(
            function(files) {
                self.setState({ files: files });
            },
            function(err) {
                console.log('Do something with an error!!!');
            }
        );
    }

    handleClick(event) {
        let file = _.find(this.state.files, { name: event.target.id });
        this.props.router.navigate(file.name + '?type=' + file.types[0], { trigger: true });
    }

    render() {
        let self = this;
        let files = this.state.files.map(function(file) {
            return <FileItem onClick={self.handleClick} key={file.name} file={file} />
        });
        return <div className="container-fluid">
            <div className="row">
                <div className="col-xs-3 browser-side">
                    <div className="row">
                        <FilterView />
                        <UploadView />
                    </div>
                </div>
                <ul className="browser col-xs-9">{files}</ul>
            </div>
        </div>;
    }
}

BrowserView.propTypes = {
    router:     React.PropTypes.object.isRequired,
    socket:     React.PropTypes.object.isRequired,
    user:       React.PropTypes.object,
    token:      React.PropTypes.string,
    config:     React.PropTypes.object.isRequired,
    services:   React.PropTypes.object.isRequired
};