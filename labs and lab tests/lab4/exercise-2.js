var events = require('events');
var eventEmitter = new events.EventEmitter();


var convert = function convert()
{
    const buf = Buffer.from([0x62,0x75,0x66,0x65,0x72]);
    buf.forEach(function(element){
        return console.log(element);
    })
    
}
eventEmitter.on('convert', convert);

eventEmitter.emit('convert');