// let i: number = 0;
// i = 1;
// i = 10;
// i = '';
// i = false;

// let myStr: string = '';

// myStr = 1;
// myStr = 'test';
// myStr = false;

// let myBool: boolean = false;
// myBool = true;
// myBool = 1;
// myBool = 0;
// myBool = 'test';

// let myArr: string[] = [];

// myArr = ['test', '1'];
// myArr = [1, 2, 3, 4, 5];
// myArr = [1, 'test', true];
// myArr = [[[[[['test']]]]]];

// let myNumArr: number[] = [];

// myNumArr = [1, 2, 3, 4, 5];
// myNumArr = [1, 'test', true];

// let myTuple: [number, string, boolean] = [1, 'test', false];
// myTuple = ['test', 1];
// myTuple = [1, 1];
// myTuple = [1, 'test2', true];

// let myObj: { name: string; age: number } = {
//   name: '',
//   age: 1,
// };

// myObj = {
//   title: '',
// };

// myObj = {
//   name: 'test',
//   age: 1,
// };

// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------

/**
 * string
 * number
 * boolean
 * []
 * {}
 * type
 * interface
 * optional
 * enum
 * any
 * undefined
 * null
 * function (arrow and reg, return type, params)
 * inheritance
 * generics
 * casting
 */

// ----------------------------------------------------------------------------------------------------

// type myLevelsType = 'first' | 'second' | 'third';

// type jobObj = {
//   title: string;
//   years: number;
//   salary?: number;
//   currency?: string;
//   level?: myLevelsType;
// };

// type myObjectType = {
//   name: string;
//   age: number;
//   jobs?: jobObj[];
//   levels?: myLevelsType;
// };

// const myObj1: myObjectType = {
//   name: 'test',
//   age: 1,
//   levels: 'second',
//   jobs: [
//     {
//       title: 'job1',
//       years: 2,
//       level: 'third',
//     },
//     {
//       title: 'job2',
//       years: 2,
//       salary: 2000,
//       currency: 'USD',
//     },
//   ],
// };
// const myObj2: myObjectType = {
//   name: 'test',
//   age: 1,
//   // title: '',
// };
// const myObj3: myObjectType = {
//   name: 'test',
//   age: 1,
// };

// ----------------------------------------------------------------------------------------------------
// function myFunc1(): void {
//   // return 'test';
// }
// function myFunc2(): string {
//   return 'test';
// }
// function myFunc3(x: number, y: number): number {
//   return x + y;
// }

// myFunc1();

// // myFunc3(2, +'4');
// const myArrowFunc = (): void => {
//   // return 'test';
// };

// const myArrowFunc1: Function = (
//   param1: myLevelsType,
//   param2: myLevelsType
// ): boolean => {
//   return param1 === param2;
// };

// myArrowFunc1('first', 'second');

// ----------------------------------------------------------------------------------------------------

// const myObjFunction = (obj: myObjectType): string => {
//   return obj.name;
// };

// myObjFunction({
//   age: 10,
//   name: 'Saja',
//   levels: 'second',
//   jobs: [
//     {
//       title: '',
//       years: 1,
//       level: 'third',
//     },
//     {
//       title: '',
//       years: 435,
//       salary: 1000,
//       currency: 'USD',
//     },
//   ],
// });

// ----------------------------------------------------------------------------------------------------

// interface IJobObj {
//   title: string;
//   years: number;
//   salary?: number;
//   currency?: string;
//   level?: myLevelsType;
// }

// interface IExternal {
//   test?: string;
//   func: (x: string, y: number, z: myLevelsType) => string;
// }

// interface IMyObjectType extends IExternal {
//   name: string;
//   age: number;
//   jobs?: jobObj[];
//   levels?: myLevelsType;
// }

// const myTestObj: IMyObjectType = {
//   name: '',
//   age: 0,
//   func: (x: string, y: number | undefined, z: myLevelsType): string => {
//     return x + y + z;
//   },
// };

// myTestObj.func('', undefined, 'first');

// ------------------------------------------------------------------------

// enum weekDays {
//   sunday = 'sunday',
//   monday = 'monday',
//   tuesday = 'tuesday',
//   wednesday = 'wednesday',
//   thursday = 'thursday',
//   friday = 'friday',
//   saturday = 'saturday',
// }

// const myDay: weekDays = weekDays.sunday;

// ------------------------------------------------------------------------
// const anyType: any = '';
// ------------------------------------------------------------------------

class array<T> {
  private arr: { [key: number]: T };
  private length: number;

  constructor() {
    this.arr = {};
    this.length = 0;
  }

  public push(val: T): void {
    this.arr[this.length] = val;
    this.length++;
  }

  public getValues = () => {
    return this.arr;
  };
}

const myArr = new array<string>();

myArr.push('test');
myArr.push('test2');
myArr.push('test3');
console.log(myArr.getValues());

const myArr2 = new array<number>();

myArr2.push(1);
myArr2.push(2);
myArr2.push(3);
console.log(myArr2.getValues());

// ------------------------------------------------------------------------
