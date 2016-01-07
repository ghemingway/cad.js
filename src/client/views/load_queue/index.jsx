/* Copyright G. Hemingway, 2015 - All rights reserved */
'use strict';


import React from 'react';
require('./load_queue.scss');

/*************************************************************************/

class QueueItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <li className="row">
            <span className="filename col-xs-8">{this.props.name}</span>
            <span className="fileperc col-xs-4 pull-right">{this.props.loaded}</span>
        </li>;
    }
}


export default class LoadQueueView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            queue: []
        };
        this.onQueueEvent = this.onQueueEvent.bind(this);
    }

    onQueueEvent(ev) {
        let queue;
        if(ev.type === 'addRequest') {
            this.setState({ queue: this.state.queue.concat({
                name: ev.path,
                loaded: '0%',
                status: 'loading'
            }) });
        } else if (ev.type === 'loadProgress') {
            queue = _.map(this.state.queue, function(item) {
                if (item.name == ev.file) {
                    item.loaded = ev.loaded.toFixed(2) + '%';
                }
                return item;
            });
            this.setState({ queue: queue });
        } else if (ev.type === 'loadComplete') {
            queue = _.filter(this.state.queue, function(file) {
                return file.name != ev.file;
            });
            this.setState({ queue: queue });
        }
    }

    componentWillMount() {
        this.props.dispatcher.addEventListener('addRequest', this.onQueueEvent);
        this.props.dispatcher.addEventListener('loadComplete', this.onQueueEvent);
        this.props.dispatcher.addEventListener('parseComplete', this.onQueueEvent);
        this.props.dispatcher.addEventListener('workerFinish', this.onQueueEvent);
        this.props.dispatcher.addEventListener('loadProgress', this.onQueueEvent);

    }

    componentWillUnmount() {
        this.props.dispatcher.removeEventListener('addRequest', this.onQueueEvent);
        this.props.dispatcher.removeEventListener('loadComplete', this.onQueueEvent);
        this.props.dispatcher.removeEventListener('parseComplete', this.onQueueEvent);
        this.props.dispatcher.removeEventListener('workerFinish', this.onQueueEvent);
        this.props.dispatcher.removeEventListener('loadProgress', this.onQueueEvent);
    }

    render() {
        let items = this.state.queue.map(function(item) {
            return <QueueItem key={item.name} name={item.name} loaded={item.loaded} />;
        });
        let style = items.length > 0 ? 'load-queue' : 'load-queue out';
        return <div className={style}>
                <div className="header">
                    <span>Downloads&nbsp;</span>
                    <span>({items.length}):</span>
                </div>
                <ul className="container-fluid">{items}</ul>
            </div>
    }
}

LoadQueueView.propTypes = {
    dispatcher: React.PropTypes.object.isRequired
};