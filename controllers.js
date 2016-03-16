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
      this.tasks = [{name: "Brush Your Teeth", complete: true}, {name: "Tie Shoes", complete: false}];
      this.newTask = '';
      this.toggleText = 'Hide Completed';
      this.completed = 1;
      this.total = this.tasks.length;
      this.showCompleted = true;


      this.add = function(){
        console.log(this.newTask)
        this.tasks.push({name: this.newTask, complete: false});
        this.newTask = '';
        this.total = this.tasks.length;
      }.bind(this)

      this.complete = function(taskIndex){
        console.log(taskIndex);
        this.tasks[taskIndex].complete = true;

         this.completed = this.tasks.reduce(function(p, n){
          return n.complete === true ? p + 1 : p;
        }, 0);
      }

      this.toggleCompleted= function(){
        this.showCompleted = !this.showCompleted
        this.toggleText = this.showCompleted ? "Hide Completed" : "Show Completed";
        };

    }

})(window.angular);
