//singleton object
//Object.create  //constructor method
const mySym=Symbol("mykey")
const myObj={
    name:"sawan",
    reg:20243223,
    "last name" :"sharma",
    clg:"ISM",
    [mySym]:"myKey1",
    email:"sawan@ggl.com"
}

console.log(myObj);
console.log(myObj["last name"]);
console.log(myObj["name"]);
console.log(myObj.reg);
console.log(myObj[mySym]);

myObj.email="sawan@flipkart.com"
// Object.freeze(myObj)  //freeze any changes further
myObj.email="sawan@microsoft.com" //will not bring any effect
console.log(myObj.email);

myObj.greeting = function(){
    console.log("hello JS user");
}
myObj.greetingTwo = function(){
    console.log(`hello JS user,${this.name}`);
}
myObj.greeting();
console.log(myObj.greetingTwo());




