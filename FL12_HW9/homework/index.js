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
		typeof arr[i] === 'string' ? resultArr.push(func(parseInt(arr[i]))) : resultArr.push(func(arr[i])) ;
		}
		return resultArr;
}

// Task 3

function mapArray(arr, func) {
		return executeForEach(arr, func);
}

// Task 4

function filterArray(arr, func) {
	let resultArr = [];
	executeForEach(arr, function (el) {
		return func(el) ? resultArr.push(el) : '';
	});
	return resultArr;
  }

// Task 5

function flipOver(str) {
	let resultStr = '';
	for (let i = str.length - 1; i >= 0; i--) {
		resultStr += str[i];
	}
	return resultStr;
  }
  flipOver('hey world');

// Task 6

function makeListFromRange(arr) {
    let resultArr = []
    for (let i = arr[0]; i <= arr[1]; i++) {
        resultArr.push(i)
    }
    return resultArr;
}

// Task 7

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
  ];

function getArrayOfKeys(arr, key) {
	let resultArr = [];
	executeForEach(arr, function (el) {
		return resultArr.push(el[key]);
	});
	return resultArr;
}

// Task 8

function substitute(arr) {
    let resultArr = [];
    mapArray(arr, function (el) {
        if (el < 30) {
            resultArr.push('*');
        } else {
            resultArr.push(el);
        }
    });
    return resultArr;
}


// Task 9

function getPastDay(date, daysAgo) {
    let millisec = Date.parse(date);
    let dayLengthInMilliseconds = 86400000;

    return new Date(millisec - daysAgo * dayLengthInMilliseconds).getDate();
}


// Task 10
function formatDate(date) {
    let minNum = 10;
    let hours = date.getHours() < minNum ? `0${date.getHours()}`: date.getHours();
    let minut = date.getminut() < minNum ? `0${date.getminut()}` : date.getminut();
	
	return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${hours}:${minut}`;
}


