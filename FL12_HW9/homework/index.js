function convert(){
  let arr = [];
  for(let i=0;i<arguments.length;i++){
    typeof(arguments[i]) === 'number' ? arr.push(String(arguments[i])):arr.push(Number(arguments[i]));
  }
 return arr; 
}