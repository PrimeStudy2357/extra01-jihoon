const myNumber: number = 1;
const myString: string = "string";
const myBool: boolean = true;

const myObj: {
  name: string;
  age: number;
} = {
  name: "Jihoon",
  age: 30,
};

type MyType = {
  name: string;
  age: number;
};

const myObj2: MyType = {
  name: "asdfjklasdf",
  age: 123492315,
};

type MyFlag = "OK" | "NOT GOOD";

const flag: MyFlag = "NOT GOOD";

interface MyInterface {
  name: string;
  age: number;
}

const myChar: MyInterface = {
  name: "Ahri",
  age: 500,
};

function doSomething(person: MyInterface): number {
  return person.age;
}

const badObj = {
  name: "asfj",
  hobby: "nothing",
};

doSomething(myChar);

function genericFunc<T>(value: T) {
  return value;
}

genericFunc<MyInterface>(myChar);
