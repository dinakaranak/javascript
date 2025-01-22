// String : 


let s = "Java Script" // primitive String data type

let st = new String("hello") // string obj ; it is not recommended, because it will take more time and memory

// console.log(st)

// console.log(s.at(-2))
// console.log(s.charAt(-2));
// console.log(s.indexOf("S"));
// console.log(s.includes("z"));
// console.log(s.concat(" is a programming language"));
// console.log(s.concat(" ",st));
// console.log(s.length);  // property
// console.log(s.indexOf("a"));

// console.log(s.lastIndexOf("a"));
// console.log(s.startsWith("Java"));
// console.log(s.endsWith("t"));
// console.log(s.match("a"));
// console.log(s.split(" "));
// console.log(s.slice(0,6)); // ending index is excluded
// console.log(s.padEnd(15,"*"));
// console.log(s.padStart(16,"#"));
// console.log(st.repeat(3));
// console.log(s.replace("Java","Type"));
console.log(st.search("e"));
// console.log(st.toUpperCase());
// console.log(st.toLowerCase());
console.log(s.trim());


// convert the given string into uppercase
// count the vowels in the given string
// check whether the given string is palindrom or not
// replace the word in the string

//convert the given string into uppercase

let firstName = "convert the given string into uppercase";
console.log(firstName.toUpperCase());

//count the vowels in the given string

let count=0;
let vowels=['a','e','i','o','u']
let str="dinakaran"
for(let i=0; i<str.length;i++){
    for(let j=0; j<vowels.length;j++){
        if(str[i]===vowels[j]){
            count++;
        }
    } 
}
console.log(count);



















