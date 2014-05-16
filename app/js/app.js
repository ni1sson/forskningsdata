'use strict';

/* App Module */

var forskningsdataApp = angular.module('forskningsdataApp', [
  'ngRoute',
  'forskningsdataAnimations',
  'forskningsdataFilters',
  'forskningsdataControllers',
  'forskningsdataServices'
]);

forskningsdataApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
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
      when('/login',{
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      }).
      otherwise({
        redirectTo: '/login'
      });

      //$locationProvider.html5Mode(true);
  }]);

forskningsdataApp.config(function($httpProvider) {
  $httpProvider.interceptors.push(function($rootScope, $location, $q) {
    return {
      'request': function(request) {
        // if we're not logged-in to the AngularJS app, redirect to login page
        $rootScope.loggedIn = $rootScope.loggedIn || $rootScope.username;
        if (!$rootScope.loggedIn && $location.path() != '/login') {
          console.log("not logged in");   
          $location.path('/login');  
        }
        return request;
      },
      'responseError': function(rejection) {
        // if we're not logged-in to the web service, redirect to login page
        if (rejection.status === 401 && $location.path() != '/login') {
          $rootScope.loggedIn = false;
          console.log("not logged in");
          $location.path('/login');
        }
        return $q.reject(rejection);         
      }
    };
  });
});

