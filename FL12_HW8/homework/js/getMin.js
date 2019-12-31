function getMin() {
  let args = Array.prototype.slice.call(arguments).sort(); 
  return args[0];
}

getMin(3, 0, -3);