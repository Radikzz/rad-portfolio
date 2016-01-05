'use strict';
var sendMessage = angular.module('myApp.sender', []);
sendMessage.controller('ctrlForm', function($scope, $http){
    $scope.firstName = {};
    $scope.submit = function () {
        if ($scope.form.$valid){
            $http.post('send.php', $scope.user).success(function( res ) {
                if (res.res == 'ok') {
                    $scope.user = {};
                    $scope.form.$setPristine();
                    alert('Сообщение отправлено');
                } else {
                    alert('Возникла ошибка');
                }
            }).error(function(err){
                alert(err);
            });
        }
    }
});