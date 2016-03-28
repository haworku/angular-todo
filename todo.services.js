 (function(angular) {
  'use strict';

  // angular service that's going to hold our `Todo` Service with no dependency
  angular.module('TodoService', []);

  angular
    .module('TodoService')
    .factory('Todo', Todo); // Telling Angular we're going to be have a service called `Todo`

  /**
   * JS TIP
   * what we did on line 9 is known as currying.
   * one of neat JavaScript *quirks* that'll allow us to make our code look smooth
   */
  Todo.$inject = ['$rootScope']; // $rootScope as dependency.

  /**
   * Todo Service
   *
   * services provided:
   * Todo.add(task: String) --- add task
   * Todo.update(index: Number, updatedTask: Object) --- update task at index
   * Todo.remove(index: Number) --- remove task at index
   * Todo.subscribe(scope: $scope, callback: Function) --- subscribe to store change
   *
   * @param {$rootSCope} $rootScope - used for `$emit` and `$on`
   */
  function Todo($rootScope) {
    /**
     * JS TIP
     * what we're doing with `TodoList` and `EVENT_NAME` is known as closure.
     * the variables are only acceded inside the `Todo` function
     */
    var TodoList = [];
    var EVENT_NAME = 'HANA'; // event name that'll be *announced* on change

    return {
      /**
       * add task to our TodoList
       *
       * @param {String} task chore to be done
       */

       get() {
          return Object.assign( [],TodoList );
       },

      add(task) {
        TodoList.push({
          completed: false,
          chore: task
        });

        return Object.assign( [],TodoList );
      },

      /**
       * given an index and an updated instance it'll update a chore
       *
       * @param  {Number} index
       * @return {Object} updatedTask
       */
      update(index, updatedTask) {
        // this is the equivalent of ECMAScript 6's Object.assign
        angular.extend(TodoList[i], updatedTask);

        return Object.assign( [],TodoList );
      },

      /**
       * removes a chore at specified index
       *
       * @param  {Number} index
       * @return {Array} updated current list
       */
      remove(index) {
        TodoList.splice(index, 1);

        return Object.assign( [],TodoList );
      },

      /**
       * this is one MAJOR MAJOR "magic" that's required
       * used to subscribe to our store --- think Flux's subscribe
       *
       * @param {$scope} scope scope on which we'll be watching on
       * @param {Function} callback function that'll subscribe to change
       * @return {Function} unsubscribe function
       */
      subscribe(scope, callback) {
        var handler = $rootScope.$on(EVENT_NAME, callback);
        scope.$on('$destroy', handler);

        return handler;
      }
    };
  }
})(window.angular);
