'use strict';

/* Controllers */

var forskningsdataControllers = angular.module('forskningsdataControllers', []);

forskningsdataControllers.controller('ProjectListCtrl', ['$scope', 'Project',
  function($scope, Project) {
    $scope.projects = Project.query();
    //$scope.orderProp = 'age';
  }
]);

forskningsdataControllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams', 'Project',
  function($scope, $routeParams, Project) {
    $scope.project = Project.get({projectId: $routeParams.projectId}, function(project) {
      //$scope.mainImageUrl = project.images[0];
    });
    /*$scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }*/
  }
]);

forskningsdataControllers.controller('UnitListCtrl', ['$scope', 'Unit',
  function($scope, Unit) {
    $scope.units = Unit.query();
    //$scope.orderProp = 'age';
  }
]);

forskningsdataControllers.controller('UnitDetailCtrl', ['$scope', '$routeParams', 'Unit',
  function($scope, $routeParams, Unit) {
    $scope.unit = Unit.get({unitId: $routeParams.unitId}, function(unit) {
      //$scope.mainImageUrl = project.images[0];
    });
    /*$scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }*/
  }
]);

forskningsdataControllers.controller('WeatherCtrl', ['$scope', 'Weather',
  function($scope, Weather) {
    $scope.prognose = Weather.query();
    //$scope.orderProp = 'age';
  }
]);


// forskningsdataControllers.controller('UnitListFilterCtrl', ['$scope', 'Unit', 'Project', '$filter',
//   function($scope, Unit, Project, $filter) {
//     var units = Unit.query();
//     $scope.units = $filter('owned')(units,$scope.project.id);
//     //$scope.orderProp = 'age';
//   }
// ]);




  }]);


forskningsdataControllers.controller('LoginController', function ($scope, $rootScope, AUTH_EVENTS, AuthService) {
  $scope.credentials = {
    username: '',
    password: ''
  };
  $scope.login = function (credentials) {
    AuthService.login(credentials).then(function () {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
    }, function () {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    });
  };
})