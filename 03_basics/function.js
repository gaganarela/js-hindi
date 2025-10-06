function chai(){
    console.log("hello");
}

const fun1=function(){
    console.log("hello");
}

const fun2=(name)=>{ //arrow function
    console.log(`hello ${name}`);
}

const fun3 =(num1,num2)=>(num1+num2)  // implicit return

(function addtwo(num1,num2){   //immediately invoked function expression(IIFE)
                                //global scope ki problems se bachne ke liye use krte hain IIFE
    return num1+num2
})(3,4); //neccessary to put semicolons at the last 

((num1,num2)=>{
    console.log(num1+num2)
})(3,4);
