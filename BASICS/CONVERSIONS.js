let score=45;
//It is a number
console.log("Score is :"+score);

//Converting to String
let Stt=String(score);
console.log(typeof Stt);
console.log(Stt);

// Conertig to Boolean
let a=Boolean(score);
console.log(typeof a);
console.log(a);

//Converting to number
let b= Number(Stt);
console.log(typeof b);
console.log(b);

//Converting to BigIInt
let c=BigInt(score);
console.log(typeof c);
console.log(c);

// Conberting to symbol
let d=Symbol("UNIQUE");
console.log(typeof d);
console.log(d);

//Converting to object
let e=Object(score);
console.log(typeof e);
console.log(e);

//Converting to Array
let f=Array(score);
console.log(typeof f);
console.log(f);

