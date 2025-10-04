let date=new Date(); //Date is an object
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.toString());

// let createdDate=new Date("2025-03-01")
// console.log(createdDate.toDateString());
// let createDate=new Date("05-02-2025")
// console.log(createDate.toDateString());
let createDate=new Date(2025,0,12,05,03) 
console.log(createDate.toLocaleString());

let dateNow=Date.now() //milisecond value stored in string from 1970 to till now
console.log(dateNow);

console.log(createDate.toLocaleString('default', { //formatting the format 
  weekday: 'long',
   year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
}));
console.log(createDate.toLocaleString());





