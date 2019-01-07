const EventEmitter = require('events');
const loggerEmitter = new EventEmitter();

var url = 'http://mylogger.io/log';

function log(message) {
  // log the message
  console.log(message)
}

loggerEmitter.on('emitLogger', (args) => {
  console.log('on logger message logged', args)
})

//register logger emit
loggerEmitter.emit('emitLogger', {id: 2, name: 'loggerEmitter'})

module.exports.log = log;
module.exports.importUrl = url;
