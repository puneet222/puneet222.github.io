var portfolio = angular.module('portfolio' , ['ngAnimate',
'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state('temporary' , {
    url: '/temp',
    templateUrl : 'temporary.html',
    controller : 'tempController'
  })
})
