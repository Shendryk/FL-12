var a = parseInt(prompt("Enter please the value for a:", 0));
var b = parseInt(prompt("Enter please the value for b:", 0));
var c = parseInt(prompt("Enter please the value for c:", 0));

if (typeof(a, b, c) === "number") {
	var discriminant = Math.sqrt(Math.pow(b, 2) - 4 * a * c);

	if (discriminant > 0) {
	    var x1 = (-b + discriminant) / (2 * a);
	    var x2 = (-b - discriminant) / (2 * a);
	    console.log("x1 = " + x1 + "   x2 = " + x2);
	} 
	else if (discriminant === 0) {
	    var x = -b / (2 * a);
	    console.log("x = " + x);
	} 
	else {
	    console.log("no solution");
	}
} 
else {
    alert("Invalid input data");
    console.log("Ivalid input data");
} 





// let a = +prompt('Enter A value...',''),
//     b = +prompt('Enter B value...',''),
//     c = +prompt('Enter C value...',''),
//     d;

// const powerFactor = 2,
//       discriminantCoefficient = 4,
//       divisionRatio = 2;
// if (isNaN(a) || isNaN(b) || isNaN(c) || (a && b) === 0) {
//     console.log('Invalid data input!');
// } else {
//      d = Math.pow(b, powerFactor) - discriminantCoefficient * a * c;
// }

// if (d < 0) {
//     console.log('No solution: D < 0');
// } else if (d === 0) {
//     let x = Math.round(-b / (2 * a));
//     console.log('x = ', x);
// } else if (d > 0) {
//     let x1 = Math.round((-b + Math.sqrt(d)) / (divisionRatio * a));
//     let x2 = Math.round((-b - Math.sqrt(d)) / (divisionRatio * a));
//     console.log('x1 = ' + x1 + ' and x2 = ' + x2);
// }


// let a = prompt('Enter A value');
// let b = prompt('Enter B value');
// let c = prompt('Enter C value');

// if (isNaN(a) || isNaN(b) || isNaN(c) || (a && b) === 0) {
//     console.log('Invalid data input!');





//     let value1,
//     value2,
//     numVolume = 3,
//     data = [];

// for (let i = 0; i < numVolume; i++){
//     data.push(Number(prompt(`Input value ${i + 1}:`, 0)));

//     if (isNaN(parseFloat(data[i]))) {
//         data.shift();
//         console.log('input values should be ONLY numbers');
//         break;
//     } else if (data[i] <= 0) {
//         data.shift();
//         alert('A triangle must have 3 sides with a positive definite length');
//         break;
//     } 
// }


// let value = [];

// value[0] = +prompt('Enter value A');
// value[1] = +prompt('Enter value B');
// value[2] = +prompt('Enter value C');

// if (value.length === 3) {
//     let [a, b, c] = data;
//     if (a + b > c && a + c > b && c + b > a) {
//         if (a === b && b === c && a === c){
//                 console.log('Equilateral triangle');
//         } else if (a === b || a === c || b === c){
//                 console.log('Isosceles triangle');
//         } else {
//             console.log('Scalene triangle');
//         }
//     } else {
//         alert('Triangle doesn’t exist');
//     }
// } 
