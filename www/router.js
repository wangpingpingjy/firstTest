/**
 * 定义路由，懒加载模式（按需加载）
 =angular.module('app',['ui.router','oc.lazyLoad'])
 */
appmodule.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
     $stateProvider.state('login',{
        url:'/login',
        cache:false,
        templateUrl:'components/login.html',
        controller:'loginCtrl'
     })
    $urlRouterProvider.otherwise("/login");
}])