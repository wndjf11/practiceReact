//  String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

// Increment Decrement operators

let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement : ${preIncrement} counter : ${counter}`);

counter = 2;
const postIncrement = counter++;
console.log(`postIncrement : ${postIncrement} counter : ${counter}`);

counter = 2;
const preDecrement = --counter;
console.log(`preDecrement : ${preDecrement} counter : ${counter}`);

counter = 2;
const postDecrement = counter--;
console.log(`postDecrement : ${postDecrement} counter : ${counter}`);

// Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// logical operators : || , && , !

const value1 = true;
const value2 = 4 < 2;

// ||
// 앞쪽에 true가 있으면 멈춘다! 심플한 단위를 앞쪽으로 헤비한건 뒤쪽으로
console.log(`or : ${value1 || value2 || check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log("🤐");
    }
    return true;
}

// &&
console.log(`or : ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log("🤐");
    }
    return true;
}

//  !
console.log("!value1 : ", !value1);

// Equality

const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log("loose equality");
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality no type conversion
console.log("strict equality");
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const chance1 = { name: "chance" };
const chance2 = { name: "chance" };
const chance3 = chance1;

console.log("chance1 == chance2", chance1 == chance2);
console.log("chance1 === chance2", chance1 === chance2);
console.log("chance1 === chance3", chance1 === chance3);

// Conditional operators : if / else if / else

const name = "chance";
// const name = "coder";
// const name = "wi";
if (name === "chance") {
    console.log("Welcome, Chance");
} else if (name === "coder") {
    console.log("U R amazing coder");
} else {
    console.log("Unknown");
}

// Ternary operator
// condition ? value1 : value2

console.log(name === "chance" ? "yes" : "no");

// Switch statement
// use for multiple if checks
// use for enum-like value check
// use for mulitple type checks in TS

const browser = "IE";
switch (browser) {
    case "IE":
        console.log("go away!");
        break;
    case "Chrome":
    case "Firefox":
        console.log("love you!");
        break;
    default:
        console.log("same all!");
        break;
}

// Loops

// while loop, while the condition is truthy,
// body code is executed

let i = 3;
while (i > 0) {
    console.log(`while : ${i}`);
    i--;
}

// do while loop, body code is excuted first,
// then check the condition.

do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for : ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for : ${i}`);
}

// nested loop
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i : ${i}, j : ${j}`);
    }
}
// break / continue
for (let i = 0; i < 11; i++) {
    if (i % 2 != 0) {
        continue;
    }
    console.log(`continue for : ${i}`);
}

for (let i = 0; i < 11; i++) {
    if (i == 8) {
        break;
    }
    console.log(`break for : ${i}`);
}