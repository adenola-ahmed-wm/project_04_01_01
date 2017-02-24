var myApp = angular.module('myApp', [
    //Dependencies of what the application needs to run
    'ngRoute',
	'meetingController'
]);

myApp.config([
    '$routeProvider',
    function($routeProvider){
        $routeProvider.when('/home', {
           templateUrl: 'partials/home.ejs',
            controller: 'HomeController'
        })
        .when('/speakers', {
            templateUrl: 'partials/speakerslist.ejs',
            controller: 'HomeController'
        })
        .when('/details/:speakersid', {
            templateUrl: 'partials/speakerslist.ejs',
            controller: 'detailsController'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }
]);
