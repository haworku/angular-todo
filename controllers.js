(function (angular){

    'use strict';
    angular.module('app', ['TodoService'])

    .controller('todoController', todoController);

    todoController.$inject = ['$log', '$filter', '$timeout', 'Todo'];


    function todoController($log, $filter, $timeout, Todo){
        var vm = this;
        vm.todoList = Todo.get();


        vm.add = function(chore){
            vm.todoList = Todo.add(chore);
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
            return vm.todoList.reduce(function(p, n){
            return n.completed === true ? p + 1 : p;
          }, 0);

        };

        vm.toggleShowCompleted= function(){
        // Toggle visbility of completed tasks
            this.toggleText = this.showCompleted ? 'Hide Completed' : 'Show Completed';
        };

    }

})(window.angular);
