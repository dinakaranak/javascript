// regexp : t is used to create a pattern.

// ^- start of the pattern, except
// $ - end of the pattern
// [] - range

// * - 0 or more char
// + - 1 or more
// {n} - exact count
//{n,m} - count b/w n and m
//{n,} - more than n count
// \d - digits only
// \D - non digits
// \w - word char(alphabets, nos)
// \W - non word chars(special chars and punctuational)
// \s - space
// \S - non space
// ? - optional 
// . - single char
// () - grouping
// meta chars - i => incasesensitive ; g- global search; m - new line detaction
// 

let pattern = /^[a-z]*[0-9]{5}(good)?\d+$/i
let input = "ffryrKKKKtyrererrtt342631234"

console.log(pattern.test(input));

let mail = /\w+@[a-z]+\.[a-z]{2,5}/ig

// console.log(mail.test("sample123@gmail.com"));
let mail_id = "this is my sample@gmail.com, example@gmail.com"
let sen = "sdbfsd  jsdhjsd kjdsaf ajsds ajsdsd ajshfjsd"

console.log(mail.exec(mail_id));
console.log(mail_id.match(mail));
console.log(sen.match(mail));




// url validation, mob no validation, age vaidation, 
// extract url and date from the input


//url validation

let url=/^\w+\W+\w+\.\w+\.\w+\W\w+$/ig
let url_id="https://www.google.com/something678789"
console.log(url.test(url_id));


//mob no validation 
let mob=/^\+\d{1,2}\s\d{1,3}\s\d{1,3}\s\d{1,4}$/
let mob_no="+1 443 342 7847"
console.log(mob.test(mob_no));


//age validation

let age=/^[0-9]+$/
let age_no=20
console.log(age.test(age_no));

//password

let pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let password="inaF212004@"
console.log(pass.test(password));


//extract url

let urlName=/\w+\W+\w+\.\w+\.\w+\W\w+/ig
let url_idName="this is my https://www.google.com/something678789, https://www.github.com/dinakaranak"
console.log(urlName.exec(url_idName));
console.log(url_idName.match(urlName));



