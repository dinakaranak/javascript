// String : 


let s = "Java Script" // primitive String data type

let st = new String("hello world") // string obj ; it is not recommended, because it will take more time and memory

// console.log(st)

console.log(s.at(5))
console.log(s.charAt(10));
console.log(s.indexOf("i"));
console.log(s.includes("r"));
 console.log(s.concat(" is a programming language"));
 console.log(s.concat(" ",st));
 console.log(s.length);  // property
 console.log(s.indexOf("a"));

 console.log(s.lastIndexOf("a"));
 console.log(s.startsWith("Java"));
 console.log(s.endsWith("t"));
 console.log(s.match("i"));
 console.log(s.split(""));
 console.log(s.slice(0,6)); // ending index is excluded
 console.log(s.padEnd(15,"*"));
 console.log(s.padStart(16,"#"));
 console.log(s.repeat(3));
 console.log(s.replace("Java","Type"));
 console.log(st.search("world"));
 console.log(st.toUpperCase());
console.log(st.toLowerCase());
 console.log(s,st);

console.log(s.trim(""));


// convert the given string into uppercase
// count the vowels in the given string
// check whether the given string is palindrom or not
// replace the word in the string

//convert the given string into uppercase

let firstName = "convert the given string into uppercase";
console.log(firstName.toUpperCase());

// //count the vowels in the given string

let count=0;
let vowels=['a','e','i','o','u']
let str="dinakaran"
for(let i=0; i<str.length;i++){
    for(let j=0; j<vowels.length;j++){
        if (str[i] === vowels[j]) {
            count++;
            break; 
        }
    } 
    
    
}console.log(count);


// let str1="dinakaran"
// console.log(str1.search('o'));

// //check the given string is palindrome or not

let palin = "amma"
let reverse = ''
for(let i=palin.length-1; i>=0; i--){
    reverse+=palin[i];
}
if(reverse === palin){
    console.log(`${reverse}: is palindrome`);
}
else{
    console.log(`${reverse}: is not palindrome`);
    
}



















