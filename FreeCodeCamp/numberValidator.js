let str1 = '555-555-5555';
let str2 = '(555)555-5555';
let str3 = '(555) 555-5555';
let str4 = '555 555 5555';
let str5 = '1 555 555 5555';
let str6 = '5555555555';
let str6_1 = '1 555-555-5555';
let str6_2 = '1(555)555-5555';

let str7 = '("2 (757) 622-7382")';
let str8 = '("0 (757) 622-7382")';
let str9 = '("-1 (757) 622-7382")';
let str10 = '("10 (757) 622-7382")';
let str11 = '("27576227382")';
let str12 = '("2(757)622-7382")';
let str13= '("(555-555-5555"';
let str14 = '("(6054756961)")';
let str15 = '555)-555-5555';

function telephoneCheck(str) {

  let reg1 = /^(1 )?\d{3}-\d{3}-\d{4}/;
  let reg2 = /^1?\(\d{3}\)\d{3}-\d{4}/;
  // for str3, str4, str5
  let reg3 = /^(1 )?\(?\d{3}\)? \d{3}(-| )\d{4}/;
  let reg6 = /^\d{10}$/;

  /*
    // console.log(`>> Regex is ${reg1}`);
    console.log(`${str1} is valid: ${reg1.test(str1)}`);
    // console.log(`>> Regex is ${reg2}`);
    console.log(`${str2} is valid: ${reg2.test(str2)}`);
    // console.log(`>> Regex is ${reg3}`);
    console.log(`${str3} is valid: ${reg3.test(str3)}`);
    console.log(`${str4} is valid: ${reg3.test(str4)}`);
    console.log(`${str5} is valid: ${reg3.test(str5)}`);
    // console.log(`>> Regex is ${reg6}`);
    console.log(`${str6} is valid: ${reg6.test(str6)}`);
  */

  if (reg1.test(str) || reg2.test(str) || reg3.test(str) || reg6.test(str))
    return true;
  return false;
}

// console.log(`${str1} is valid = ${telephoneCheck(str1)}`);
console.log(`${str1} is valid = ${telephoneCheck(str1)}`);
console.log(`${str2} is valid = ${telephoneCheck(str2)}`);
console.log(`${str3} is valid = ${telephoneCheck(str3)}`);
console.log(`${str4} is valid = ${telephoneCheck(str4)}`);
console.log(`${str5} is valid = ${telephoneCheck(str5)}`);
console.log(`${str6} is valid = ${telephoneCheck(str6)}`);
console.log(`${str6_1} is valid = ${telephoneCheck(str6_1)}`);
console.log(`${str6_2} is valid = ${telephoneCheck(str6_2)}`);


console.log(`${str7} is NOT valid = ${!telephoneCheck(str7)}`);
console.log(`${str8} is NOT valid = ${!telephoneCheck(str8)}`);
console.log(`${str9} is NOT valid = ${!telephoneCheck(str9)}`);
console.log(`${str10} is NOT valid = ${!telephoneCheck(str10)}`);
console.log(`${str11} is NOT valid = ${!telephoneCheck(str11)}`);
console.log(`${str12} is NOT valid = ${!telephoneCheck(str12)}`);
console.log(`${str13} is NOT valid = ${!telephoneCheck(str13)}`);
console.log(`${str14} is NOT valid = ${!telephoneCheck(str14)}`);
console.log(`${str15} is NOT valid = ${!telephoneCheck(str15)}`);

