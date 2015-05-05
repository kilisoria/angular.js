'use strict';

/**
 * @ngdoc overview
 * @name soccerTimeApp
 * @description
 * # soccerTimeApp
 *
 * Main module of the application.
 */
angular
  .module('soccerTimeApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/clubs',{
        templateUrl: 'views/clubs.html',
        controller: 'ClubCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
