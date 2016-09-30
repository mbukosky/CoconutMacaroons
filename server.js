'use strict';

var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

// Setup port for server to run on
app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res) {
  res.sendFile('public/index.html' , { root : __dirname});
});

app.use(express.static('public'));

var server = app.listen(app.get('port'), function () {
  console.log('Express server started on port %s at %s', app.get('port'), server.address().address);
  console.log('Press Ctrl+C to quit.');
});
