// arithmatic operators: +,-,*,/,%,++,--

let a =10

// increment: post inc
console.log(a++);  //a+1

console.log(a);

// pre inc
console.log(++a);  // a=a+1

// decrement : pose dec 

console.log(a--);
console.log(--a);   //pre decrement
let b=12

console.log(12+13);
console.log("apple"+"fruit");
console.log("ab"-"cd");

console.log(12+"12");// type coercion: the value of data type converts from one type to another type
console.log(12-"6");


// comparison operator: >,<,>=,<=, ==, !=

console.log(12>9);
console.log(12==12);
console.log(12!=11);

// ===, !==

console.log(12=="12"); // type coercion happened here
console.log(12==='12'); // strict validation; it doest not perform type coercion

//logical operator: AND,OR,NOT
// AND (&&): if all of the condn gets true , it will return true

console.log(12>5 && 13>6 && 89>23);

// OR:(||): if any one of the condn gets true, it will return true

console.log(12>13 || 56>34 || 89>100);

// NOT(!): it will reverse the result

console.log(! (46>45));


// assignment operator: =

// +=, -=, *=, /=, %=

let x=12
console.log(x+=10); // x=x+10
// miscellaneous operator
// conditional operator: (ternery operator)
// syn: var = condn? st1 : st2
let c = 67>35 ? 67+10 : 67-10

console.log(c);

// typeof operator: it is used to return the data type of given variable
console.log(typeof(c));




















