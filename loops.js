// // loops:
// // 1.while loop (definite loop)
// // syntax: while(condn){//coding; inc or dec;}
// let i=false
// let j=1
// while( ! i){

//     if(j==5){
//         i=true
//     }
// console.log("hello",i,j);

//  j++
// }


// // print the n natural nos in reverse
// // print list of odd nos with in a limit
// // factorial
// // factors of given no

// //n natural nos in reverse
// // let n=20
// // while(n<=20 && n>0){
    
// //     console.log(n);
// //     n--
    
// // }

//print list of odd nos with in a limit

// let k=4
// while( k<50){
//     if(k%2 !==0){
//         console.log(k);     
//     }
   
// k++
// }

// //factorial

// let m=1
// let d=5
// while(d>0){
//    m*=d
//    d--
// }
// console.log(m)



//     // factors


// let f=1
// let fact=12
// while(f<=fact){
//     if(fact%f==0){
//         console.log(f);   
//     }  
//     f++
// }







// // do while: definite loop
// // do{//codings}while(condn)

// // let num =10

// // do{
// //     console.log(num);
// //     num++
    
// // }while(num<5)


//     //n natural number is reverse

//     // let rev=20
//     // do{
//     //     console.log(rev);
//     //     rev--;
//     // }
//     // while(rev<=20 && rev>0)

//     //print list of odd num with in a limit

//     let od=1
//     do{
        
//             if(od%2!==0){
//                 console.log(od,"odd in dowhile");
              
//             }
//             od++
            
//         }while(od<50)
       

   
// // for loop: indefinite loop
// // syn: for(initialization;condn;in or dec){
// // codings }


// // for(let i=0;i<5;i++){
// //     console.log(i);
    
// // }

// //n natural number is reverse

// for(let reverse=20; reverse>0; reverse--){
//     console.log(reverse);
// }

// //print list of odd nos with in a limit

// for(let li=5; li<50; li++){
//     if(li%2 !==0){
//     console.log(li);}
    
// }

// //factorial
// let fac=1
// for(let factor=5; factor>0; factor--){
//         fac*=factor;
// }
// console.log(fac);


//factors
let factors=6
for(let facto=1; facto<=factors; facto++){
    if(factors%facto ==0){
        console.log(facto,"factors in for");
    }
}

// multiplication table
// prime or non prime
// fibonacci series

//multiplication table
let tab=5
for(let table=1; table<=10; table++){
    result=table*tab;
    console.log(table,"x",tab,"=",result);
    
}

//prime or non prime number
let num=14;
let nu,flag=0;
let isPrime = true
{

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          isPrime=false
             
        }
    }

    if(isPrime){

   console.log("prime");
    }
    else{
        console.log("not a prime no");
        
    }
    
} 


//fibonacci

let n1 = 0;
let n2 = 1;
let n; 

console.log(n1); 
console.log(n2); 

for (let i = 2; i < 10; i++) { 
    n = n1 + n2; 
    console.log(n); 
    n1 = n2; 
    n2 = n; 
}




    // for (let i = 1; i <= number; i++) {
    //     console.log(n1);
    //     nextTerm = n1 + n2;
    //     n1 = n2;
    //     n2 = nextTerm;
    // }
// nested loops:


for(let i=0; i<=3;i++){
    for(let j=0;j<3;j++){
        console.log(i,j);
    }
}


// list of prime nos
// list of multiplication table





