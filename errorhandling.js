// error handling:  using if else we will handle the errors

// exception handling: using try catch block we will handle the errors.


// 
let a =55
let b=0


try{

    if(b==0){
        throw new Error("we cant divided by 0 , pls enter valid no")
    }
    console.log(a/b);

}catch(err){
    console.log(err);
    
}




