"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {s6mPI, calculateCircumference} from  './s6-math/circle';
var Circle = require("./s6-math/circle");
var rectangle_1 = require("./s6-math/rectangle");
console.log('*** PI = ', Circle.s6mPI);
console.log('*** calculateCircumference = ', Circle.calculateCircumference(10));
console.log('*** calculateRectangle =  ', rectangle_1.default(15, 12));
