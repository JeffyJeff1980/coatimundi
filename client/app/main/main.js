'use strict';

angular.module('angularjsSeedOpenshiftApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
    .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
    .state('nodebots', {
        url: '/nodebots',
        templateUrl: 'app/nodebots/nodebots.html',
        controller: 'NodebotsController',
        controllerAs: 'nodebots'
      });;
  });
