var express = require("express");
var bodyParser = require("body-parser")
var app = express();

var requireAuth = function(req, res, next) {
  if (!req.username) {
    res.end('Not authorized', 401)
  } else {
    next()
  }
}
app.use(express.static(__dirname + '/'));
app.use(bodyParser()); //application/json + application/www-urlencoded

// app.all('*', function(req, res, next){
//   if (!req.get('Origin')) return next();
//   // use "*" here to accept any origin
//   res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.set('Access-Control-Allow-Methods', 'GET, POST');
//   res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
//   // res.set('Access-Control-Allow-Max-Age', 3600);
//   if ('OPTIONS' == req.method) return res.send(200);
//   next();
// });

app.set('jwtTokenSecret', 'YOUR_SECRET_STRING');

app.post('/secret', function(req, res){  //express.bodyParser(), jwtauth, requireAuth(), function(req, res){  
  if (req.body.username != "admin") {
    //	res.end('Not authorized', 401)
	  console.log(req.body);
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