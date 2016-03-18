var socket = io.connect("http://localhost:3000");

function handleClick() {
    console.log("Sending 'clientSent' event to server");
    socket.emit('clientSent');
}

socket.on('serverConfirmation', function() {
   console.log("Received confirmation emitted from server.");
});

