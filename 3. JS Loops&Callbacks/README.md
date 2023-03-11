### JS Loops & Callback functions:

---

### JS Loops:

- execute code until an end criteria is met
- while & for loops

---

```javascript
//While:
let string = "a";

while (string.length <= 8) {
  console.log(string);
  string = string + string;
}

//For:
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
```

- For Loop Breakdown:

```javascript
for (initialization; condition; increment / decrement) {
  // code to be executed
}
```

`initialization`: This is where you initialize a variable that will be used in the loop. You can also declare multiple variables separated by commas. This part of the loop is executed only once before the loop begins.

`condition`: This is a boolean expression that is checked before each iteration of the loop. If the condition is true, the loop will continue to execute. If the condition is false, the loop will stop.

`increment/decrement`: This is where you specify how the variable(s) initialized in step 1 should be incremented or decremented with each iteration of the loop.

`code to be executed`: This is the code that will be executed repeatedly as long as the condition specified in step 2 is true.

---

---

### Callback functions:

- a function that is passed as an argument into another function

- Scenarios:
- when an event is triggered
- when the fetched data arrived on your computer
- for each element in an array
- Callback functions are used, whenever the program itself needs to figure out **when** ir **how many times** the function needs to be executed

- example:

```javascript
() => {
  console.log("Inside the callback function.");
};
```

-> outer function: addEventListener()
-> first argument: "click"
second argument: callback function

#### Named Callback Functions:

- any function can be used as a callback function. Just declare a function, pass it to another function.
- example:

```javascript
function sayHello() {
  console.log("Hey Dude!");
}

button.addEventListener("click", sayHello);
```

---

#### Higher order functions

- An example for higher order functions are array methods
- a higher order function is a function that takes a callback function as an argument and calls the callback function inside their body, e.g. the addEventListener method
- a higher order function could also return a function as output instead

- example:

```javascript
// this function calls its callback function 3 times!
function myHigherOrderFunction(callback) {
  callback();
  callback();
  callback();
}
```

- another example + explanation:

```javascript
function repeat(func, num) {
  for (let i = 0; i < num; i++) {
    func(i);
  }
}

function logNumber(num) {
  console.log(num);
}

repeat(logNumber, 5); // prints 0 1 2 3 4
```

In this example, repeat is a higher order function because it takes in another function as an argument (func). It then calls that function multiple times based on the second argument (num). In this case, we're passing in logNumber as the function to be repeated, which simply logs the number passed to it to the console.

So when we call repeat(logNumber, 5), it logs the numbers 0 through 4 to the console because the logNumber function is called 5 times, with each call passing in a different number as the argument.

---

#### Parameters in Callback Functions

- A callback function can accept parameter. The valuues for the parameters are provided by the function, that calls the callback function (the "higher order function").

- example:

```javascript
button.addEventListener("click", (event) => {
  console.log("This button was clicked:", event.target);
});
```
