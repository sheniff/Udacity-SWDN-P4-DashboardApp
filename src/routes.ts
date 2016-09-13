/// <reference path="../typings/index.d.ts" />

export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/geo');

  $stateProvider
    .state('app', {
      url: '/todo',
      component: 'app'
    })
    .state('dashboard', {
      url: '/',
      component: 'dashboard'
    })
    .state('dashboard.geo', {
      url: 'geo',
      component: 'geo'
    })
    .state('dashboard.metrics', {
      url: 'metrics',
      component: 'metrics'
    })
    .state('dashboard.data', {
      url: 'data',
      component: 'data'
    });
}
