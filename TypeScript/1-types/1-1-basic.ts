{// number
  let test1: number;
  const test2: number = -1;

  // string
  let str1: string;
  // str1=1;
  str1 = '1';
  const str: string = 'hello';

  // boolean
  let boal1: boolean;
  // boal1='true'
  boal1 = true;
  const boal: boolean = false;

  // undefined
  let name1: undefined;
  let age: number | undefined;
  age = undefined;
  age = 1;

  // null π©
  let person: null;
  person = null;
  let person2: string | null;

  // unknown π©
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any π©
  let anything: any = 0;
  anything = 'hello';

  // void
  // ν¨μμμ μλ¬΄κ²λ returnνμ§ μμΌλ©΄
  function print(): void {
    console.log('hello');
    return
  }
  let unusable: void = undefined; //π©

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    // while (true) { }
  }

  // object
  let obj: object; //π©
  function acceptSomeObject(obj: object) {

  }
  acceptSomeObject({ name: 'chance' });
  acceptSomeObject({ animal: 'dog' })
}