'use strict';

angular.module('myApp.contacts', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contacts', {
            templateUrl: 'contacts/contacts.html',
            controller: 'contactsCtrl'
        });
    }])

    .controller('contactsCtrl', [function() {

    }]);