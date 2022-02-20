//Activity Name: server.js
//Author Name: Sicat Lance Angelo S.
//Section and Code: WD-202/2083

var express = require('express');
var app = express();

app.get('/', function (re, res) {
    console.log('The is GET request for the homepage!');
    res.send('Here is the GET Method!');
})

app.post('/', function (re, res) {
    console.log('A POST request for the homepage is accessed!');
    res.send('Here is the POST Method!');
})

app.post('/ab*cd', function (re, res) {
    console.log('Got a GET request for /ab*cd');
    res.send('Pattern Match Page');
})

var server = app.listen(4000, function () {
    var host = server.address().address
    var post = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, post)
})

