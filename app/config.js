var config = {};

config.couchdb = {};
config.twilio = {};

config.couchdb.url = 'https://cdb.forskningsdata.se';
config.couchdb.secureUrl = 'https://demo_writecdb.forskningsdata.se/temp_kontor';
config.couchdb.secondsToInvalidateEvents = 120;
config.couchdb.secondsToFlushVotes = 10;

config.twilio.sid = 'ACxxx';
config.twilio.key = 'yyy';
config.twilio.disableSigCheck = false;

config.cookiesecret = 'make-this-a-secret';

module.exports = config;
