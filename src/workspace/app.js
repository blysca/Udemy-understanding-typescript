console.log('It works!');
var myName = 'b9';
var myAge = 22;
var hasHobbies = false;
// hasHobbies = 1;
// array
var hobbies = ['coocking', 'sports'];
hobbies = [100];
// tuples
var address = ['some street', 33];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log('*** myColor ', myColor);
// functions
function sayHello() {
    console.log('*** Hello! ');
}
console.log('*** my name = ', sayHello());
// argument types
function multiply(val1, val2) {
    return val1 * val2;
}
console.log('*** multiply ', multiply(3, myAge));
console.log('*** multiply ', multiply(3, 8));
// function types 
var myMultiply;
/*
myMultiply = sayHello;
myMultiply();
*/
myMultiply = multiply;
console.log('*** myMultiply ', myMultiply(5, 5));
var userData = {
    name: 'b9',
    age: 23
};
/*
userData = {
  a: 'hi',
  b: 23
};
*/
var coplex = {
    data: [23, 32, 33],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [23, 32, 33],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = '27';
var finalValue = 'A string';
if (typeof finalValue == 'number') {
    console.log('*** final value is a number ');
}
// never
function neverReturns() {
    throw new Error('An error!');
}
// Nullable Types
var canBeNull = 22;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
