let date = '2024-12-23'
let currentDate = new Date()
console.log(currentDate);

let newDate = new Date(date)

console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());  // 0-11
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(newDate.getTime());
console.log(newDate.setDate(15));
console.log(newDate);
console.log(currentDate.toDateString());
console.log(currentDate.toTimeString());
console.log(currentDate.getDay());


// formate the current Date and time
// compare 2 dates and print which is latest date
// difference b/w 2 dates
// age calculator

// formate the current Date and time

function objectDate(){
let dateObj = new Date();
let formattedDateTime = dateObj.toLocaleString();
console.log(formattedDateTime);
}
objectDate()



//compare 2 dates and print which is latest date

function compareToDate(){
  
    let date1 = new Date("2024-02-25")
    let date2= new Date("2023-09-26")
    if(date1>date2){
        console.log(date1.toLocaleDateString() ,'is the latest date');
    }
    else if(date1<date2){
        console.log(date2.toLocaleDateString(),'is the latest date');    
    }
    else{
        console.log("both are equal");
        
    }
}

compareToDate()

// difference b/w 2 dates
function diffBtwn(){
let date1 = new Date('2025-01-24');
let date2 = new Date('2024-01-28');
let diffMs = date1 - date2;
let diffSeconds = Math.floor(diffMs / 1000);
let diffMinutes = Math.floor(diffSeconds / 60);
let diffHours = Math.floor(diffMinutes / 60);
let diffDays = Math.floor(diffHours / 24);
console.log(diffDays,"Days");
}
diffBtwn()

// age calculator
function ageCalc(){
  
    let birthDate=new Date("2004-01-21")
    let currentDate=new Date()
    let age=currentDate.getFullYear()-birthDate.getFullYear();
    let month=currentDate.getMonth()-birthDate.getMonth();
    let day=currentDate.getDate()-birthDate.getDate()
    if(month<0 || (month===0 && day<0)){ 
        age--;
    }
    
    console.log(age,"age");                                                                                                                                                                                                            
}  
ageCalc()



