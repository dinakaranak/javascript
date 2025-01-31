//5.	Create a program to find the sum of digits of a factorial of a number

function sumOfDigits(n){
    let result=1;
    for(let i=1; i<=n; i++){
        result*=i;  
    }
    let fact=result;
    let sum=0;
    while(fact!==0){
        sum+=fact % 10;
        fact = Math.floor(fact /10);
    }
    console.log(sum);

}
sumOfDigits(8)


//4.	Write a program to find the common elements between two arrays

function commonElements(){
    let arr1=[23,25,45,54,55,43,66,76,89]
    let arr2=[54,56,46,66,21,76,78,29,55]
    let arr=[]
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] ) {
               arr.push(arr1[i])
            }
        }
    }
    console.log(arr);
}
commonElements()


//1.	Create a function to generate a random number within a specified range

function specifiedRange(num){
    let randomNum=Math.floor(Math.random(num)*num);
    console.log(randomNum);
}
specifiedRange(40)

//2.  Implement a function to find the maximum product of two integers in an array.

function maxProduct(){
    let array=[2,7,4,5]
    array.sort((a, b) => a - b);
    let n = array.length;
    let resu=Math.max(array[n - 1] * array[n - 2], array[0] * array[1]);
   console.log(resu); 
}
maxProduct()

//3. Create a function to check if a given string is a valid IPv4 address


function isValidIPv4(ip) {
    const pattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return pattern.test(ip);
}
console.log(isValidIPv4("192.168.1.1")); 
console.log(isValidIPv4("256.256.256.256"));  
