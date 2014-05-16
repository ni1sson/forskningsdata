'use strict';

/* Directives */

var forskningsdataDirectives = angular.module('forskningsdataDirectives', []);

forskningsdataDirectives.directive('ghDygraph', function(){
	var g2;

   
	  // var datarr = [];
	  // console.log(data.rows.length);
	  // data.rows.forEach(function(o,i){
	  //   datarr.push([new Date(o.key),o.value]);
	  // });
	  // datarr = datarr.reverse();

	  // if(g2 === undefined){          
	  //   g2 = new Dygraph(
	  //     document.getElementById("graphdiv2"),
	  //     datarr, // path to data/CSV file
	  //     {animatedZooms: true}          // options
	  //   );
	  // }else{
	  //   g2.destroy();          
	  //   g2 = new Dygraph(
	  //     document.getElementById("graphdiv2"),
	  //     datarr, // path to CSV file
	  //     {animatedZooms: true}          // options
	  //   );
	  // }

    return {
		restrict: 'E', // the directive can be invoked only by using <my-directive> tag in the template
		scope: { // attributes bound to the scope of the directive
		  val: '=',
		  grouped: '='
		},
		link: function (scope, element, attrs) {
			var g;
			$(document.body).append('<div id="graphdiv" style="width: 800px; height: 300px; display: block"></div>');
			
			scope.$watch('val', function (newVal, oldVal) {
				if(!newVal){
					return;
				}
				g = new Dygraph(document.getElementById("graphdiv"),newVal,{animatedZooms:true});
				
			});
		  // initialization, done once per my-directive tag in template. If my-directive is within an
		  // ng-repeat-ed template then it will be called every time ngRepeat creates a new copy of the template.

		  // ...

		  // // whenever the bound 'exp' expression changes, execute this 
		  // scope.$watch('exp', function (newVal, oldVal) {
		  //   // ...
		  // });
		}
	};

});
// var datarr = [];
// console.log(data.rows.length);
// data.rows.forEach(function(o,i){
//   datarr.push([new Date(o.key),o.value]);
// });
// datarr = datarr.reverse();

// var g2;

// if(g2 === undefined){          
//   g2 = new Dygraph(
//     document.getElementById("graphdiv2"),
//     datarr, // path to data/CSV file
//     {animatedZooms: true}          // options
//   );
// }else{
//   g2.destroy();          
//   g2 = new Dygraph(
//     document.getElementById("graphdiv2"),
//     datarr, // path to CSV file
//     {animatedZooms: true}          // options
//   );
// }