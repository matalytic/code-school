var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];
var start = 2;

// build applyAndEmpty function expression here
var applyAndEmpty = function(input, queue) {
  for (var i; i<queue.length; i++) {
  	input = queue.shift()(input);
  }
  return input;
  
};

alert(applyAndEmpty(start, puzzlers));