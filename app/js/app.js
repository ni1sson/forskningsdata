'use strict';

/* App Module */

var forskningsdataApp = angular.module('forskningsdataApp', [
  'ngRoute',
  'forskningsdataAnimations',

  'forskningsdataControllers',
  'forskningsdataFilters',
  'forskningsdataServices'
]);

forskningsdataApp.config(['$routeProvider',
  function($routeProvider) {
    // $routeProvider.
    //   when('/phones', {
    //     templateUrl: 'partials/phone-list.html',
    //     controller: 'PhoneListCtrl'
    //   }).
    //   when('/phones/:phoneId', {
    //     templateUrl: 'partials/phone-detail.html',
    //     controller: 'PhoneDetailCtrl'
    //   }).
    //   otherwise({
    //     redirectTo: '/phones'
    //   });

    $routeProvider.
      when('/projects', {
        templateUrl: 'partials/project-list.html',
        controller: 'ProjectListCtrl'
      }).
      when('/projects/:projectId',{
        templateUrl: 'partials/project-detail.html',
        controller: 'ProjectDetailCtrl'
      }).
      otherwise({
        redirectTo: '/projects'
      });
  }]);
