var express = require("express");
//var jwt = require('jwt-simple');
//var path = require('path');
var app = express();
//var jwtauth = require('./jwtauth')

var requireAuth = function(req, res, next) {
  if (!req.username) {
    res.end('Not authorized', 401)
  } else {
    next()
  }
}

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded());

app.set('jwtTokenSecret', 'YOUR_SECRET_STRING');

app.post('/secret', function(req, res){  //express.bodyParser(), jwtauth, requireAuth(), function(req, res){  
  if (req.body.username != "admin") {
    //	res.end('Not authorized', 401)
	  console.log("NO");
	  res.send(401);
  } else {
	  console.log("YES");
    	//next()
	  console.log(req.body.username);
	  //res.send('Hello ' + req.user.name)
	  res.send(200);
  }
})




var port = process.env.PORT || 8000;
app.listen(port, function() {
	console.log("Listening on " + port);
});