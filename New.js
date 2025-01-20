    let result = 1;
    let n= 6;
    for (let i = 2; i <= n; i++){
        result *= i;  
    }
    console.log(result);
    const characters=result.toString().split("");
    let sum = 0;

for (let i = 0; i < characters.length; i++) {
    sum += parseInt(characters[i], 10); 
}
console.log(sum);  