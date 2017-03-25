var portfolio = angular.module('portfolio' , ['ngAnimate',
'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state('home' , {
    url : '/',
      templateUrl: '../views/portfolio.html',
      controller : 'portfolioController'
  })
  .state('temporary' , {
    url: '/temp',
    templateUrl : '../views/temporary.html',
    controller : 'tempController'
  })
});
