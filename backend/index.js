
const logEvents = require('./logEvents')

const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

// listen & execute callback fn with the argument from emit
myEmitter.on('log', (msg)=>{
    console.log("Event Occurred")
    logEvents(msg)
})

//emits with the argument 'log event emitted'
myEmitter.emit('log', 'log event emitted')




