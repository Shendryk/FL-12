// Task 1

function convert(){
	let arr = [];
	for(let i=0; i < arguments.length; i++){
		typeof arguments[i] === 'number' ? arr.push(String(arguments[i])) : arr.push(Number(arguments[i]));
	}
 return arr; 
}

// Task 2

function executeForEach(arr, func) {
	let resultArr = [];
	for (let i = 0; i < arr.length; i++) {
		typeof arr[i] === 'number' ? resultArr.push(func(arr[i])) : resultArr.push(func(parseInt(arr[i]))) ;
		}
		return resultArr;
}

// Task 3

function mapArray(arr, func) {
		return executeForEach(arr, func);
}