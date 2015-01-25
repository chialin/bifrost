'use strict';

(function() {
  angular.module('bifrost',[
    'ui.router',
    'lbServices',
    'ngMaterial'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'views/projects.html'
      }).state('login', {
        url: '/login',
        templateUrl: 'views/login.html'
      });

    $urlRouterProvider.otherwise('main');
  });
})();
