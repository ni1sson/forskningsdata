'use strict';

/* Services */

var forskningsdataServices = angular.module('forskningsdataServices', ['ngResource']);

forskningsdataServices.factory('Project', ['$resource',
  function($resource){
    return $resource('projects/:projectId.json', {}, {
      query: {method:'GET', params:{projectId:'projects'}, isArray:true}
    });
  }
]);

forskningsdataServices.factory('Unit', ['$resource',
  function($resource){
    return $resource('units/:unitId.json', {}, {
      query: {method:'GET', params:{unitId:'units'}, isArray:true}
    });
  }
]);

forskningsdataServices.factory('Weather', ['$resource',
	function($resource){
		return $resource('http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/:lat/lon/:lon/data.json', {}, {
			query: {method:'GET', params:{lat: 58.59, lon: 16.18}, isArray:false}
		});
	}
]);

forskningsdataServices.factory("page", function($rootScope){
    var page={};
    var user={};
    page.setPage=function(title,bodyClass){
        $rootScope.pageTitle = title;
        $rootScope.bodylayout = bodyClass;
    };
    page.setUser=function(user){
        $rootScope.user = user;
    };
    return page;
});

forskningsdataServices.factory('UserService', [function() {
	var sdo = {
		isLogged: false,
		username: ''
	};
	return sdo;
}]);


forskningsdataServices.factory('AuthInterceptor', function ($window, $q) {
    return {
        request: function(config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.getItem('token')) {
                config.headers.Authorization = 'Bearer ' + $window.sessionStorage.getItem('token');
            }
            return config || $q.when(config);
        },
        response: function(response) {
            if (response.status === 401) {
                // TODO: Redirect user to login page.
            }
            return response || $q.when(response);
        }
    };
});

// // Register the previously created AuthInterceptor.
// forskningsdataServices.config(function ($httpProvider) {
//     $httpProvider.interceptors.push('AuthInterceptor');
// });





