'use strict';

angular.module('angularjsSeedOpenshiftApp.auth', [
  'angularjsSeedOpenshiftApp.constants',
  'angularjsSeedOpenshiftApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
