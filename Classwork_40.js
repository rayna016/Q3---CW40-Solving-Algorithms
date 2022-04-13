// 1. Odd Numbers
// Write a function oddNumbers(min, max) that
// takes in two numbers as args. 
// The function should return an array containing 
// all odd numbers between min and max, exclusive.

function oddNumbers(min, max){
    let emptArray = [];
    for(let i = min + 1; i < max; i++) {
        if (i % 2 !== 0) {
            emptArray.push(i);
        }
    }
    return emptArray;
}

console.log(oddNumbers(12, 17)); // [ 13, 15 ]
console.log(oddNumbers(9, 20)); // [ 11, 13, 15, 17, 19 ]
console.log(oddNumbers(-7, 3)); // [ -5, -3, -1, 1 ]

// 2. Write a function hasDoubleLetter(str) that 
// accepts a string.The function should return 
// a boolean indicating whether the string contains 
// two of the same character consecutively.

function hasDoubleLetter(str) {

    for (let i = 0; i < str.length; i++){
        let character = str[i];
        let nextLetter = str [i + 1];

        if (letter === nextLetter) {
            return true;
        } 
    } 
}

console.log(hasDoubleLetter('deer')); // true
console.log(hasDoubleLetter('bootcamp')); // true
console.log(hasDoubleLetter('toggle')); // true
console.log(hasDoubleLetter('taco')); // false
console.log(hasDoubleLetter('jumper')); // false

// 3. Fizz Buzz Array
// Write a function fizzBuzz(max) that accepts a number as an arg. 
// The function should return an array containing 
// all positive numbers less than max that 
// are divisible by either 3 or 5, but not both.

function fizzBuzz(max){
    let array = [];

    for (let i = 1; i<= max; i++) {
        if((i % 3 === 0 && i % 5 === 0)) {
            array
        } else if ((i % 3 === 0 || i % 5 == 0)){
            return true;
        } 
    }
}


console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]