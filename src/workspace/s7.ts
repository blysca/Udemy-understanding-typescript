interface IS7NamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any;
  greet(lastName: string): void;
}

function s7Greet(persone: IS7NamedPerson) {
  console.log('*** Hello, ', persone.firstName);
}

function s7ChangeName(persone: IS7NamedPerson) {
  s7Person.firstName = 'Anna-Banana';
}

const s7Person: IS7NamedPerson = {
  firstName: 'Max',
  // age: 23
  hobbies: ['coocking', 'sports'],
  greet(lastName: string) {
    console.log('*** Hi, I am ' + this.firstName +' '+ lastName);
  }
};

/*s7Greet({
  firstName: 'Max',
  age: 23
});*/
s7ChangeName(s7Person);
s7Greet(s7Person);
s7Person.greet('Anything');

class S7Person implements IS7NamedPerson {
  firstName: string;
  lastName: string;
  greet(lastName: string): void {
    console.log('*** Hi, I am ' + this.firstName +' '+ lastName);
  }
}

const s7MyPerson = new S7Person();

s7MyPerson.firstName = 'Abraham';
s7MyPerson.lastName = 'August';
s7Greet(s7MyPerson);
s7MyPerson.greet(s7MyPerson.lastName);


// function types

interface IS7DoubleValueFunc {
  (number1: number, number2: number): number;
}

let s7MyDoubleFunction: IS7DoubleValueFunc;
s7MyDoubleFunction = (num1: number, num2: number) => {
  return (num1 + num2) *2;
};

console.log('*** s7MyDoubleFunction = ', s7MyDoubleFunction(10, 20));

// interface inheritance

interface IS7AgedPerson extends IS7NamedPerson{
  age: number;
}

const s7OldPerson: IS7AgedPerson = {
  age: 23,
  firstName: 'August',
  greet(lastName: string): void {
    console.log('*** Hi, I am ' + this.firstName );
  }
};

console.log('*** old persone ', s7OldPerson);
