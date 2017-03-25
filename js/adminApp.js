var portfolio = angular.module('portfolio' , ['ngAnimate',
'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state('home' , {
    url : '/',
      templateUrl: 'index2.html',
      controller : 'portfolioController.js'
  })
  .state('temporary' , {
    url: 'temp',
    templateUrl : 'temporary.html',
    controller : 'tempController'
  })
})
