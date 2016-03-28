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
        console.log("we in dis")
        this.todoList = Todo.add();
        // don't allow to add if its less than one chracter
        // update the fraction
      }.bind(this)

    vm.update = function(index, updatedTask){
      this.todoList = Todo.update();
    };

    vm.remove = function(index){
      this.todoList = Todo.remove(index);
    };
      // this.toggleComplete = function(taskIndex){
      //   // Toggle 'complete' property in data structure
      //   var current = this.tasks[taskIndex].complete;
      //   this.tasks[taskIndex].complete = !current
      //   this.updateFraction();
      // }.bind(this)

      this.updateFraction = function(){
         // Display updated completed/total fraction
         this.completed = this.tasks.reduce(function(p, n){
          return n.complete === true ? p + 1 : p;
        }, 0);

        this.total = this.tasks.length;
      }

      this.toggleShowCompleted= function(){
        // Toggle visbility of completed tasks
        this.showCompleted = !this.showCompleted
        this.toggleText = this.showCompleted ? "Hide Completed" : "Show Completed";
        };

    }

})(window.angular);
