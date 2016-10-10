angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      template: '<main-page></main-page>'
    })
    .state('restaurant', {
      url: '/restaurant/{restaurantId}',
      template: '<restaurant-page></restaurant-page>'
    });
}
