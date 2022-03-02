var express = require('express');
const res = require('express/lib/response');
var multer = require('multer');

var app = express();
var storage = multer.diskStorage({
    destination: function (req,file, callback){
        callback(null,',/uploads');
    },
    filename: function (req,file,callback){
        callback(null,file.originalname);
    }
});

var upload = multer({storage : storage}). single('myfile');

app.get('/',function(req,res) {
    res.sendFile(__dirname + "/indexF.html");

});

app.post('/',function(req,res) {
    upload(req,res,function(err){
        if(err){
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded seccessfully");
    });

});

app.listen(5000,function(){
    console.log("Server is running on part 5000");
});