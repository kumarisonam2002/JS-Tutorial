// complete lecture 1  and lecture 2 by shradha khapra
// complete lecture 3 and lecture 4 by shradha khapra

// function myFunction() {
//     console.log("Welcome to Apna College!");
//     console.log("We are learning JS :)");
// }

// myFunction();
// myFunction();

// function myFunction(msg, n) {
//     console.log(msg*n);
// }

// myFunction("I Love JS", 100);


// function sum(x,y) {
//     console.log(x + y);
// }

// sum(4, 5);


// function sum(x, y) {
//     s = x + y;
//     return s;
// }

// let val = sum(3,4);
// console.log(val);


// function sum(x, y) {
//     s = x + y;
//     console.log("before return");
//     return s;
//     console.log("after return");
// }

// let val = sum(3,4);
// console.log(val);

// function sum(x, y) {
//     s = x + y;
//     console.log("before return");
//     return s;
// }

// let val = sum(3,4);
// console.log(x);
// console.log(val);

// function sum(a, b) {
//     return a+b;
// }

// const arrowSum = (a,b) => {
//     console.log(a+b);
// };


// function mul(a,b) {
//     return a*b;
// }

// let  arrowMul = (a,b) => {
//     return a*b;
// };


// const printHello = () => {
//      console.log("hello");
// }


// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if(
//             char === "a" || 
//             char === "e" || 
//             char === "i" || 
//             char === "o" || 
//             char === "u") {
//             count++;
//         }
//     }
//     console.log(count);

// }


function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if(
            char === "a" || 
            char === "e" || 
            char === "i" || 
            char === "o" || 
            char === "u"
        ) {
            count++;
        }
    }
    return count;

}

const countVow = (str) => {
   let count = 0;
   for (const char of str) {
    if(
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
    ) {
        count++;
    }
   }
   return count;
}