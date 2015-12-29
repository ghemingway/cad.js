/* Copyright G. Hemingway, 2015 - All rights reserved */
'use strict';


import React from 'react';

/*************************************************************************/

export class HeaderView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <nav className="header navbar navbar-default navbar-static-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand">
                        CAD.js
                    </a>
                </div>
            </div>
        </nav>;
    }
}

export class FooterView extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev) {
        ev.preventDefault();
        //console.log(ev.target.innerHTML);
    }

    render() {
        return <div className="row footer">
            <div className="col-xs-3"></div>
            <div className="col-xs-6 text-center">
                <span onClick={this.handleClick}>Terms</span>
                <span onClick={this.handleClick}>Privacy</span>
                <span onClick={this.handleClick}>Security</span>
                <span onClick={this.handleClick}>Contact</span>
            </div>
            <div className="col-xs-3"></div>
        </div>;
    }
}