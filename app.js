//const express = require('express')
//const app = express()

//app.get('/', (req, res) => res.send('<html><h1>Bonjour!!!</h1></html>'))

//app.listen(3002, () => console.log('Example app listening on port 3002!'))


var express = require('express');
var app = express();
//app.use('/data.json', express.static(__dirname + '/data.json'));
app.use(express.static(__dirname));


app.get ("/", function (req, res) {
    res.sendFile (__dirname + "/index.html") ;
    
    //res.end ();*/
});

app.get ("/liste", function (req, res) {
    res.sendFile (__dirname + "/data.json") ;
    
    //res.end ();*/
});

app.listen (3002) ;
