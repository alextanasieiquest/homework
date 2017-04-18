// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }

// let greeter = new Greeter("world");

// let button = document.createElement('button');
// button.textContent = "Say Hello";
// button.onclick = function() {
//     alert(greeter.greet());
// }

// document.body.appendChild(button);
// <>=!^~-
interface ResultDTOO {
    operator: string;
    value: string;
    except?: Array<string>;
    from?: string;
    to?: string;
}
const operatorsArr = [
    { operator: ">=", name: "gteq" },
    { operator: "<=", name: "lteq" },
    { operator: "<", name: "lt" },
    { operator: ">", name: "gt" },
    { operator: "=", name: "eq" },
    { operator: "!", name: "except" },
    { operator: "^", name: "caret" },
    { operator: "~", name: "tilde" },
    { operator: "-", name: "range" },
    { operator: undefined, name: "none"}
];
const input = ">=foobar!bar";

function processInput(input: string): Object {
		let processedInput = input;
		let operatorPos, formattedObj = {}, k=0;
    operatorsArr.forEach((operatorObj) => {
        operatorPos = processedInput.indexOf(operatorObj.operator);
        if(operatorPos == 0) {
        	processedInput = input.slice(operatorPos + operatorObj.operator.length);
          k++;
          return formattedObj = {
          	"operator": operatorObj.name,
            "value": processedInput
          }
          //formattedObj = createObject(operatorObj, objValue)
        }
        else if (operatorPos !== -1) {
        	if(k){
          	//processedInput = processedInput.slice(operatorPos + operatorObj.operator.length);
          	formattedObj["except"] = processedInput.substr(operatorPos+1);
            formattedObj["value"] = processedInput.slice(0, operatorPos);
          }
        }
    });
    return formattedObj;
}

//function createObject(op, objValue): Object {
//  return {
 // 	op.name
  //  objValue
//  }
//}

console.log(processInput(input));

// import * as ResultDTO from "./interfaces";

// export default class MainClass{
//     name: string;
//     constructor (name: string) {
//         this.name = name;
//     }
//     public partz(): void{
//         console.log(this.name);
//     }
// }

// class pantzuc{
//     mainClass = new MainClass("gigi");
//     public doSmth(): void {
//         this.mainClass.partz();
//     }
// }

// Input
// Result
// >foo
// { operator: 'gt', value: 'foo' }
// ^bar
// { operator: 'caret', value: 'bar' }
// ~baz
// { operator: 'tilde', value: 'baz' }
// foo-bar
// { operator: 'range', from: 'foo', to: 'bar' }
// >=foo
// { operator: 'gteq', value: 'foo' }
// <=foo
// { operator: 'lteq', value: 'foo' }
// <foo
// { operator: 'lt', value: 'foo' }
// bar
// { operator: 'eq', value: 'bar' }
// =foo
// { operator: 'eq', value: 'bar' }
// foo!bar
// { operator: 'eq', value: 'foo', except: ['bar'] }
// >foo!bar
// { operator: 'gt', value: 'foo', except: ['bar'] }
// !foo
// { operator: 'any', except: ['foo'] }
// (undefined)
// { operator: 'none' }

// Hint: foo, bar, … represent arbitrary strings / characters that are not a valid operator (<>=!^~-) or special (reserved) symbols (&|%$#?,{}[]).
