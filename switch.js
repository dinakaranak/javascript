// switch :  // switch statement to select one of many code blocks to be executed.
//the switch statement evaluates an expression. The value of the expression is 
// then compared with the values of each case block.
//  If there is a match, the understanding  block of code is executed.
// no match is found the default case is executed.

// syn: switch(var){ 
// case 1: // codings; break;//the break  out of the switch block of code
// case 2: // codings ; break;
// default : // codings; break;}

let day =1

switch(day){
    case 1: console.log("Sunday");
    break;

    case 2: console.log("Monday");
    break;

    default : console.log("invalid value");
    break;
    
    
    
}


// print the seasons of month 
// check the given char is vowel or not
// arithmatic calculator


//season of month
let month="February"

switch(month){
    case "january": console.log("Pre-winter");
    break;
    case "February": console.log("Winter");
    break;
    case "March": console.log("Spring");
    break;
    case "April": console.log("Spring");
    break;
    case "May": console.log("Spring");
    break;
    case "June": console.log("Summer");
    break;
    case "July": console.log("Summer");
    break;
    case "August": console.log("Summer");
    break;
    case "September": console.log("Autumn");
    break;
    case "October": console.log("Autumn");
    break;
    case "November": console.log("Autumn");
    break;
    case "December": console.log("winter");
    break;
    default : console.log("invalid month");
    break;

}

let charact = 'm'

switch(charact){
    case 'a': console.log("This is vowels");
    break;
    case 'e': console.log("This is vowels");
    break;
    case 'i': console.log("This is vowels");
    break;
    case 'o': console.log("This is vowels");
    break;
    case 'u': console.log("This is vowels");
    break;

    default : console.log("This is constant");
    break;

}

//arithmatic calculator

let number1=670
let number2=60
let total = "%" 
switch(total){
    case '+': 
    console.log(number1+number2); 
    break;
    case '-': 
    console.log(number1-number2); 
    break;
    case '*': 
    console.log(number1*number2); 
    break;
    case '/': 
    console.log(number1/number2); 
    break;
    case '%': 
    console.log(number1%number2); 
    break;

    default : console.log('invalid number');
    break;
    
}


//bmi calculator

let height = 1.80
let weight = 45
calculate = weight/(height*height);
// console.log(calculate);
if(calculate<=18.5){
    console.log("underweighted");
}
else if(calculate<=25 && calculate>18.5){
    console.log("Normal");
}
else if(calculate>25 && calculate<=30) {
    console.log("Overweighted");   
}
else{
    console.log("Obesity");
    
}
