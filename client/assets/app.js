var app = angular.module('app', ['ngRoute','ngCookies']);

app.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '../partials/login.html',
    controller: 'loginController'
  }).when('/dashboard', {
    templateUrl: '../partials/dashboard.html',
    controller: 'dashboardController'
  }).otherwise({redirectTo: '/'})
});
