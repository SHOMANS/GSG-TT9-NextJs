'use strict';
class array {
  constructor() {
    this.getValues = () => {
      return this.arr;
    };
    this.arr = {};
    this.length = 0;
  }
  push(val) {
    this.arr[this.length] = val;
    this.length++;
  }
}
const myArr = new array();
myArr.push('test');
myArr.push('test2');
myArr.push('test3');
console.log(myArr.getValues());
