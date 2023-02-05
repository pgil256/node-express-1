### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

  You can use: event handlers to execute codes at the appropriate time, callbacks to embed functions within another function, promises to manage unfulfilled values, and async/await to facilitate promise-based codes.

- What is a Promise?

  An undesignated value that is treated like a designated value that allows you to run asynchronous code without blocking its execution.

- What are the differences between an async function and a regular function?

  Regular functions occur within a localized scope. Async functions allow interaction with databases and other peripheral activities through the use of Promises.

- What is the difference between Node.js and Express.js?

  Node is a Javascript backend framework. Express is a version of node that sacrifices bandwidth for efficiency.

- What is the error-first callback pattern?

  Error first programming is what framworks like Node use to handle anticipated errors in callbacks/asynchronous code. 

- What is middleware?

  Middleware is the software that allows applications to interface with databases and enables the transfer of data.

- What does the `next` function do?

  "next()" is an asynchronous command which callsback to the next appropriate middleware.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```


   1. Not embedding them within a promise will slow code execustion.
   2. The list of variables should be defined prior to the return statement. 
   3. The route names should coinicide more uniformly with the variable names.