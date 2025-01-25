// array: collection of values. the values stored based on index.
let arr = [56,89,90,56]
console.log(typeof arr);

let a = new Array(45,8,9)
console.log(a);


console.log(arr.length);  // property
 console.log(arr.at(3));
console.log(arr.concat(a));
console.log(arr.includes(89));
 console.log(arr.indexOf(56));
console.log(arr.lastIndexOf(56));
console.log(arr.slice(0,2));
console.log(arr.push(12));  // it will insert elements at the end of array
console.log(arr.pop()); // it will remove one element frm the end of array
console.log(arr.unshift(23)); // it will insert elements at begining of the array
console.log(arr.shift()); // it removes the first element
console.log(arr.splice(2,1,34,56)); // starting index,delete count, adding elements
 console.log(arr.splice(1,2));
 console.log(arr.splice(2,0,675,89,98));
 console.log(arr.join(" "));
 console.log(arr.reverse())
 console.log(arr.every(i => i>80));
 console.log(arr.some(i => i>80));
 console.log(arr.filter(i => i>80));
 console.log(arr.map(i => i*20));
 arr.forEach(i => {
    console.log(i*2);
    
 })
 console.log(arr.reduce((i,a)=> i+a, 0));
 console.log(arr.reduceRight((i,a) => i+a,0));
 console.log(arr.sort((a,b) => a-b));
 console.log(arr.toString());
console.log(arr);








// filter out the elements which have the letter "i" from given arry
// remove duplicates from an array
// find the count of each chars in a string


function removeDup(){
let originalArr = [23,45,67,23,45,89,12,34]
let resultArr = []

for(let i in originalArr){
    if(resultArr.includes(originalArr[i])){     
        continue;
    }
    else{    
        resultArr.push(originalArr[i])
    }

}
console.log(originalArr);

console.log(resultArr);

}

removeDup()

//filter out the elements which have the letter "i" from given arry


 function arrayFilter(){
    let element=["This","is","a","container"];
    console.log(element.filter(element=>element.includes("i")));   
}
arrayFilter()

// find the count of each chars in a string




// function countEach(){
//     let word=["this is a container"];
//     for (let i of word){
//        console.log(i);
       
//     }

// }
// countEach()
