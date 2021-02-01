// function doubleIt (num){
//     return num*2;
// }

// const doubleIt = function myFunc(num){
//     return num*2;
// }

const doubleIt = num => num * 2;  //single line arrow function.

const add = (x, y) => x + y;  // two parameter arrow function.

const giveMe5 = () => 5;

const result2 = giveMe5();  //arrow function without parameter.
// console.log(result2);

//multiLine arrow function

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result3 = doMath(7, 2);
console.log(result3);

// const result = add(19, 2);
// console.log(result);