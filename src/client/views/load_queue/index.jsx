/* Copyright G. Hemingway, 2015 - All rights reserved */
'use strict';


import React from 'react';

/*************************************************************************/

class QueueItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>{this.props.name}</div>;
    }
}


export default class LoadQueueView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            queue: []
        };
        this.onQueueEvent = this.onQueueEvent.bind(this.onQueueEvent);
    }

    onQueueEvent(ev) {
        console.log('LoadQueueView: ' + JSON.stringify(ev));
    }

    componentWillMount() {
        this.props.dispatcher.addEventListener('message', this.onQueueEvent);
    }

    componentDidMount() {
        this.props.dispatcher.removeEventListener('message', this.onQueueEvent);
    }

    render() {
        var items = this.state.queue.map(function(item) {
            return <QueueItem name={item.name} />;
        });
        return <div className="loadqueue-view">{items}</div>
    }
}