const app = angular.module('app', ['ngRoute','ui.carousel']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })

        // .when('/artist/:id_artist', {
        //     templateUrl: 'views/artistPage.html'
        // })
        .when('/about', {
            templateUrl: 'views/about.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);