//functions in JS
// function aman () {
//     console.log("i love coding");
// }

// aman();

//Arrow fuctions

// const sum = (a, b) => {
//     console.log(a + b);
// } 

// sum(5, 5);

//practice question

// function countVowels(str) {
//     let count = 0;
// for(const char of str){
//     if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         count++;
//     }
// }
// console.log(count);
// }

//with arrrow function

// const countVow = (str) => {
//     let count = 0;
// for(const char of str){
//     if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         count++;
//     }
// }
// console.log(count);
// }

// forEach loop in array(fnx)
// let nums = [2, 3, 4, 5, 6];

// nums.forEach ((num) => {
//     console.log(num*num);
// });

//map array method
// let nums = [2, 3, 4, 5];

// let newArr = nums.map ((val) => {
//     return val * 2;
// })

// console.log(newArr);

//arr.filter mothod

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// })

// console.log(evenArr);

//arr.reduce method

// let arr = [1, 2, 3, 4];

// const newArr = arr.reduce ((res, cur) => {
//     return res + cur;
// })

// console.log(newArr); //10

//more example

// let arr = [10, 55, 47, 98];

// const output = arr.reduce ((prev, curr) => {
//     return prev > curr ? prev : curr;
// })

// console.log(output); //98

//practice questions

// let nums = [88, 91, 99, 67, 94, 58, 76];

// let toppers = nums.filter ((val) => {
//     return val > 90;
// })

// console.log(toppers);

//more practice question

// let n = prompt("enter a number :")

// let arr = [];

// for(i = 1; i <= n; i++) {
//     arr[i - 1] = i;
// }

// console.log(arr);

// let sum = arr.reduce ((res, curr) => {
//     return res + curr;
// })

// console.log(sum);