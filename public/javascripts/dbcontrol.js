// TODO: Make sure this is loading properly on webpage.
var io = require('socket.io-client');

function handleClick() {
    io.emit('access');
}