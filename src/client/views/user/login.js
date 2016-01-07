/* Copyright G. Hemingway, 2015 - All rights reserved */
'use strict';


import React                        from 'react';
import {HeaderView, FooterView}     from './parts';
require('./user.scss');

/*************************************************************************/


export default class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev) {
        let self = this;
        ev.preventDefault();
        let data = {
            username: this.refs.username.value,
            password: this.refs.password.value,
            two_factor: this.refs.two_factor.value
        };
        function showError(msg) {
            self.refs['error-box'].classList.toggle("hidden");
            self.refs['error-msg'].innerHTML = msg.error;
        }
        // Bit of validation
        if (this.props.twoFactor && !data.two_factor) {
            showError({error: 'Username, password and two-factor value required.'});
        } else if (!data.username || !data.password) {
            showError({ error: 'Username and password required.' });
        } else {
            // Do the ajax to the server
            $.ajax({
                url: '/v1/user/login',
                method: 'POST',
                data: data
            }).then(
                function (response) {
                    // Signal app
                    self.props.dispatcher.dispatchEvent({ type: 'user:login', token: response.token });
                    // Route to user's browse page
                    self.props.router.navigate('browse', { trigger: true });
                },
                function (err) {
                    if (err.responseJSON) showError(err.responseJSON);
                    else showError('An unknown error has occurred.');
                }
            );
        }
    }

    componentDidMount() {
        this.refs['username'].focus();
    }

    render() {
        let twoFactor;
        if (this.props.twoFactor) {
            twoFactor = <div className="form-group">
                <label htmlFor="two_factor" className="control-label">Two-Factor Code:</label>
                <input
                    ref="two_factor"
                    name="two_factor"
                    type="text"
                    placeholder="Two Factor"
                    className="form-control"
                />
            </div>;
        }
        return <div className="login-view">
            <HeaderView router={this.props.router} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-3"></div>
                    <div className="col-xs-6 panel panel-default">
                        <h4 className="text-center">Log In to CAD.js</h4>
                        <div ref="error-box" className="hidden alert alert-danger alert-dismissible" role="alert">
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <span ref="error-msg" />
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
                                <label htmlFor="password" className="control-label">Password:</label>
                                <input
                                    ref="password"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="form-control"
                                />
                            </div>
                            {twoFactor}
                            <div className="form-group">
                                <button className="btn btn-primary" onClick={this.handleClick}>Log In</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-xs-3"></div>
                </div>
            </div>
            <FooterView router={this.props.router}/>
        </div>;
    }
}

LoginView.propTypes = {
    router:     React.PropTypes.object.isRequired,
    dispatcher: React.PropTypes.object.isRequired,
    twoFactor:  React.PropTypes.bool
};