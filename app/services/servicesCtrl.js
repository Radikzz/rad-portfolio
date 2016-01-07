'use strict';

angular.module('myApp.services', ['ngRoute', 'ui.bootstrap', 'ui.router', 'ngAnimate'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/services', {
            templateUrl: 'services/services.html',
            controller: 'ServicesPageCtrl'
        });
    }])

    .controller('ServicesPageCtrl', [function() {

    }]);
