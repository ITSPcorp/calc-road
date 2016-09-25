var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get('/files/:filename', function(req, res){
  res.sendFile(__dirname + "/" + req.params.filename);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
