function s7Greet(persone) {
    console.log('*** Hello, ', persone.firstName);
}
function s7ChangeName(persone) {
    s7Person.firstName = 'Anna-Banana';
}
var s7Person = {
    firstName: 'Max',
    // age: 23
    hobbies: ['coocking', 'sports'],
    greet: function (lastName) {
        console.log('*** Hi, I am ' + this.firstName + ' ' + lastName);
    }
};
/*s7Greet({
  firstName: 'Max',
  age: 23
});*/
s7ChangeName(s7Person);
s7Greet(s7Person);
s7Person.greet('Anything');
var S7Person = /** @class */ (function () {
    function S7Person() {
    }
    S7Person.prototype.greet = function (lastName) {
        console.log('*** Hi, I am ' + this.firstName + ' ' + lastName);
    };
    return S7Person;
}());
var s7MyPerson = new S7Person();
s7MyPerson.firstName = 'Abraham';
s7MyPerson.lastName = 'August';
s7Greet(s7MyPerson);
s7MyPerson.greet(s7MyPerson.lastName);
var s7MyDoubleFunction;
s7MyDoubleFunction = function (num1, num2) {
    return (num1 + num2) * 2;
};
console.log('*** s7MyDoubleFunction = ', s7MyDoubleFunction(10, 20));
var s7OldPerson = {
    age: 23,
    firstName: 'August',
    greet: function (lastName) {
        console.log('*** Hi, I am ' + this.firstName);
    }
};
console.log('*** old persone ', s7OldPerson);
