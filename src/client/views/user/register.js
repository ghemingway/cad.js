/* Copyright G. Hemingway, 2015 - All rights reserved */
'use strict';


import React from 'react';
import {HeaderView, FooterView}     from './parts';
require('./user.scss');

/*************************************************************************/


export default class RegisterView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { registered: false };
        this.handleClick = this.handleClick.bind(this);
        this.linkLogin = this.linkLogin.bind(this);
    }

    handleClick(ev) {
        let self = this;
        ev.preventDefault();
        let data = {
            username: this.refs.username.value,
            address: this.refs.address.value,
            password: this.refs.password.value
        };
        function showError(msg) {
            self.refs['error-box'].classList.toggle("hidden");
            self.refs['error-msg'].innerHTML = msg.error;
        }
        // Bit of validation
        if (!data.username || !data.address || !data.password) {
            showError({ error: 'Username, address and password required.' });
        } else {
            // Do the ajax to the server
            $.ajax({
                url: '/v1/user',
                method: 'POST',
                data: data,
                success: function (data) {
                    let update = { 'registered': true };
                    if (data.two_factor) {
                        update.twoFactor = data.two_factor;
                    }
                    self.setState(update);
                },
                error: function (err) {
                    if (err.responseJSON) showError(err.responseJSON);
                    else showError('An unknown error has occurred.');
                }
            });
        }
    }

    componentDidMount() {
        this.refs['username'].focus();
    }

    linkLogin() {
        this.props.router.navigate('login', { trigger: true });
    }

    render() {
        let page;
        if (this.state.registered) {
            let twoFactor = this.state.twoFactor ? <img src={this.state.twoFactor} /> : undefined;
            page = <div className="col-xs-6 panel panel-default">
                <h4>Welcome to CAD.js!</h4>
                <ul>Here are a couple of place you may want to visit:
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                </ul>
                {twoFactor}
                <a onClick={this.linkLogin}>Go to Login Page</a>
            </div>;
        } else {
            page = <div className="col-xs-6 panel panel-default">
                <h4 className="text-center">Register with CAD.js</h4>
                <div ref="error-box" className="hidden alert alert-danger alert-dismissible" role="alert">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <span ref="error-msg"></span>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="username" className="control-label">Username:</label>
                        <input
                            ref="username"
                            name="username"
                            type="text"
                            placeholder="Username"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="two_factor" className="control-label">Email Address:</label>
                        <input
                            ref="address"
                            name="address"
                            type="email"
                            placeholder="Email Address"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="control-label">Password:</label>
                        <input
                            ref="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <button
                            tabIndex="-1"
                            className="btn btn-primary"
                            onClick={this.handleClick}
                        >Register!
                        </button>
                    </div>
                </form>
            </div>;
        }
        return <div className="register-view">
            <HeaderView router={this.props.router}/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-3"></div>
                    {page}
                    <div className="col-xs-3"></div>
                </div>
            </div>
            <FooterView router={this.props.router}/>
        </div>;
    }
}