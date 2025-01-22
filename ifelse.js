// conditional statements: 
// simple if://it allow the program to check the condition
// syntax: if(condn){// block of codes}

if(104>12){
    console.log("10 is big");
    
}


// if else: //it allow the program to check the condn. if the condn is true the code inside the if block code is executed
//otherwise if the condition is false, the code inside the else block of code is executed.
// if(condn){// codings}
// else{//codings}

if(12>114){
    console.log("if block is executed");
    
}
else{
    console.log("else block is executed");
    
}

let a={}
// undefined, null, 0, "" => false
if(a){
    console.log("if is exeuted");
    
}
else{
    console.log("else is executed");
    
}

if(120%7==0){
    console.log("yes");
    
}
else{
    console.log("no");
    
}


// check the given no is odd or even
// check the given year is leap or non leap
// check the voting eligibility
// compare 2 nos and print which is small 

// odd or even
let i = 90
if(i % 2 == 0){
    console.log("This is even number");
}
else{
    console.log("This is odd number");
    
}


//leap or non leap

let iod = 2005

if(iod % 4 == 0 && iod%100!==0 || iod%400==0 ) {
    console.log("this is leap year");
}
else{
    console.log("this is not leap year");
    
}

//checking the voting eligibility

let age = 51
if(age>=18){
    console.log(" eligible for vote");
}
else{
    console.log(" not eligible for vote");
    
}


//compare 2 nos and print which is small

let x = 20
let y = 10
if(x<y){
    console.log("x is small");
    
}
else{
    console.log("y is small");
    
}


// if else if: it allows the program to check multiple condition sequentially, if the condition is true, the code inside 
// the if block code is executed and if the condition is false, then else if check the next condition, the process continues
//until a true condition is found. all the none of condn is true,the else block is executed  
// syn : if(condn){// codings}
// else if(condn){ // codings}
// else {// codings}

let n="dfdfd"

if(n>0){
    console.log("it is positive no")
    
}
else if(n<0){
    console.log("it is negative");
    
}
else if(n==0){
    console.log("zero");
    
}
else{
    console.log("invalid");
    
}

// grade calculator mark>90 =A, 80-90 =B, 70-80 = c, 60-70=d, <60 ="e"
// age categorization ; age<5 = babies, <10 = childre, adult
// get 4 nos and print which is the biggest no


//grade calculator

let m=99

if (m>=90 && m>100==0){
    console.log("A+ Grade"); 
} 
else if(m<90 && m>=80  ){
    console.log("A Grade");
    
}
else if(m<80 && m>=70){
    console.log("B Grade");
    
}
else if(m<70 && m>=50){
    console.log("C Grade");
    
}
else if(m<50){
    console.log("Fail");
    
}
else{
    console.log("Invalid");
    
}


//Age Categoriation

let mani=80
if (mani<=5){
    console.log("Babies");
}

else if(mani>5 && mani<=13){
    console.log("children");   
}

else if(mani>13 && mani<=19){
    console.log("teenager");    
}
else if(mani>19 && mani<=34){
    console.log("Adult");
}

else if(mani>34 && mani<=55){
    console.log("Middle Age-Adult");
}

else if(mani>55 && mani<=100){
    console.log("senior-Citizen");
}

else {
    console.log("Invalid Age");
    
}


//get 4 nos and print which is biggest number

let ab=8950
let ac=5980
let ad=4780
let ae=9560

if(ab>ac && ab>ad && ab>ae){
    console.log("ab is biggest number");
}

else if (ac>ab && ac>ad && ac>ae){
    console.log("ac is biggest number");
}

else if(ad>ab && ad>ac && ad>ae){
    console.log("ad is biggest number");
}

else if(ae>ab && ae>ac && ae>ad){
    console.log("ae is biggest number");
}
else{
    console.log("invalid number");
    
}

// bmi calculator