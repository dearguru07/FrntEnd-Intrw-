// console.log("Heloo world.....");

let name = {
  firstName: "Guru",
  lastName: "Charan",
};
let printFullName = function (homeTown, state) {
  console.log(
    this.firstName + this.lastName + " " + "from" + " " + homeTown + " " + state
  );
};

printFullName.call(name, "banglore", "Karnataka");

let name2 = {
  firstName: "Virat",
  lastName: "Kohli",
};
// // function borrowing-------

printFullName.call(name2, "chittoor", "Andra pradesh");

// // apply----

// printFullName.apply(name2,['chittoor', 'Andra pradesh'])

// // bind------

// let printName=printFullName.bind(name2,'mumbai','maharastra')
// printName()

// -----------revision---------------

// let name={
//     firstName:'guru',
//     lastName:'charan'
// }
// let printFullName=function(homeTown,state){
// console.log(this.firstName+" "+this.lastName+" "+homeTown+state);
// }
// printFullName.call(name,'chittoor', "AP")

// let name2={
//     firstName:'gowtham',
//     lastName:'gambher'
// }
// printFullName.call(name2,'kolkata',"KKR")
// printFullName.apply(name2,['kolkata',"KKR"])
// let solu=printFullName.bind(name2,'kolkata',"KKR")
// solu()

// Polyfills--------(EP-02)

// let name={
//     firstName:'Guru',
//     lastName:'charan'
// }
// let funnName=function(){
//     console.log(this.firstName+" "+ this.lastName);
// }
// let printFullName=funnName.bind(name)
// printFullName()

// function carrying-----(EP-03)

// Unravel the concept of Currying, a technique to transform a function with multiple
// arguments into a sequence of nested functions, simplifying function composition and parameter handling.

//z

// let multiplyByTwo = multiply.bind(this, 4,2);
// multiplyByTwo(7);

// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(7);

// using Closures------

// let multiply=function(x){
//     return function(y){
//         console.log(x*y);
//     }
// }

// let multiplyByTwo=multiply(2)
// multiplyByTwo(4)

// let multiplyByThree=multiply(3)
// multiplyByThree(4)

// Debounceing--------(Ep-04)

async function getData() {
    return 'Hello world'
}
let data=getData()
let sol=data.then((res)=> res.data)
// console.log(data)
console.log(sol)