'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular.module('angularApp', [
        'ngCookies',
        'ngResource',
        /*'ngSanitize',*/
        'ngRoute',
        'ui.sortable',
        'LocalStorageModule'
    ])
    .config(['localStorageServiceProvider', function(localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('ls');
    }])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/staticPage', {
              templateUrl: 'views/staticpage.html',
              controller: 'StaticpageCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
