{
  // // JavaScript💩
  // function jsADD(num1, num2) {
  //   return num1 + num2;
  // }

  // // TypeScript
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // function jsFetchNum(id: string): Promise<number> {
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Steve', 'Jobs');
  printName('Ellie');

  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  console.log(addNumber(1, 2));
  console.log(addNumber(1, 2, 3, 4));
  console.log(addNumber(1, 2, 3, 4, 5, 0));

  function addNumber(...num1: number[]): number {
    // let result = 0;
    // for (let i = 0; i < num1.length; i++) {
    //   result += num1[i];
    // }
    // return result;\
    return num1.reduce((a, b) => a + b);
  }
}