{
  // Array
  const fruits: string[] = ['🍎', '🍌'] //추천
  const scores: Array<number> = [1, 3, 4];
  // readonly = 읽기만 (string[])
  function printArray(fruits: readonly string[]) {
    // fruits.push('a');
  }

  // Tuple -> interface,type alias, class
  let student: [string, number];
  student = ['name', 123];
  console.log(student[0]);//name
  console.log(student[1]);//123
  const [name, age] = student;

  
}