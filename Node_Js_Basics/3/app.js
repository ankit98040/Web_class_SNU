var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var port = 3000;

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//3
app.use(express.static(path.join(__dirname, 'public')));

//2
app.get('/', function(req, res){
	res.send("Hello world");
});
//2
app.get('/about', function(req, res){
	res.send('<h1>About Page</h1>');
});

app.listen(port);
console.log('Server started on port '+port);

module.exports = app;