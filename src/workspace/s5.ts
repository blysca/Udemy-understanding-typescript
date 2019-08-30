class Person {
  name: string;
  protected age: number = 44;
  private type: string;
  
  constructor(
    name: string,
    public username: string
  ) {
    this.name = name;
  }
  
  printAge() {
    console.log('*** person age = ', this.age);
  }
  
  private setType(type: string) {
    this.type = type;
    console.log('*** person type = ', this.type);
  }
}

const person = new Person('bububu', 'BUBUBU');
console.log('*** person ', person);
person.printAge();
//person.setType('hell '); // Won'this.work with private method;

// Inheritance
class Max extends Person {
  // name = 'Max';
  
  constructor(username: string) {
    super('Max', username);
    this.age = 34;
    // console.log('*** type ', this.type);
  }}

const max = new Max('mini max');
console.log('*** max ', max);

// Getters & Setters

class Plant {
  private _species: string = 'Default';
  
  get species() {
    return this._species;
  }
  
  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = 'Default';
    }
  }
}

let plant = new Plant();

console.log('*** get ', plant.species);
plant.species = 'AB';
console.log('*** get ', plant.species);
plant.species = 'Green Plant';
console.log('*** get ', plant.species);

// Static Properties & Methods
class Helpers {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log('*** 2 * PI ', 2 * Helpers.PI);
console.log('*** diameter ', Helpers.calcCircumference(8));

// Abstract Classes
abstract class Project {
  projectName: string = 'Default';
  budget: number = 1000;
  
  abstract changeName(name: string):void;
  
  calcBudget():number {
    return this.budget *2;
  }
}

class ITProject extends Project {
   changeName(name: string): void {
     this.projectName = name;
   }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);

// private constructor
class OnlyOne {
  private static instance: OnlyOne;
  
  private constructor(public  name: string){}
  
  static  getInstance() {
    if (!OnlyOne.instance) {
        OnlyOne.instance = new OnlyOne('The Only One');
    }
    return OnlyOne.instance;
  }
}

let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();

console.log('*** right.name ', right.name);
right.name = 'Something else';
