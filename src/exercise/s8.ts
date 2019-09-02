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

class S8MyMap<T> {
  private map: {[key: string]: T} = {};
  
  setItem(key: string, item: T) {
    this.map[key] = item;
  }
  
  getItem(key: string){
    return this.map[key];
  }
  
  clear(){
    this.map = {};
  }
  printMap(){
    for (let key in this.map) {
      console.log('*** key =  ', key);
      console.log('*** val =  ', this.map[key]);
    }
  }
}

const s8NumberMap = new S8MyMap<number>();
s8NumberMap.setItem('apples', 5);
s8NumberMap.setItem('bananas', 10);
console.log('*******************');
console.log('*** getITem = ',s8NumberMap.getItem('bananas'));
s8NumberMap.printMap();
s8NumberMap.clear();
s8NumberMap.printMap();
console.log('*******************');

const s8StringMap = new S8MyMap<string>();
s8StringMap.setItem('name', "Max");
s8StringMap.setItem('age', "27");
console.log('*******************');
console.log('*** getItem = ',s8StringMap.getItem('age'));;
s8StringMap.printMap();
console.log('*******************');
