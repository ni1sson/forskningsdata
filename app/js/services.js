'use strict';

/* Services */

var forskningsdataServices = angular.module('forskningsdataServices', ['ngResource']);

forskningsdataServices.factory('Project', ['$resource',
  function($resource){
    return $resource('projects/:projectId.json', {}, {
      query: {method:'GET', params:{projectId:'projects'}, isArray:true}
    });
  }]);
