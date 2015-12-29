/* Copyright G. Hemingway, 2015 - All rights reserved */
'use strict';


import React            from 'react';
require('./browser.scss');

/*************************************************************************/

export default class UploadView extends React.Component {
    constructor(props) {
        super(props);
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDrop(ev) {
        console.log('Drop file');
    }

    render() {
        return <div className="upload-view">
            <div className="upload-insert" onDrop={this.handleDrop}>
                <p>Drop file to upload</p>
            </div>
        </div>;
    }
}