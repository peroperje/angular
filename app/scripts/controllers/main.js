'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp').controller('MainCtrl', function ($scope) {
        $scope.todos = ['Item 1', 'Item 2', 'Item 3','Item 4'];
        /**
         * Add item to todos liss
         */
        $scope.addTodo = function () {
            $scope.todos.push(this.todo);
            $scope.todo = '';
        };
        /**
         * Remove item from list
         */
        $scope.removeTodo = function (index) {
            $scope.todos.splice(index, 1);
        };
  });


