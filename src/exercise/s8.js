/*
Module Exercise: Problem
Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.

Let's keep it simple and only add the following methods to the Map:

setItem(key: string, item: T) // should create a new key-value pair

getItem(key: string) // should retrieve the value of the provided key
clear() // should remove all key-value pairs
printMap() // should output key-value pairs
The map should be usable like shown below:

const s8NumberMap = new MyMap<number>();
s8NumberMap.setItem('apples', 5);
s8NumberMap.setItem('bananas', 10);
s8NumberMap.printMap();

const s8StringMap = new MyMap<string>();
s8StringMap.setItem('name', "Max");
s8StringMap.setItem('age', "27");
s8StringMap.printMap();

* */
var S8MyMap = /** @class */ (function () {
    function S8MyMap() {
        this.map = {};
    }
    S8MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    S8MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    S8MyMap.prototype.clear = function () {
        this.map = {};
    };
    S8MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log('*** key =  ', key);
            console.log('*** val =  ', this.map[key]);
        }
    };
    return S8MyMap;
}());
var s8NumberMap = new S8MyMap();
s8NumberMap.setItem('apples', 5);
s8NumberMap.setItem('bananas', 10);
console.log('*******************');
console.log('*** getITem = ', s8NumberMap.getItem('bananas'));
s8NumberMap.printMap();
s8NumberMap.clear();
s8NumberMap.printMap();
console.log('*******************');
var s8StringMap = new S8MyMap();
s8StringMap.setItem('name', "Max");
s8StringMap.setItem('age', "27");
console.log('*******************');
console.log('*** getItem = ', s8StringMap.getItem('age'));
;
s8StringMap.printMap();
console.log('*******************');
