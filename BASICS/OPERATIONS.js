//Operations
// NEGATIVE VALUE
let  a=13;
let b=-a;
console.log(b);

//ADDITION
let c=5;
let d=10;
console.log(c+d);
//SUBTRACTION
console.log(c-d);
//MULTILPICATION
console.log(c*d);
//DIVISION
console.log(c/d);
//MODULUS
console.log(c%d);
//EXPONENTIATION
console.log(c**d);
//INCREMENT
let e=5;
console.log(++e);
//DECREMENT
console.log(--e);
//COMPARISON
let f=10;
let g=20;
console.log(f==g); //equal
console.log(f!=g); //not equal
console.log(f>g); //greater than
console.log(f<g); //less than
console.log(f>=g); //greater than or equal to
console.log(f<=g); //less than or equal to
//LOGICAL OPERATORS
console.log("Logical Operators");
let h=true;
let i=false;
console.log(h && i); //AND
console.log(h || i); //OR
console.log(!h); //NOT

//BITWISE OPERATORS
console.log("Bitwise Operators");
let j=5; // 0101 in binary
let k=3; // 0011 in binary
console.log(j & k); // AND
console.log(j | k); // OR
console.log(j ^ k); // XOR
console.log(~j); // NOT
console.log(j << 1); // Left Shift
console.log(j >> 1); // Right Shift

//ASSIGNMENT OPERATORS
console.log("Assignment Operators");
let l=10;
l += 5; // l = l + 5
console.log(l);
l -= 3; // l = l - 3
console.log(l);
l *= 2; // l = l * 2
console.log(l);
l /= 4; // l = l / 4
console.log(l);
l %= 3; // l = l % 3
console.log(l);
l **= 2; // l = l ** 2
console.log(l);
l <<= 1; // l = l << 1
console.log(l);
l >>= 1; // l = l >> 1
console.log(l);
l &= 2; // l = l & 2
console.log(l);
l |= 1; // l = l | 1
console.log(l);
l ^= 3; // l = l ^ 3
console.log(l);         

//TERNARY OPERATOR
console.log("Ternary Operator");
let m=10;
let n=20;
let result = (m > n) ? "m is greater" : "n is greater";
console.log(result);