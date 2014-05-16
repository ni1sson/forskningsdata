'use strict';

/* Controllers */

var forskningsdataControllers = angular.module('forskningsdataControllers', []);

forskningsdataControllers.controller('ProjectListCtrl', ['$scope', 'Project', '$rootScope',
  function($scope, Project) {
    $scope.projects = Project.query();
    //var user.name = "asss";

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
    //$scope.prognose = Weather.query();
    //$scope.orderProp = 'age';
    console.log("Did query...");
    var weatherdata = Weather.query(function(){
      var data = [];
      for (var i = weatherdata.timeseries.length - 1; i >= 0; i--) {
        var date = new Date(weatherdata.timeseries[i].validTime);
        var temp = weatherdata.timeseries[i].t;
        data.push([date.getTime(),temp]);
      };
      $scope.data = data;
    });
    $scope.prognose = weatherdata;
  }
]);

// forskningsdataControllers.controller('UnitListFilterCtrl', ['$scope', 'Unit', 'Project', '$filter',
//   function($scope, Unit, Project, $filter) {
//     var units = Unit.query();
//     $scope.units = $filter('owned')(units,$scope.project.id);
//     //$scope.orderProp = 'age';
//   }
// ]);


forskningsdataControllers.controller('LoginCtrl', function($scope, $rootScope, $location, SessionService) {
  $scope.user = {username: '', password: ''};
  
  $scope.login = function() {
    $scope.user = SessionService.save($scope.user, function(success) {
      $rootScope.loggedIn = true;
      $location.path('/projects');
    }, function(error) {
      $scope.loginError = true;
    });
  };
});

/*
forskningsdataControllers.controller('LoginController', function($scope, $location, $http, $window, page) {
    
    page.setPage("Login","login-layout");
    $scope.user = {};
    $scope.loginUser=function()
    {
        var user = {"username" : $scope.user.name, "password" : $scope.user.password}
        //user.username=$scope.user.name;
        //user.password=$scope.user.password;
        //console.log(user)

        $http.post('http://localhost:8000/secret', user).success(function (data, status, headers, config) {//$scope.user).success(function (data) {
              // Stores the token until the user closes the browser window.
              //console.log(data, status, headers, config);
              $window.sessionStorage.setItem('token', data.token);

              page.setUser($scope.user);
              //console.log(status);
              $location.path('/projects');
          })
          .error(function (data, status, headers, config) {
              //console.log(status);
              $window.sessionStorage.removeItem('token');
              $scope.message="Wrong credientials";
              $scope.messagecolor="alert alert-danger";
              // TODO: Show something like "Username or password invalid."
          });
      /*
        if(username=="asdf" && password=="asdf")
        {
            page.setUser($scope.user);
            $location.path( "/projects");
        }
        else
        {
            $scope.message="Wrong credientials";
            $scope.messagecolor="alert alert-danger";
        }
        
    }

    $scope.logoutUser=function()
    {
      $scope.user.name = "";
      page.setUser($scope.user);
      $location.path( "/");
    }
});

*/

