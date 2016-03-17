(function (angular){
  'use strict';

  angular.module('app')
    .controller('counterController', counterController)
    .controller('todoController', todoController)


    counterController.$inject = ['$scope']
    todoController.$inject = ['$log', '$filter']

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

    function todoController($log, $filter){
      console.log($filter)
      // Seed
      this.tasks = [{name: "Brush Your Teeth", complete: true}, {name: "Tie Shoes", complete: false}];
      this.completed = 1;
      this.total = 2;

      // Defaults
      this.newTask = '';
      this.showCompleted = true;
      this.toggleText = 'Hide Completed';

      this.add = function(){
        // Add new task

        if (this.newTask.length > 0) {
          this.tasks.push({name: this.newTask, complete: false});
          this.newTask = '';

          this. updateFraction();
        };
      }.bind(this)

      this.toggleComplete = function(taskIndex){
        // Toggle 'complete' property in data structure
        var current = this.tasks[taskIndex].complete;
        this.tasks[taskIndex].complete = !current
        this.updateFraction();
      }.bind(this)

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
