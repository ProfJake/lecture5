/*
slicing.js
Jake Levy
Sept 2020

Demonstrating some of the ways to decompose a buffer of sectioned
data.  Internet data (tcp/ip, udp, etc) packets are a good example
of this. 

slice and subarray have the same behavior. Start is inclusive, end is
exclusive.

https://www.techrepublic.com/article/exploring-the-anatomy-of-a-data-packet/
 */
//When decomposing complex binary data with a common, known structure
//you will want to grap specific pieces of it. Slicing is a common
// method.
var str = "This is section 1.This is section 2.";//Section size:18


let myBuff = Buffer.from(str, 'utf8');
let buff1 = myBuff.slice(0,18);
let buff2 = myBuff.subarray(18, 37);
console.log(buff1.toString());
console.log(buff2.toString());
