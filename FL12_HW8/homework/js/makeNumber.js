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
makeNumber('erer384jjjfd123');