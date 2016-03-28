(function (angular){
  'use strict';

  angular.module('app', ['TodoService'])

    .controller('todoController', todoController)

    todoController.$inject = ['$log', '$filter', '$timeout', 'Todo']


    function todoController($log, $filter, $timeout, Todo){
       var vm = this;
       vm.todoList = Todo.get();


      vm.add = function(chore){
        // Add new task
        vm.todoList = Todo.add(chore);
        // STILL TO DO
        // don't allow to add if its less than one chracter
        // update the fraction
      };

    vm.update = function(index, updatedTask){
     vm.todoList  = Todo.update(index, updatedTask);
    };

    vm.remove = function(index){
     vm.todoList  = Todo.remove(index);
    };

    vm.toggleComplete= function(index){
       vm.todoList  = Todo.complete(index);
        };

    vm.numberCompleted = function(){
         // Display updated completed/total fraction
         return vm.todoList.reduce(function(p, n){
          return n.completed === true ? p + 1 : p;
        }, 0);

      };

      this.toggleShowCompleted= function(){
        // Toggle visbility of completed tasks
        this.toggleText = this.showCompleted ? "Hide Completed" : "Show Completed";
        };

    }

})(window.angular);
