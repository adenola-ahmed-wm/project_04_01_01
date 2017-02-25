var myApp = angular.module('myApp', [
    //Dependencies of what the application needs to run
     'ngRoute',
	   'meetupsControllers',
     'ngSanitize'
]);

myApp.config([
    '$routeProvider',
    function($routeProvider){
        $routeProvider.when('/home', {
           templateUrl: 'partials/home.ejs',
            controller: 'HomeController'
        })
        .when('/speakers', {
            templateUrl: 'partials/content/speakerslist.ejs',
            controller: 'SpeakerController'
        })
        .when('/details/:speakersid', {
            templateUrl: 'partials/content/speakerslist.ejs',
            controller: 'DetailsController'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }
]);
