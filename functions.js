// function : it is a set of code to perform some operations. we can reuse this codes

function sample(){
    console.log("hello");
    
}

sample()
sample()

// functions with parameters

function add(a,b){
    let c = a+b
    console.log(c);
    
}

add(6,2)
add(67,3)

// function expression //

let sampleExpression = function(){
    console.log("function expression");
    
}

sampleExpression()
console.log( typeof sampleExpression);

// arrow function

let arrowfn = () => {
    console.log("arrow function");
    
}
arrowfn()

// function with return

function sum(...a){  // rest parameter or operator: converts the individual values into an array
  console.log(a);
  

    return 
}

let x = sum(2,3,34)

console.log(sum(10,23));

// spread operator(...): converts array values in to individual values

let arr = [1,23,45]
console.log(...arr);


function factorial(n){

    let f= 1
    for(let i=1;i<=n;i++){
        f*=i
    }

    console.log(f);
    return f
    
}

console.log(factorial(5));


// call back functions: a fn passed as aparameter to ano














