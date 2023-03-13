## Async Functions

---

- async functions enable us to write code that runs in the background and does not block the main thread
- when the main thread is blocked a user can not interact with our website for example, because JavaScript is a single-threaded language
  -> so only one thing can happen at a time

---

### Promises:

- a promise is an object that is usually returned by an async function
- the promise object can have the following properties and methods:
- state: can be pending, resolved or rejected
- result
- then(): takes a callback function that will be called when the async function is complete
- catch(): takes a callback function that is called when the async function fails
- finally(): takes a callback function when the async function is called, no matter if successful or not
- you rarely have to create promises yourself, they are almost always created by other async APIs

- example:

```javascript
functionThatReturnsAPromise().then((value) => {
  console.log(value);
});
```

---

### Async Functions and "await"

- use to write asynchronous code that looks synchronous
- use to wait for a Promiso to be resolved
- can be easier to read than the Promise syntax, especially when multiple async operations depend on each other
- async functions always return a promise

---

### Handling error:

- try/catch blocks:
- catch() method can be used to handle errors.
- example:

```javascript
async function myAsyncFunction() {
  try {
    const value = await functionThatReturnsAPromise();
    console.log(value);
  } catch (error) {
    console.error(error);
  }
}
```

- first the App will try to execute the try block and if an error is thrown the catch block will be executed instead
- catch has access to the error that was thrown
- examples:

```javascript
async function myAsyncFunction() {
  try {
    const value = await functionThatReturnsAPromise();
    console.log(value);
  } catch (error) {
    console.error(error);
  }
}

//and

async function functionThatThrowsAnError() {
  throw new Error("ooops 🫣");
}

async function myAsyncFunction() {
  try {
    const value = await functionThatThrowsAnError();
    // The following code will never be executed because
    // `functionThatThrowsAnError()` throws an error.
    // The execution will jump to the `catch` block.
    console.log(value);
    const value2 = await functionThatReturnsAPromise2();
    console.log(value2);
  } catch (error) {
    console.error(error);
  }
}
```

- additionally you can use a "finally" block after any try block, after the try block is resolved, regardless of whether it was successful or not:

```javascript
async function myAsyncFunction() {
  try {
    const value = await functionThatReturnsAPromise();
    console.log(value);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("done");
  }
}
```

- try/catch/(finally) can be used with any JavaScript code that might throw an error

---

### Parallel Promises

- use Promise.all() if you have multiple async operations that you want to run in parallel
- example:

```javascript
async function myAsyncFunction() {
  try {
    const values = await Promise.all([
      functionThatReturnsAPromise1(),
      functionThatReturnsAPromise2(),
      functionThatReturnsAPromise3(),
    ]);
    console.log(values); // [value1, value2, value3]
  } catch (error) {
    console.error(error);
  }
}
```

- extras:
- Promise.AllSettled(): no matter if rejected or resolved
- Promise.any(): resolves once the first Promise is reoslved
- why use them? advanced use cases where you might want to control when to resolve or reject a Promise

---

- example async browser APIs that return a Promise:
- fetch(): HTTP request, returns a Promise that resolves a Response object
- element.animate().finished: resolves when an elements animation is complete
- navigator.getBattery(): gets current battery leve and returns a Promise that resolve with the battery level

---

- Example for fetching in vanilla js:

```javascript
async function fetchData() {
  const response = await fetch("URL");
  const data = await response.json();
}

fetchData();
```
