(function (angular){
    'use strict';
    angular.module('app', ['TodoService'])

    .controller('todoController', todoController);

    todoController.$inject = ['$log', '$scope', '$filter', '$timeout', 'Todo'];


    function todoController($log, $scope, $filter, $timeout, Todo){
      var vm = this;
      vm.chore = 'typing';
      vm.editChore = '';
      vm.todoList = Todo.get();
      vm.numberCompleted = Todo.completed();

      Todo.subscribe($scope, function() {
        vm.numberCompleted = Todo.completed();
      });

      vm.add = function (chore) {
        vm.todoList = Todo.add(vm.chore);
        vm.chore = '';
      };

      vm.update = function (index, updatedTask) {
        vm.todoList = Todo.update(index, updatedTask);
      };

      vm.remove = function (index) {
        vm.todoList = Todo.remove(index);
      };

      vm.toogleEdit = function(index) {
        vm.todoList = Todo.update(index, {edit: !vm.todoList[index].edit});
      };

      vm.toggleComplete = function (index) {
        vm.todoList = Todo.update(index, {completed: !vm.todoList[index].completed});
      };
    }
})(window.angular);
