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

      // this.completed = this.tasks.reduce(function(counter,task){
      //     return counter++ if (task.complete === true)
      //   };

      this.total = this.tasks.length;
      this.add = function(){
        console.log(todoController.newTask)
        this.tasks.push({name: todoController.newTask, complete: false})
      }.bind(this)

      this.complete = function(taskName){
        tasks[taskName] = true
        // var task = this.tasks.find( task[taskName] != undefined)
      }

    }

})(window.angular);
