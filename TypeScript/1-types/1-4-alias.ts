{
  /*
  Type Aliases
  */

  type Text = string;
  const name: Text = 'chance';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'chance',
    age: 12,
  }

  /**
   * String Literal Types
   */
  type Name = 'name'
  let chanceName: Name;
  chanceName = 'name';

  type JSON = 'json'
  const json: JSON = 'json'
}