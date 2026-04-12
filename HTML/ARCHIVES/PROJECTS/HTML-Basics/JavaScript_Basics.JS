// let and const: let allows you to restrict the scope of variables within the block where they are declared. const allows you to declare constants whose values cannot be changed.

{
    let a = 10
    console.log(a)
    a = 15
    console.log(a)
}
// console.log(a)
const num = 5
console.log(num)
// num = 8
// console.log(num)



// Arrow functions allow you to write shorter function syntax. They also do not have their own this, arguments, super, or new.target. These functions are always anonymous. You cannot use call, apply, or bind on an arrow function.

hello = () =>
{
    return "Hello World!";
}
console.log(hello())



// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

let promiseArgument = (resolve, reject) =>
    setTimeout (() => {
    let currTime = new Date().getTime();
    if(currTime % 2 === 0){
    resolve("Success :)")
    }else{
    reject("Failure :(")}
    }, 
    2000)
    
    let myPromise = new Promise(promiseArgument);
    


// Class is a template or blueprint for creating objects. It encapsulates data for the object.

function Car(name,year)
{
    this.name = name
    this.year = year
    return this;
};
let tesla1 = Car("Tesla Model X", 2019);
// console.log(tesla1);
console.log(tesla1.name);
console.log(tesla1.year);


// Class: Rectangle
function Rectangle(height,width)
{
    this.height = height
    this.width = width
    return this;
}
let myRectangle = new Rectangle(5,10)
console.log(myRectangle)




// Inheritance: A class created with a class inheritance, inherits all the methods from another class. The class inheriting the methods is called the subclass, and the class whose methods are being inherited is called the superclass.

class Square extends Rectangle 
{
    constructor(height,width)
    {
        if(height === width) 
        {
            super(height,width)
        }
        else
        {
        Super(width,width)
        }
    }
}
let mySquare = new Square(5,5)

console.log(mySquare)



// For Loop: A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.

for (let i = 0; i < 17; i++) {
    console.log(i + " - " + i.toString(2));
}



// JavaScript Array: An array is a special variable, which can hold more than one value at a time. If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

let array1 = ["Tesla", "Volvo", "BMW"];



// JavaScript Object: An object is a standalone entity, with properties and type. A property of an object can be explained as a variable that is attached to the object. You have already seen objects. All JavaScript values, except primitives, are objects.

let object1 = {name: "Tesla", year: 2019};



// Check type of a variable:
console.log(typeof array1);
console.log(typeof(object1));
