
//1) Write a program to reverse a string without using any built-in functions

let first = "dinakaran"
let rev = ""
for (let i = first.length - 1; i >= 0; i--) {
    rev += first[i];


}
console.log(rev);



//using function

// function

//2) Create a function to calculate the sum of digits of the factorial of a number.


let result = 1;
let n = 4;
for (let i = 2; i <= n; i++) {
    result *= i;
}
console.log(result);
let fact = result;
let sum = 0;
while (fact !== 0) {
    sum += fact % 10;
    fact = Math.floor(fact / 10);
}
console.log(sum);


//3) Find the length of a given string, including spaces.

let leav = "Information Technology "
if (leav = leav.length) {
    console.log(leav);
}


  


//4) Find the longest word in a given sentence

let long = "bachelor of information technology";
let longWord = " ";
let current = " ";
for (let i = 0; i < long.length; i++) {
    let char = long[i];
    if (char === ' ') {
        current = "";
    }
    else {
        current += char;
    }
    if (current.length > longWord.length) {
        longWord = current;
    }
}

console.log(longWord);


//5) Write a program to calculate the sum of digits of a given number.

let num=67889978;
let sm=0;
while (num !== 0) {
    sm += num % 10;
    num = Math.floor(num / 10);
}
console.log(sm);


//6) Create a function to find the ASCII value of a given character.

let asc="g"

let ref=asc.charCodeAt(0);
    console.log(ref);
    
//7) Implement a function to calculate the power of a number.

 let val=5
 let pow=4
 let res=1
 for(let i=0; i<pow; i++){
    res=res*val;
 }
console.log(res);

function value(valu){
        let valu=3
        let resu=1;
        for(let i=0; i<powe; i++){
            resu=resu*valu
        }
        return resu;
    
}
value(5)
//8) Create a function to check if a given number is a strong number.


// using function

function strongNumber(number) {
    
    function factorial(n) {
        let fact = 1;
        for (let i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }
    let temp = number;
    let sumOfFactorials = 0;

    while (temp > 0) {
        let digit = temp % 10; 
        sumOfFactorials += factorial(digit); 
        temp = Math.floor(temp / 10); 
    }
    return sumOfFactorials === number;
}
let number = 155;
if (strongNumber(155)) {
    console.log(number,`is a strong number.`);
} else {
    console.log(number,`is not a strong number.`);
}

//9) Implement a function to count the number of vowels in a given string.

const vowe=['a','e','i','o','u'];
let cou=0;
let nam='information';
for(let i=0; i<nam.length; i++){
    for(let j=0; j<vowe.length; j++){
        if(nam[i]===vowe[j]){
            cou++;
        }
    }
}
console.log(cou);


// using function
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                count++;
                break; 
            }
        }
    }
    return count;
}
console.log(countVowels("information technology"));


//10) Create a function to check if a given number is a perfect square.

  let sqr =0;
  let numbe=49;
  while(sqr*sqr <numbe){
    
    sqr++;
  }
  if(sqr*sqr === numbe){
    console.log(numbe,"is a perfect square");
  }
  else{
    console.log(numbe,"is not a perfect square");
  }
  
  
// using function

function perfectSquare(numb) {

    let sqrt = 0;
    while (sqrt * sqrt < numb) {
        sqrt++;
    }

    return sqrt * sqrt === numb;
}

let numb = 49;
if (perfectSquare(numb)) {
    console.log(`${numb} is a perfect square.`);
} else {
    console.log(`${numb} is not a perfect square.`);
}
