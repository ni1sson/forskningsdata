'use strict';

/* Filters */
var forskningsdataFilters = angular.module('forskningsdataFilters', []);

forskningsdataFilters.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

forskningsdataFilters.filter('owned', function() {
  return function(input, id1, id2arr) {
  	var match = [];
  	for (var i = id2arr.length - 1; i >= 0; i--) {
  		if(id1 == id2arr[i]){
  			return input;
	  		//match.push(id2arr[i]);
	  	}  		
  	};
  	//return match;
  };
});