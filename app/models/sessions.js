var request = require('request');

var config = require('./config')
  , db = require('nano')({url: config.couchdb.url})

  , loggedInUsers = {}

  , addLoggedInUser = exports.addLoggedInUser = function(authSession, user) {
      loggedInUsers[authSession] = user;
    }

  , getLoggedInUser = exports.getLoggedInUser = function(authSession) {
      return loggedInUsers[authSession]
    }

  , removeLoggedInUser = exports.removeLoggedInUser = function(authSession) {
      delete loggedInUsers[authSession]
    };
  
var login = exports.login = function(username, password, callback) {
      var user = 'forskningsdata';
      var pass = 'asdf1234';

      var opt = {
        'rejectUnauthorized': false, 
        url: 'https://cdb.forskningsdata.se/_session', 
        'auth': {
          'user': user,
          'pass': pass,
          'sendImmediately': false
        }
      };

      request(opt, function(err, response, body) {
        if (err) { 
          console.log(err.message);
          console.log(err);
          return callback(err);
        }
        var cookie = headers['set-cookie'][0];
        var authSession = cookie.split(';')[0].split('=')[1];
        addLoggedInUser(authSession, username);
        callback(null, cookie);
      });

      //db.auth(username, password, function (err, body, headers) {
      // nano.auth(user, pass, function (err, body, headers) {
      //   if (err) { 
      //     console.log(err.message);
      //     console.log(err);
      //     return callback(err);
      //   }
      //   var cookie = headers['set-cookie'][0];
      //   var authSession = cookie.split(';')[0].split('=')[1];
      //   addLoggedInUser(authSession, username);
      //   callback(null, cookie);
      // });
       // }
    };
