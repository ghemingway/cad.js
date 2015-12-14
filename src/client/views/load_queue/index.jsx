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
        return <li>{this.props.name}</li>;
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
        if(ev.type === 'addRequest') {
            this.setState({ queue: this.state.queue.concat({
                name: ev.path,
                percent: 0,
                status: 'loading'
            }) });
        } else if (ev.type === 'loadProgress') {
            //console.log(ev);
            //var id = event.file.split(".")[0];
            //progressValues[progressIdMap[id]] = 1;
            //progressRing.update(progressValues);
            //// Is this the index file
            //if (id === "index") {
            //    $("li#index").remove();
            //} else {
            //    // Change the file status to 'parsing'
            //    $("li#" + id).text(event.file + ": Parsing");
            //}
        } else if (ev.type === 'loadComplete') {
            var queue = _.filter(this.state.queue, function(file) {
                return file.name !== ev.file;
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
        var items = this.state.queue.map(function(item) {
            return <QueueItem key={item.name} name={item.name} />;
        });
        var style = items.length > 0 ? 'load-queue' : 'load-queue out';
        return <div className={style}>
                <div className="header">Downloads ({items.length}):</div>
                <ul>{items}</ul>
            </div>
    }
}

LoadQueueView.propTypes = {
    dispatcher: React.PropTypes.object.isRequired
};