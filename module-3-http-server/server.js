const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };

// initialize the object
const myEmitter = new MyEmitter();

// add a listener for the event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    myEmitter.emit('log', 'Log event emitted!!');
}, 2000);