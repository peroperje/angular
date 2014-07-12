'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp').controller('MainCtrl', function ($scope,localStorageService) {
        var todosInStore = localStorageService.get('todos');
        $scope.todos = todosInStore && todosInStore.split('\n') || [];

        $scope.$watch('todos', function () {
            localStorageService.add('todos', $scope.todos.join('\n'));
        }, true);
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


