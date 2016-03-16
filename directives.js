// Filters and Directives

.filter('strikethrough', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});