function makeNumber(str) {
  let args = str.split('');
  let argsNumber = [];

  for (let i=0; i < args.length; i++){
    if (isNaN(args[i]) === false) {
      argsNumber.push(args[i]);
    }
  }

  return argsNumber.join('');
}

function countNumbers(str) {
  let numberList = {};
  str = makeNumber(str);
    
  for (let i=0; i < str.length; ++i) {
    let number = str.charAt(i);

    if (numberList[number] !== undefined) {
      ++numberList[number];

    } else {
        numberList[number] = 1; 
    }
  }

  return numberList;
}

countNumbers('erer384jj4444666888jfd123');