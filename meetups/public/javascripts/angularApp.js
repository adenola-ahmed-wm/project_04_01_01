var myApp = angular.module('myApp', [
    //Dependencies of what the application needs to run
    'ngRoute',
    'meetupsControllers'
]);

myApp.config([
    '$routeProvider',
    function($routeProvider){
        $routeProvider.when('/home', {
            templateUrl: 'partials/home.ejs',
            controller: 'homeController'
        })
        .when('/speakers', {
            templateUrl: 'partials/speakers.ejs',
            controller: 'homeController'
        })
        .when('/speakers/:speakerid', {
            templateUrl: 'partials/speakers.ejs',
            controller: 'detailsController'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }
]);
