'use strict';

/* Controllers */

var forskningsdataControllers = angular.module('forskningsdataControllers', []);

forskningsdataControllers.controller('ProjectListCtrl', ['$scope', 'Project',
  function($scope, Project) {
    $scope.projects = Project.query();
    //$scope.orderProp = 'age';
  }]);

forskningsdataControllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams', 'Project',
  function($scope, $routeParams, Project) {
    $scope.project = Project.get({projectId: $routeParams.projectId}, function(project) {
      //$scope.mainImageUrl = project.images[0];
    });

    /*$scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }*/
  }]);
