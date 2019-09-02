/// <reference path='s6-circleMath.ts' />
/// <reference path='s6-rectangleMath.ts' />

import CircleMath = MyMath.Circle;

const PI = 2;

console.log('*** calc rect = ', MyMath.calculateRectangle(15, 17));
console.log('*** calc rect = ', MyMath.Circle.calculateCircumference(3));
console.log('*** calc Circum = ', CircleMath.calculateCircumference(5));
// console.log('*** PI = ', MyMath.PI); // need export 'variable' for work it
console.log('*** PI = ', PI);

// namespaces and multiple files
