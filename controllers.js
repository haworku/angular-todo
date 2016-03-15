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
      this.tasks = [{"Brush Your Teeth": true}, {"Tie Shoes": false}];

      this.add = function(){
        this.tasks.push($scope.task)
      }
    }

})(window.angular);
