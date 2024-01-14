"use strict";
function printLength(input) {
    if (typeof input === "string") {
        // Inside this block, 'input' is narrowed to type 'string'
        console.log(`Length of string: ${input.length}`);
    }
    else {
        // Inside this block, 'input' is narrowed to type 'number'
        console.log(`Value of number: ${input}`);
    }
}
printLength("Hello, TypeScript!");
printLength(42);
// // type guards with typeof
// // typeof variable === string/number/boolean/symbol/undefined/object/function
// const printAllTodos = (todos: string[] | null) => {
//     if (typeof todos === 'object') {
//       todos.map((todo) => console.log(todo));
//     } else {
//       console.log('todos are empty');
//     }
//   };
// truthiness narrowing 
// false -> 0,NaN,"" (the empty string), 0n (the bigint version of zero), null, undefined
// const printAllTodos = (todos: string[] | null) => {
//     if (todos) {
//       todos.map((todo) => console.log(todo));
//     } else {
//       console.log('todos are empty');
//     }
//   };
//   const todos1 = null;
//   const todos2 = ['todo1', 'todo2', 'todo3'];
//   printAllTodos(todos1);
//   printAllTodos(todos2);
