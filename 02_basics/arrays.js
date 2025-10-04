const myarr=[0,1,2,3,4,5]
// myarr.push(6)
// const myarr2= new Array(1,3,4,5,6)
// myarr.push(7)
// myarr.unshift(9) //used to add elements at the front
// console.log(myarr)
// myarr.shift()//used to remove element in front
// myarr.pop()// used to remove element at the last
// console.log(myarr)
// console.log(myarr.indexOf(4));//used to print index
// console.log(myarr.includes(234));

// const str=myarr.join()//typeof(str) is string now
// console.log(str);

// console.log('A',myarr);
// const myn1=myarr.slice(1,3)  // slice original array me kuchh nhi krta
// console.log(myn1);
// console.log('B',myarr);
// const myn2=myarr.splice(1,3) //splice original array ko manipulate kr deta hai
// console.log(myn2)
// console.log('C',myarr)

/*slice se start to end-1 aata hai aur splice se start to end poora*/
const myarr2=["gagan","ram","shyam"]
// myarr.push(myarr2)
// const x=myarr.concat(myarr2)//concat require to copy all data in another array
// const myarr3=["adsd","aadfgtr","fshgjh","fgdjgh"]
// const x= [...myarr,...myarr2,...myarr3]
// console.log(x);
const anotherArray=[1,2,3,[4,5,6,[7]],[8,[9]]]
const otherArray=anotherArray.flat(2) //2 represent that flat upto 2 levels
console.log(otherArray);
console.log(Array.isArray("gagan"));
console.log(Array.from("gagan"))//used to form array
console.log(Array.from({name:"gagan"}));//we have to tell whether array of keys of values
const score1=100
const score2=200
const score3=300
console.log(Array.of(score1,score2,score3))




