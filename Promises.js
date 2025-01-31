//promises:A Promise contains both the producing code and calls to the consuming code

let myPromise = new Promise((resolve,reject) =>{
    let success = true

    if(success){
        setTimeout(()=>{
            resolve("success")
        },5000)
        
    }
    else{
        reject("failure")

    }

} )

myPromise.then((msg)=>{
    console.log(msg);
    return "processed data"
    
})
.then((data) =>{
    console.log(data);
    

})
.catch((err) => {
    console.log(err);
    
})

console.log(myPromise);
