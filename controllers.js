(function (angular){
  'use strict';

  angular.module('app', ['TodoService'])


    .controller('counterController', counterController)
    .controller('todoController', todoController)


    counterController.$inject = ['$scope']
    todoController.$inject = ['$log', '$filter', '$timeout', 'Todo']

    function counterController($scope){
      $scope.counter = 0;
      console.log($scope)

      $scope.add = function() {
       $scope.counter >= 10 ? $scope.counter : $scope.counter ++;
      }

      $scope.sub = function(){
        $scope.counter === 0 ? $scope.counter : $scope.counter --;
      }
    };

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

      this.numberCompleted = function(){
         // Display updated completed/total fraction
         return vm.todoList.reduce(function(p, n){
          return n.completed === true ? p + 1 : p;
        }, 0);

      };

      this.toggleShowCompleted= function(){
        // Toggle visbility of completed tasks
        this.showCompleted = !this.showCompleted
        this.toggleText = this.showCompleted ? "Hide Completed" : "Show Completed";
        };

    }

})(window.angular);
