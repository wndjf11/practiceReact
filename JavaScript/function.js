function changeName(obj) {
  obj.name = "coder";
}

const chance = { name: "chance" };
changeName(chance);
console.log(chance);

// 3. Default parameters ( added in ES6 )
function showMessage(message, from = `unknown`) {
  console.log(`${message} by ${from}`);
}
showMessage(`hi`);

// 4. Rest parameters (add in ES6)
function printAll(...args) {
  for (let i = 0; i < arguments.length; i++) {
    console.log(args[i]);
  }
}
printAll("dream", "coding", "chance");

// 5. Local scope

let globalMessage = "global";

function printMessage() {
  let message = "hello";
  console.log(message);
  console.log(globalMessage);
}
printMessage();

// 6. return a value

function sum(a, b) {
  return a + b;
}

const result = sum(1, 2);
console.log(`sum : ${sum(1, 2)}`);

// Callback function
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love U") {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log("yes!");
};
const printNo = function print() {
  console.log("no!");
  // print();
};

randomQuiz("wrong", printYes, printNo);

// Arrow function
const simplePrint = () => console.log("simplePrint!");


(function hello(){
    console.log('IIFE');
})();