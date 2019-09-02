// Exercise 1
/*
// Exercise 1 - How was your TypeScript Class?
function Car(name) {
    this.name = name;
    this.acceleration = 0;
 
    this.honk = function() {
        console.log('Toooooooooot!');
    };
 
    this.accelerate = function(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
var car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
* */

class X5Car {
  name: string;
  acceleration: number;
  
  constructor(name: string) {
    this.name = name;
    this.acceleration = 0;
  }
  
  honk() {
    console.log('Toooooooooot!');
  };
  
  accelerate(speed:number) {
    this.acceleration = this.acceleration + speed;
  }
}

var car = new X5Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
/*
var baseObject = {
  width: 0,
  length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
  return this.width * this.length;
};
console.log(rectangle.calcSize());
*/

class X5BaseObject {
  width: number = 0;
  length: number = 0;
  
  constructor(width: number, length: number) {
    this.width = width;
    this.length = length;
  }
}

class X5Rectangle extends X5BaseObject {
  constructor(width: number, length: number) {
    super(width, length);
  }
  
  calcSize() {
    return this.width * this.length;
  }
}

let x5Rec =  new X5Rectangle(5,2);

console.log('*** calc ', x5Rec.calcSize());

/*
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var person = {
    _firstName: ''
};
Object.defineProperty(person, 'firstName', {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = '';
        }
    },
    enumerable: true,
    configurable: true
});
console.log(person.firstName);
person.firstName = 'Ma';
console.log(person.firstName);
person.firstName = 'Maximilian';
console.log(person.firstName);
* */


class X5Person {
  private _firstName: string = '';
  get firstName () {
    return this._firstName;
  };
  set firstName(value:string) {
    if (value.length > 3) {
      this._firstName = value;
    }
    else {
      this._firstName = '';
    }
  };
}

let x5Mx = new X5Person();
console.log('*** first name = ', x5Mx.firstName);
x5Mx.firstName = 'Ma';
console.log('*** first name = ', x5Mx.firstName);
x5Mx.firstName = 'Maximilian';
console.log('*** first name = ', x5Mx.firstName);
