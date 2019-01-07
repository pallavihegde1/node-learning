const logger = require('./logger');
//class frm events module
const EventEmitter = require('events');
//initalise a instance of EventEmitter class
const emitter = new EventEmitter();

const os = require('os');
console.log(logger);

logger.log('call message in logger');

function sayHello()
{
  console.log('hi node')
}
console.log(`TotalMemory: ${os.totalmem()}`)
sayHello()

//Register a listner
emitter.on('messageLogged', (args) => {
  console.log('on event message logged', args)
})
//emit an event
emitter.emit('messageLogged', {id: 1, name: 'test arg'});


//log from class
//
// const Logger = require('./loggerClass');
// const logger = new Logger();
//
// logger.on('messageLoggedClass', (args) => {
//   console.log('listeneing class logs');
// })
//
// logger.log('message');
