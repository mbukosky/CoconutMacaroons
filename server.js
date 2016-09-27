'use strict';

var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

// Setup port for server to run on
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.sendfile('public/index.html');
});

app.use(express.static('public'));
// app.use(express.static('vendor'));

server.listen(app.get('port'), 'localhost');
server.on('listening', function() {
  console.log('Express server started on port %s at %s', app.get('port'), server.address().address);
});
