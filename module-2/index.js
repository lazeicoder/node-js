const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// initialize the object
const myEmitter = new MyEmitter();

// add listener for the log event
// So, we listen to an event using .on()

myEmitter.on('log', (msg) => logEvents(msg));

// We set a timer for about 2 seconds.
setTimeout(() => {
    // Emit event
    // We trigger an event using .emit() 
    myEmitter.emit('log', 'Log event emitted');

}, 2000);