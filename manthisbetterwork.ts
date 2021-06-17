console.log('this files serves no purpose');
console.log('other then folling the the linguist');

console.log('linguist sucks this project is in ts not html ')
let r = Math.random().toString(36).substring(7);
console.log("random", r);

let ra = Math.random().toString(36).substring(7);
console.log("random", ra);

class KeyValuePair<T,U>
{ 
    private key: T;
    private val: U;

    setKeyValue(key: T, val: U): void { 
        this.key = key;
        this.val = val;
    }

    display():void { 
        console.log(`Key = ${this.key}, val = ${this.val}`);
    }
}

let kvp1 = new KeyValuePair<number, string>();
kvp1.setKeyValue(1, "Steve");
kvp1.display(); //Output: Key = 1, Val = Steve 

let kvp2 = new KeyValuePair<string, string>();
kvp2.setKeyValue("CEO", "Bill"); 
kvp2.display(); //Output: Key = CEO, Val = Bill

interface IKeyValueProcessor<T, U>
{
    process(key: T, val: U): void;
};

class kvProcessor<T, U> implements IKeyValueProcessor<T, U>
{ 
    process(key:T, val:U):void { 
        console.log(`Key = ${key}, val = ${val}`);
    }
}

let proc: IKeyValueProcessor<number, string> = new kvProcessor();
proc.process(1, 'Bill'); //Output: key = 1, value = Bill 

class Employee {
    readonly empCode: number;
    empName: string;
    
    constructor(code: number, name: string)     {
        this.empCode = code;
        this.empName = name;
    }
}
let emp = new Employee(10, "John");

interface IEmployee {
  empCode: number;
  empName: string;
  getSalary: (number) => number; // arrow function
  getManagerName(number): string;
}


interface IEmployee {
  empCode: number;
  empName: string;
  getSalary: (number) => number; // arrow function
  getManagerName(number): string;
}


interface KeyValueProcessor
{
    (key: number, value: string): void;
};

function addKeyValue(key:number, value:string):void { 
    console.log('addKeyValue: key = ' + key + ', value = ' + value)
}

function updateKeyValue(key: number, value:string):void { 
    console.log('updateKeyValue: key = '+ key + ', value = ' + value)
}
    
let kvp: KeyValueProcessor = addKeyValue;
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 

kvp = updateKeyValue;
kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve 


interface NumList {
  [index: number]: number;
}

let numArr: NumList = [1, 2, 3];
numArr[0];
numArr[1];

interface IStringList {
  [index: string]: string;
}

let strArr: IStringList;
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";

interface IEmployee {
  empCode: number;
  empName: string;
  empDept?: string;
}

for (let i = 0; i < 3; i++) {
  console.log("Block statement execution no." + i);
}
let str = "Hello World";

for (var char of str) {
  console.log(char); // prints chars: H e l l o  W o r l d
};

let arr = [10, 20, 30, 40];

for (var index in arr) {
  console.log(index); // prints indexes: 0, 1, 2, 3

  console.log(arr[index]); // prints elements: 10, 20, 30, 40
}