console.log('It works!');
let myName = 'b9';
let myAge = 22;
let hasHobbies = false;
// hasHobbies = 1;
// array
let hobbies: any[] = ['coocking', 'sports'];
hobbies = [100];

// tuples
let address: [string, number] = ['some street', 33];

// enum
enum Color {
  Gray,
  Green,
  Blue
}

let myColor: Color = Color.Green;

console.log('*** myColor ', myColor);

// functions
function sayHello(): void {
  console.log('*** Hello! ');
}

console.log('*** my name = ', sayHello());


// argument types
function multiply(val1: number, val2: number): number {
  return val1 * val2;
}


console.log('*** multiply ', multiply(3, myAge));
console.log('*** multiply ', multiply(3, 8));

// function types 
let myMultiply: (val1: number, val2: number) => number;


/*
myMultiply = sayHello;
myMultiply();
*/
myMultiply = multiply;
console.log('*** myMultiply ', myMultiply(5, 5));

let userData: { name: string, age: number } = {
  name: 'b9',
  age: 23
};

/*
userData = {
  a: 'hi',
  b: 23
};
*/

let coplex: Complex = {
  data: [23, 32, 33],
  
  output: function (all: boolean): number[] {
    return this.data;
  }
};

// type alias
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [23, 32, 33],
  
  output: function (all: boolean): number[] {
    return this.data;
  }
};

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = '27';

let finalValue = 'A string';
if (typeof finalValue == 'number') {
  console.log('*** final value is a number ');
}

// never
function neverReturns(): never {
  throw new Error('An error!');
}

// Nullable Types
let canBeNull: number | null = 22;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
