/// <reference path="../typings/index.d.ts" />

export default routesConfig;

/** @ngInject */
function routesConfig(
  $stateProvider: angular.ui.IStateProvider,
  $urlRouterProvider: angular.ui.IUrlRouterProvider,
  $locationProvider: angular.ILocationProvider,
  $httpProvider: any
) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/geo');

  $stateProvider
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

  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.withCredentials = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $httpProvider.defaults.headers.common['Accept'] = 'application/json';
  $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
}
