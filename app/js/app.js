'use strict';

/* App Module */

var forskningsdataApp = angular.module('forskningsdataApp', [
  'ngRoute',
  'forskningsdataAnimations',
  'forskningsdataFilters',
  'forskningsdataControllers',
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
      when('/units', {
        templateUrl: 'partials/unit-list.html',
        controller: 'UnitListCtrl'
      }).
      when('/units/:unitId',{
        templateUrl: 'partials/unit-detail.html',
        controller: 'UnitDetailCtrl'
      }).
      otherwise({
        redirectTo: '/projects'
      });
  }]);
