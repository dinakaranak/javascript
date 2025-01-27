// Declare the string and find out the largest word in the string


//
let stringLetter="This is like a Container but Storing the value "
let words = stringLetter.split(" "); 
    let largestWord = "";

    for (let word of words) {
        if (word.length > largestWord.length) {
            largestWord = word;
        }
    }
    
    console.log(largestWord);


//find out the second largest word


let str = "This is like a Container but Storing the value " ;
let wrds = str.split(" "); 
let sortedWords = wrds.sort((a, b) => b.length - a.length); 
let secondLargestWord = wrds[1]
console.log(secondLargestWord);

//check the palindrome for number
let palin= 9746726;
let pal=palin.toString()

console.log(pal.split("").reverse().join(""));

//multiple 3 means enter fizz
for(let i=1; i<=30; i++){
    if(i%3==0 && i%5==0){
        console.log("fizz buzz");
    }
    else if(i%3==0){
        console.log("fizz");
    }
    else if(i%5==0){
        console.log("buzz");
    }
    else{
        console.log(i);
        
    }
    
}

