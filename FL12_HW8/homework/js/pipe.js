function addOne(x) {
  return x + 1;
}

function pipe () {
  let firstNumber = arguments[0];
  for (let i=1; i < arguments.length; i++) {
    firstNumber = arguments[i](firstNumber);
  }
}

pipe(1, addOne);