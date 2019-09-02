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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var X5Car = /** @class */ (function () {
    function X5Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    X5Car.prototype.honk = function () {
        console.log('Toooooooooot!');
    };
    ;
    X5Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return X5Car;
}());
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
var X5BaseObject = /** @class */ (function () {
    function X5BaseObject(width, length) {
        this.width = 0;
        this.length = 0;
        this.width = width;
        this.length = length;
    }
    return X5BaseObject;
}());
var X5Rectangle = /** @class */ (function (_super) {
    __extends(X5Rectangle, _super);
    function X5Rectangle(width, length) {
        return _super.call(this, width, length) || this;
    }
    X5Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return X5Rectangle;
}(X5BaseObject));
var x5Rec = new X5Rectangle(5, 2);
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
var X5Person = /** @class */ (function () {
    function X5Person() {
        this._firstName = '';
    }
    Object.defineProperty(X5Person.prototype, "firstName", {
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
    ;
    ;
    return X5Person;
}());
var x5Mx = new X5Person();
console.log('*** first name = ', x5Mx.firstName);
x5Mx.firstName = 'Ma';
console.log('*** first name = ', x5Mx.firstName);
x5Mx.firstName = 'Maximilian';
console.log('*** first name = ', x5Mx.firstName);
