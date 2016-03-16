// Filters and Directives
(function(angular){
  'use strict'

  angular.module('app', [
  ]);
 // sample code from phonecat project, don't understand whether I need filters or directives r what for refactoring
  .filter('strikethrough', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

})(window.angular)
