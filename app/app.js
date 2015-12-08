'use strict';
//Определение уровней приложений. модулей и зависимостей

angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'ui.router',
    'myApp.homepage',
    'myApp.myportfolio',
    'myApp.services',
    'myApp.contacts',
    'myApp.tabCont'

]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/homepage'});
    }]);