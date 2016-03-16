(function (angular){
  'use strict';

  angular.module('app')
    .controller('counterController', counterController)
    .controller('todoController', todoController)


    counterController.$inject = []
    todoController.$inject = []

    function counterController(){
      this.counter = 0;

      this.add = function() {
       this.counter >= 10 ? this.counter : this.counter ++;
      }

      this.sub = function(){
        this.counter === 0 ? this.counter : this.counter --;
      }
    };

    function todoController(){
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
        console.log(this.newTask)
        this.tasks.push({name: this.newTask, complete: false});
        this.newTask = '';

        this. updateFraction();
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
