## JS Structure

---

### JS Modules

- example:

```javascript
<script type="module" src="./my-module.js"></script>
```

-> modules allow us to organize code in spearate files

- enables us to use export and import statements
- defer not needed anymore then
- can use ending .mjs or .js

#### Exporting using "export" Statements

- we can export variables or functions to make them available in other modules
  -> we can also export them after they have been declared

- examples:

```javascript
export const name = "Alex";
export const age = 26;
export function sayHello() {
  console.log("Hello");
}

//and

const name = "Alex";
const age = 26;
function sayHello() {
  console.log("Hello");
}

export { name, age, sayHello };
```

#### default Exports

- can only have one default export per module
- can be mixed with named exports

---

#### Importing using "import" Statements

- importing named exports needs {}
- importing default exports doesnt need {}
- can be mixed
- can be renamed when imported via the "as" method

- examples:

```javascript
import { name, age } from "./my-module.js";

//and

import myModule from "./my-module.js";

//and mixed

import myModule, { name, age } from "./my-module.js";

//and renaming

import { name as firstName, age as yearsSinceBorn } from "./my-module.js";
```

---

### Structuring JavaScript Code

- utility functions: should be pure, have no side-effect and are usually smaller functions used for a specific task
- shared constants are constants that are used in multiple places in our code
- functions and constants can be grouped and sometimes should
  -> example: math.js could contain different functions that add, substract, multiply and divide
- neuefische recommends that a utils folder is created to put utility function in
- vanilla JS components: neuefische recommends to create a folder for each component, make file and function names uppercase, components function exports should be named after the function it performs
- components can take arguments that are called props or properties a convention
- components should not depend on the outside world and create their own DOM elements
- components should return a single DOM element

---

### Side-effects in Javascript:

- functions / methods that affect some code that is also used by other functions/methods
- example .splice() -> modifies and original array vs .slice() -> creates a new array

---

#### Some structuring examples:

- including composition of advanced components

```javascript
// a button component
export function Button(props) {
  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = props.text;
  return button;
}

//An advanced use case are components that call other components (composition):
import { Button } from "../Button/Button.js";

export function ButtonGroup(props) {
  const buttonGroup = document.createElement("div");
  buttonGroup.classList.add("button-group");
  for (const buttonProps of props.buttons) {
    const button = Button(buttonProps);
    buttonGroup.append(button);
  }
  return buttonGroup;
}

// Here is how these components could be used in another file:
import { ButtonGroup } from "./ButtonGroup/ButtonGroup.js";
import { Button } from "./Button/Button.js";

const myButtonGroup = ButtonGroup({
  buttons: [{ text: "Button 1" }, { text: "Button 2" }, { text: "Button 3" }],
});
document.body.append(myButtonGroup);

const myButton = Button({ text: "Button" });
document.body.append(myButton);
```

---

## Modern JS Syntax

---

#### Destructuring (also part of js Basics)

- remember destructuring: unpacking values from arrays or properties from objects into destinc variables
  -> does not mutate thje original array or object

---

#### Rest and Spread syntax

- both use the "..." syntax but work differently depending on the context
- Rest Syntax allows you to say "put the resti nto this variable" when destructuing or declaring function parameters
- Spread Syntax allows you to say "spread everything inside this variable into here" when declaring array or object literals or calling functions
- examples:

```javascript
// REST:
const greekLetters = ["alpha", "beta", "gamma", "delta"];
const [firstLetter, ...allTheOtherLetters] = greekLetters;
// firstLetter → "alpha"
// allTheOtherLetters → ["beta", "gamma", "delta"]
//or with objects
const coachObject = {
  name: "Sam",
  mood: "great",
  skills: "amazing",
  score: 9999,
};

const { name, score, ...theRestOfTheCoachObject } = coachObject;
// name → "Sam"
// score → 9999
// theRestOfTheCoachObject → { mood: 'great', skills: 'amazing' }
// or with function parameters:
function logLetters(firstLetter, ...moreLetters) {
  console.log("the first letter is", firstLetter);
  console.log("even more letters", moreLetters);
}

logLetters("alpha", "beta", "gamma", "delta");
// logs:
// the first letter is alpha
// even more letters (3) ['beta', 'gamma', 'delta']

// ---------------

// Spread
const greekLetters = ["alpha", "beta", "gamma", "delta"];
const moreGreekLetters = [...greekLetters, "epsilon", "zeta"];
// moreGreekLetters → ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta']
// with two or more arrays into a new one
const redColors = ["crimson", "pink", "purple"];
const blueColors = ["navy", "teal", "sky"];
const mixedColors = [...redColors, ...blueColors];
// mixedColors → ['crimson', 'pink', 'purple', 'navy', 'teal', 'sky']
// with objects
const circle = { radius: 5, shape: "circle" };

const greenCircle = { ...circle, color: "green" };
// greenCircle → { radius: 5, shape: 'circle', color: 'green' }
//order of spread operations matters!
const cats = ["cat", "cat", "cat"];
const dogs = ["dog", "dog", "dog"];

const catsAndDogs = [...cats, ...dogs];
// catsAndDogs → ['cat', 'cat', 'cat', 'dog', 'dog', 'dog']

const dogsAndCats = [...dogs, ...cats];
// dogsAndCats → ['dog', 'dog', 'dog', 'cat', 'cat', 'cat']

const catsBetweenBirds = ["bird", ...cats, "bird"];
// catsBetweenBirds → ['bird', 'cat', 'cat', 'cat', 'bird']
// and
const circle = { radius: 5, shape: "circle" };

const largeCircle = { ...circle, radius: 20 };
// largeCircle → { radius: 20, shape: 'circle' }

const notALargeCircle = { radius: 20, ...circle };
// notALargeCircle → { radius: 5, shape: 'circle' }
// functions
const numbers = [4534, 3411, 2455, 4952];
const smallestNumber = Math.min(...numbers);
// smallestNumber → 2455
```

---

### Advanced syntax methods:

- ?. optional chaining operator, similar to . chaining operator, except instead of throwing an error if a reference is nullish, it short-circuits with a value of undefined
  -> use it when unsure of property, method or index exists or is even callable, for example in deeply nested structures
- example:

```javascript
const person = {
  name: "Sam",
  skills: [
    {
      name: "HTML",
      level: 9999,
      category: {
        name: "coding",
      },
    },
    {
      name: "Agile",
      level: 1337,
      category: {
        name: "projects",
      },
    },
  ],
};

console.log(person.skills[1].category.name);
// logs: projects

console.log(person.skills[2].level);
// throws: Uncaught TypeError: Cannot read properties of undefined (reading 'level')

console.log(person.skills?.[2]?.level);
// logs: undefined

console.log(person.skills[0].partner.name);
// throws: Uncaught TypeError: Cannot read properties of undefined (reading 'name')

console.log(person.skills[0].partner?.name);
// logs: undefined
```

- ?? nullish coalescing operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand
- example:

```javascript
const chocolate = true;

function chocolateCheck() {
  return chocolate ?? "No chocolate :(";
}

const result = chocolateCheck();
// will return chocolate, if we set chocolate to false it would return the string

// example how it would look like as an if/else function:

const chocolate = true;

function chocolateCheck() {
  if (chocolate === null || chocolate === undefined) {
    return "No chocolate :(";
  }

  return true;
}

const result = chocolateCheck();
```
