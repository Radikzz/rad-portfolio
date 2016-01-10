'use strict';
//Определение уровней приложений. модулей и зависимостей

var myApp = angular.module('myApp', [
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'rl.lazy-carousel',
    'myApp.sender'

])
myApp.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        // Любые неопределенные url перенаправлять
       $urlRouterProvider.otherwise("/homepage");

        // Теперь определим состояния
        $stateProvider
        .state('homepage', {
            url: "/homepage",
            templateUrl: "homepage/homepage.html"
        })
        .state('myportfolio', {
                url: "/myportfolio",
                templateUrl: "myportfolio/my-portfolio.html"
            })
        .state('services', {
                url: "/services",
                views: {
                    '': { templateUrl: "services/services.html"},
                    "tab1@services": { templateUrl: "services/tab1.html"},
                    "tab2@services": { templateUrl: "services/tab2.html"},
                    "tab3@services": { templateUrl: "services/tab3.html"}
                }
            })

        .state('contacts', {
            url: "/contacts",
            templateUrl: "contacts/contacts.html"
        })
    }]);
myApp.controller('myServicesCtrl', function($rootScope, $scope, $state){
    $scope.tabs = [
        {title: "Разработка и доработка сайтов", route: "tab1",  active: true},
        {title: "Редизайн и аудит сайта", route: "tab2", active: false},
        {title: "Участие в разработке SPA", route: "tab3", active: false}
    ]

});