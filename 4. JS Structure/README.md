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
