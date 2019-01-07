const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(message) {
    console.log('called msg')
    // raise a event

    this.emit('messageLoggedClass', {id: 2, name: 'class logger'})
    // this.on('messageLoggedClass', (args) => {
    //   console.log('listeneing class logs');
    // })
  }
}

const logger = new Logger();

logger.on('messageLoggedClass', (args) => {
  console.log('listeneing class logs');
})

logger.log('message');

module.exports = Logger;
