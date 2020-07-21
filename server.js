var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/'));
//gives front-end access to public folder


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function () {
    console.log('running server on port ' + port);
    console.log('http://localhost:' + port);
});