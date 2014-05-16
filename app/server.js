var express = require("express");
var bodyParser = require("body-parser")
var sessions = require("./models/sessions")
var app = express();



app.use(express.static(__dirname + '/'));
app.use(bodyParser()); //application/json + application/www-urlencoded


//app.set('jwtTokenSecret', 'YOUR_SECRET_STRING');

//app.post('/api/sessions', login);


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

app.post('/api/sessions', function(req, res) {
    sessions.login(req.body.username, req.body.password, function(err, cookie) {
      if (err) {
        console.log("No!");
        res.json(401, {error: true});
      }
      else {
        console.log("Yes!");
        res.cookie(cookie);
        res.send(req.body);
      }
    });
  });


var port = process.env.PORT || 8000;
app.listen(port, function() {
	console.log("Listening on " + port);
});


var logout = exports.logout = function(req, res) {
    sessions.removeLoggedInUser(req.cookies['AuthSession']);
    res.clearCookie('AuthSession');
    res.send(200, "OK");
  }

var requireAuth = function(req, res, next) {
  if (!req.username) {
    res.end('Not authorized', 401)
  } else {
    next()
  }
}

