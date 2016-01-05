var myTab = angular.module('myApp.tabMenu', ['ui.bootstrap', 'ui.router' ])
myTab.config ([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider){
        $stateProvider.state('/', {
            url: "",
            views: {
                "tab1": { templateUrl: "services/tab1.html"},
                "tab2": { templateUrl: "services/tab2.html"},
                "tab3": { templateUrl: "services/tab3.html"}
            }
        });
        /*$urlRouterProvider.otherwise('/');*/
    }]);
myTab.controller('myServicesCtrl', function($rootScope, $scope){
    $scope.tabs = [
        {title: "Сайты", route: "tab1", active: true},
        {title: "Продвижение и раскрутка", route: "tab2", active: false},
        {title: "Техническая поддержка", route: "tab3", active: false}
    ]});


