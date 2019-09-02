// simple generic 
console.log('*** simple generic ***');
function s8Echo(data: any) {
  return data;
}

console.log('*** s8Echo ', s8Echo('b9'));
console.log('*** s8Echo ', s8Echo(22));
console.log('*** s8Echo ', s8Echo({name: 'b9', age: 32}));

// better generic
console.log('*** better generic ***');
function s8BetterEcho<T>(data: T) {
  return data;
}

console.log('*** s8BetterEcho ', s8BetterEcho('b9').length);
console.log('*** s8BetterEcho ', s8BetterEcho<number>(55));
console.log('*** s8BetterEcho ', s8BetterEcho({name: 'b9', age: 32}));

// built-in generics
console.log('*** built-in generics ***');
const s8TestResults: Array<number> = [1.94, 2.33];
s8TestResults.push(-2);
console.log('*** test results = ', s8TestResults);

// arrays
console.log('*** arrays ***');

function s8PrintAll<T>(args: T[]) {
  args.forEach((element) => console.log('*** element = ', element));
};

s8PrintAll<string>(['apple', 'banana']);

// generic types
console.log('*** generic types *** ');
const s8Echo2: <T> (data: T) => T = s8Echo;
console.log('*** s8Echo2<string>(\'Something\') = ', s8Echo2<string>('Something'));

// generic class
console.log('*** generic class *** ');
class S8SimpleMath<T extends  number | string, U extends number | string>{
  baseValue: T;
  multiplyValue: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const s8SimpleMath = new S8SimpleMath<string, number>();
s8SimpleMath.baseValue = '10';
s8SimpleMath.multiplyValue = 20;
console.log('*** simpleMath.calculate =  ', s8SimpleMath.calculate());

