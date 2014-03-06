'use strict';


// Declare app level module which depends on filters, and services
var myApp=angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'expCtrl'});
  $routeProvider.when('/myCars', {templateUrl: 'partials/partial1.html', controller: 'MyCarCtrl'});
  $routeProvider.when('/addCar', {templateUrl: 'partials/partial2.html', controller: 'MyCarCtrl'});
 $routeProvider.when('/forecast', {templateUrl: 'partials/partial3.html', controller: 'MyCarCtrl1'});
$routeProvider.when('/initialBlueprint', {templateUrl: 'partials/partial4.html', controller: 'MyCarCtrl1'});
   $routeProvider.when('/marketStudy', {templateUrl: 'partials/partial5.html', controller: 'MyCarCtrl1'});
   $routeProvider.when('/otherDetails', {templateUrl: 'partials/partial6.html', controller: 'MyCarCtrl1'});
   $routeProvider.when('/reviewPage', {templateUrl: 'partials/partial7.html', controller: 'expCtrl1'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);


