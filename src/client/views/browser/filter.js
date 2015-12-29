/* Copyright G. Hemingway, 2015 - All rights reserved */
'use strict';


import React            from 'react';
require('./browser.scss');

/*************************************************************************/

export default class FilterView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="filter-view">
            <input
                ref="query"
                name="query"
                type="text"
                placeholder="Filter"
                className="query"
            />
            <div>
                <div className="checkbox">
                    <label><input type="checkbox" />Size</label>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" />Type</label>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" />LiveStream</label>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" />Version</label>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" />Modified</label>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" />Created</label>
                </div>
            </div>
        </div>;
    }
}