var myTab = angular.module('myApp.tabCont', ['ui.bootstrap', 'ui.router', ])
myTab.config ([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider){
        $stateProvider.state('/', {
            url: "/",
            views: {
                "tab1": { templateUrl: "tab1.html"},
                "tab2": { templateUrl: "tab2.html"},
                "tab3": { templateUrl: "tab3.html"},
            }
        });
        /*$urlRouterProvider.otherwise('/');*/
    }]);
myTab.controller('myServicesCtrl', function($rootScope, $scope, $state){
    $scope.tabs = [
        {title: "Сайты", route: "tab1", active: true},
        {title: "Продвижение и раскрутка", route: "tab2", active: false},
        {title: "Техническая поддержка", route: "tab3", active: false},
    ]})


