// simple generic 
console.log('*** simple generic ***');
function s8Echo(data) {
    return data;
}
console.log('*** s8Echo ', s8Echo('b9'));
console.log('*** s8Echo ', s8Echo(22));
console.log('*** s8Echo ', s8Echo({ name: 'b9', age: 32 }));
// better generic
console.log('*** better generic ***');
function s8BetterEcho(data) {
    return data;
}
console.log('*** s8BetterEcho ', s8BetterEcho('b9').length);
console.log('*** s8BetterEcho ', s8BetterEcho(55));
console.log('*** s8BetterEcho ', s8BetterEcho({ name: 'b9', age: 32 }));
// built-in generics
console.log('*** built-in generics ***');
var s8TestResults = [1.94, 2.33];
s8TestResults.push(-2);
console.log('*** test results = ', s8TestResults);
// arrays
console.log('*** arrays ***');
function s8PrintAll(args) {
    args.forEach(function (element) { return console.log('*** element = ', element); });
}
;
s8PrintAll(['apple', 'banana']);
// generic types
console.log('*** generic types *** ');
var s8Echo2 = s8Echo;
console.log('*** s8Echo2<string>(\'Something\') = ', s8Echo2('Something'));
// generic class
console.log('*** generic class *** ');
var S8SimpleMath = /** @class */ (function () {
    function S8SimpleMath() {
    }
    S8SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return S8SimpleMath;
}());
var s8SimpleMath = new S8SimpleMath();
s8SimpleMath.baseValue = '10';
s8SimpleMath.multiplyValue = 20;
console.log('*** simpleMath.calculate =  ', s8SimpleMath.calculate());
