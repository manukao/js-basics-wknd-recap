## Unit Testing

---

### What are unit tests?

- unit tests check whether a single function works as intended
- the goal is to test each individual unit independently and isolated from other data and external influences
- automation is key to save time

---

### Test Driven Development (TDD)

- With TDD the test is written first and afterwards you write the function, which should create a desired result.
- with this approach you get feedback as early as possible

---

### How to test with jest

- test files are placed next to the code you like to test but with a different filename ending
- example: calculator.js and calculator.test.js
- when writing tests cases you wrap them into a function called test().
- as the first argument of the function you describe the test case in plain english
- afterwards the result of this function call is passed to the expect() function
- this is different from matcher function like toBe() and toEqual()
- example:

```javascript
import { add } from "calculator";

test("adds the numbers 1, 2 and 3 correctly", () => {
  const result = add(1, 2, 3);
  expect(result).toBe(6);
});

test("adds the numbers 13, 28 and 42 correctly", () => {
  const result = add(13, 28, 42);
  expect(result).toBe(83);
});
```

- run those tests with npm run test
