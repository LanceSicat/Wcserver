//Activity Name: server2.js
//Author Name: Sicat Lance Angelo S.
//Section and Code: WD-202/2083

var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false})

app.use(express.static('public'));
app.get('/index.html', function (req , res){
    res.sendFile(__dirname + "/" + "indexP.html");
})

app.post('/process_post', urlencodedParser,function (req,res){
    //Prepare output in JSON format
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(5000, function () {
    var host = server.address().address
    var post = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, post)
})