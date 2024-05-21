// UYGA VAZIFA

// 1)

// const raqamlar = "34567"
//   .split("")
//   .reverse()
//   .map((item) => {
//     return Number(item);
//   });

// console.log(raqamlar);

// 2)

// if (2 == "2") {
//   console.log("True");
// } else console.log("False");
// Bunda faqat qiymatlarni tekshiradi.

// if (2 === "2") {
//   console.log("True");
// } else console.log("False");
// Bunda malumot turi qiymati hammasini tekshiradi.

// 3)

// let son = 9;
// let result = [];

// function recursionFunc() {
//   result.unshift(son);
//   son--;
//   if (1 <= son) {
//     recursionFunc();
//   }

//   return result;
// }

// console.log(recursionFunc(son));

// 4)

// const raqamlar = [1, 4, 5, 7, 8];

// let odds = raqamlar
//   .filter((raqam) => raqam % 2 == 1)
//   .reduce((acc, curVAl) => {
//     acc += curVAl;
//     return acc;
//   });
// let evens = raqamlar
//   .filter((raqam) => raqam % 2 == 0)
//   .reduce((acc, curVAl) => {
//     acc += curVAl;
//     return acc;
//   });

// console.log([odds, evens]);

// 5)

// const words =
//   "Lorem ipsum dolor sit amet consectetu!r adipisicing elit. Molestias itaque est enim sin!t accusamustemporibus aliq!uid deleniti delectus tem!pore error modi alia!s offi!ciis blanditi!is, magnam eosimpedit beatae architecto aut.";
// words.split("!").join("");

// console.log(words);

// 6)

// function connecting(arr1, arr2) {
//   return [].concat(arr1, arr2).reduce((acc, curVal) => {
//     acc += curVal;
//     return acc;
//   });
// }

// console.log(connecting([1, 2, 3], [4, 5, 6]));

// 7)

// function makeString(str) {
//   let word = str.split("");
//   word.pop();
//   word.shift();
//   return word.join("");
// }

// console.log(makeString("Ozodbek"));

// 8)

// let array = [2, 3, 6, 7];
// let arrBracket = [];

// function reverse(arr) {
//   for (let i = array.length - 1; i >= 0; i--) {
//     arrBracket.push(array[i]);
//   }
//   console.log(arrBracket);
// }

// reverse();

// 9)

// const raqamlar = `3720`;

// function ifLastZero(zero) {
//   let newRaqam = raqamlar.slice(length, length - 1);
//   console.log(newRaqam);
// }

// ifLastZero();

// 10)

// let arr = [3, 2, 5];

// const min = Math.min(...arr) ** 4;

// console.log(min);
