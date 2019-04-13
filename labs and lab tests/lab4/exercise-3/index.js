var app = require('express')();
var http = require('http').Server(app);

// io. dependencies
var io = require('socket.io')(http);


// i am returning the file index.html 
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

  io.on('connection', function(socket){
    socket.on('connect1', function(msg){
      console.log(msg);
    });
    socket.on('chat message', function(msg){
        console.log('Recieved message: ',msg);
      });
   
  });



http.listen(3000, function(){
  console.log('listening on *:3000');
});