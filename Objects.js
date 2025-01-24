// Objects: collection of properties. Property exist as key value pair.
// key should be unique. value can be any data type
let user = {
    name:"Dhinakaran",  // properties
    mail: "dhinakaran@gmail.com",
    mob:9876543210,
    age:18,
    lan_known: ["Tamil","English","hindi"],
    is_active: true,
    address: {
        dno:5,
        street:"first street",
        area:"cbe",
        pin:678432    
    },

    login:function(){  // method  : a function defined for a object.
        console.log("login successfull", `welcome ${this.name}`);
        
    }



    
}

console.log(user);
console.log(user.mail);

user.mail = "dhina@gmail.com"

console.log(user);

user.gender = "male"
console.log(user);

delete user.mob
console.log(user);

user.login()


let user1 = new Object({
    name:"test",
    age:19
})

console.log(user1);

console.log(Object.keys(user));
console.log(Object.values(user1));
console.log(Object.entries(user1));
console.log(Object.hasOwn(user1, "mail"));   









