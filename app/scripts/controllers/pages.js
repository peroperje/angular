'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:PagesCtrl
 * @description
 * # PagesCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('PagesCtrl', function ($scope,$http) {
        $http.get('data/pages.json').success(function(data) {
            /**
             * Pages
             *
             * pages array
             * @type {array}
             */
            $scope.pages = data;
        });
  });
