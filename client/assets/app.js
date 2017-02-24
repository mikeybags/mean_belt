var app = angular.module('app', ['ngRoute','ngCookies']);

app.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '../partials/login.html',
    controller: 'loginController'
  }).when('/dashboard', {
    templateUrl: '../partials/dashboard.html',
    controller: 'dashboardController'
  }).when('/createPoll', {
    templateUrl: '../partials/createPoll.html',
    controller: 'createPollController'
  }).when('/poll/:id', {
    templateUrl: '../partials/poll.html',
    controller: 'pollController'
  }).otherwise({redirectTo: '/'})
});
