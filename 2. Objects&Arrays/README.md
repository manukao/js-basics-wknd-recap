### JS Objects & Arrays

---

- **_dont forget the commas !!!_**

```javascript
const user = {
  name: "Manu Kao",
  age: "99",
  isNewFish: "yes",
  address: {
    street: "Abc Str.",
    houseNumber: "71",
    city: "Bonn",
    zipCode: "12345",
  },
  favFoods: ["Pesto", "Pestoo", "Pestooo!"],
};
```

- to access properties or nested objects / arrays:
- use chained dot-notation or bracket notation
- or destructure

Examples:

```javascript
// access object from before:
user.name; // "Manu Kao"
user.address.street; // "Abc Str."
//dot+bracket:
user.address["city"]; // "Bonn"
```

- objects can contain arrays and vice versa
- when accessing arrays, use [index] for example

### Destructuring:

```javascript
// same object user from before but destructured:
const {
  name,
  age,
  isNewFish,
  address: { street, houseNumber, city, zipCode },
  favFoods,
} = user;
```

- why destructure?
- to extract values and store them in separate variables
- to make accessing objects / array less verbose/ make it shorter and more concise and easier to read

---

### Array Methods:

- .forEach()
- .map()
- .filter()
- advanced array methods

`remember: these array methods are also higher order functions`

---

#### .forEach() :

- executes some logic for every element within an array
- **important:** .forEach must not use a return statement and does **NOT** return a new array
- use with side-effect, like document.createElement
- example:

```javascript
const pets = ["bird", "cat", "dog", "ferret", "fish"];
pets.forEach((pet) => {
  const petElement = document.createElement("p");
  petElement.textContent = pet;
  document.body.append(petElement);
});
```

---

#### .map() :

- applies a transformation to each element of an array
- **important:** transformed elements are stored in a **NEWLY CREATED ARRAY** returned by map, while the original arrays elements are not altered
- **also important:** .map() expects a return statement
- you should **not** use .map() to trigger a side-effect
- example:

```javascript
const pets = ["bird", "cat", "dog", "ferret", "fish"];
const uppercasePets = pets.map((pet) => {
  return pet.toUpperCase();
});
console.log(uppercasePets); // ['BIRD', 'CAT', 'DOG', 'FERRET', 'FISH']
```

---

#### .filter()

- **important:** creates a new array with a subset of the elements of the original array
  -> returns a bolean value to define if an element is being included or not, while the orginal arrays elements are not altered
- **also important:** .filter() expects a return statement
- example:

```javascript
const pets = ["bird", "cat", "dog", "ferret", "fish"];
const petsWithF = pets.filter((pet) => {
  return pet.startsWith("f");
});
console.log(petsWithF); // ['ferret', 'fish']
```

---

- array methods that return a new array can be **chained**
- example:

```javascript
const pets = ["bird", "cat", "dog", "ferret", "fish"];
const uppercasePetsWithF = pets
  .filter((pet) => {
    return pet.startsWith("f");
  })
  .map((pet) => {
    return pet.toUpperCase();
  });
console.log(uppercasePetsWithF); // ['FERRET', 'FISH']
```

-> why? reduce amount of code and improve readability

---

### Advanced Array Methods

- .includes()
- .find() / .findIndex()
- .sort() / .reverse()
- .slice()
- .some() / .every()
- .reduce()

---

#### .includes()

- checks whether the array contains the specified value -> returns boolean
- example:

```javascript
const colors = ["hotpink", "aquamarine", "granite"];

colors.includes("aquamarine"); // true
colors.includes("nemo"); // false
```

---

#### .find() and .findIndex()

- .find() to receive the first element that satisfies the provided testing function
  -> if not satisfied, will return undefined
- .findIndex() to receive the index of the first element that satisfies the provided testing function -> if no element is found, will return -1
- example:

```javascript
const colors = ["hotpink", "aquamarine", "granite", "grey"];

colors.find((color) => color.startsWith("g")); // 'granite'
colors.find((color) => color.startsWith("b")); // undefined

//and

const colors = ["hotpink", "aquamarine", "granite", "grey"];

colors.findIndex((color) => color.startsWith("g")); // 2
colors.findIndex((color) => color.startsWith("b")); // -1
```

---

#### .sort() and .reverse()

- use to sort the elements of an array
- a callback function is needed to tell how the array is sorted
- example:

```javascript
const numbers = [4, 42, 23, 1];

numbers.sort((a, b) => a - b); // [1, 4, 23, 42]
numbers.sort((a, b) => b - a); // [42, 23, 4, 1]
```

- The sorted order is based on the return value of a - b / b - a.
- if the return value of a-b is > 0 it is sorted a after b and vice versa
- if it is === 0 the original order of a and b is kept

- sorting example: **strange**

```javascript
const strings = ["Xbox", "PlayStation", "GameBoy"];

strings.sort((a, b) => {
  const nameA = a.toLowerCase();
  const nameB = b.toLowerCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

console.log(strings); // ['GameBoy', 'PlayStation', 'Xbox']
```

- explanation: upperCase and lowerCase letters have different numeric values depending on the character encoding format. Thats why we use .toLowerCase here.

#### .reverse()

- if you just want to reverse an array, use this method

#### .slice()

-> use .slice() with .sort() to make a copy of the original array and then sort it

- .sort() alone will only mutate the original one
- example:

```javascript
const numbers = [4, 42, 23, 1];

console.log(numbers); // [4, 42, 23, 1]

const sortedNumbers = numbers.slice().sort((a, b) => a - b);

console.log(sortedNumbers); // [1, 4, 23, 42]
console.log(numbers); // [4, 42, 23, 1]
```

---

#### .some() and .every()

- use .some() to test wheter at least one element in the array passes the provided test
- use .every() to check if all elements pass the test
- example:

```javascript
const colors = ["hotpink", "aquamarine", "granite"];

colors.some((color) => color.startsWith("g")); // true
colors.some((color) => color.startsWith("i")); // false

//and

const colors = ["hotpink", "aquamarine", "granite"];

colors.every((color) => color.length > 5); // true
colors.every((color) => color.length < 3); // false
```

---

#### .reduce()

- reduce a list of values into a single value
- **important core features:**

1. starting from the beginning, it executes the callback function on each element of the array,
2. the return value of each calculation is passed to the next calculation (i.e. it becomes the new starting value for the next iteration through the array)
3. the final result is a single value

- main use is to calculate the sum of an array of numbers
- example:

```javascript
const numbers = [4, 42, 23, 1];

numbers.reduce((a, b) => a + b);

console.log(numbers); // 70
```

- try to use other methods if you want to accomplish something more complex
