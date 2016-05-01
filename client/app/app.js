'use strict';

angular.module('angularjsSeedOpenshiftApp', [
  'angularjsSeedOpenshiftApp.auth',
  'angularjsSeedOpenshiftApp.admin',
  'angularjsSeedOpenshiftApp.about',
  'angularjsSeedOpenshiftApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
