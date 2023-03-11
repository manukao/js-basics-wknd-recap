## JS Basics Recap

---

When JS is used in HTML:
in head:

```html
<script src="./index.js" defer></script>
```

defer = delay loading until all HTML elements are loaded
<br><br>

### document.querySelector(selectors)

-> selects the first element that has specification
-> data-attribute -> Bsp.: data-js="button"
<br><br>

### .addEventListener

```javascript
eventTarget.addEventListener(type, listener, useCapture);

event.preventDefault(); // zB um default submit bei buttons zu verhindern, aber auch um andere default functions zu unterbinden
```

useCapture Beispiel:

- default = false
- when true -> will call a function earlier for example
  Example:

```javascript
const dropdownButton = document.getElementById("dropdown-button");
const dropdownMenu = document.getElementById("dropdown-menu");

// Add event listener to the button to expand the dropdown menu
dropdownButton.addEventListener("click", function () {
  dropdownMenu.classList.add("expanded");
});

// Add event listener to the document to collapse the dropdown menu when the user clicks outside of it
document.addEventListener(
  "click",
  function (event) {
    if (
      !dropdownButton.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.remove("expanded");
    }
  },
  true // hier ist der useCapture
);
/* In this example, we're attaching an event listener to the document object to handle the click event. We've set useCapture to true, which means that this event listener will be called during the capturing phase instead of the bubbling phase. This allows us to modify the behavior of the click event before it reaches the button element.

When the user clicks the button, the click event will propagate down to the button element and trigger the event listener that expands the dropdown menu. However, the click event will also propagate up to the document object and trigger the event listener that collapses the dropdown menu when the user clicks outside of it.

Because we've set useCapture to true for this event listener, it will be called first, allowing us to check whether the user clicked outside of the dropdown menu before the event reaches the button element.

By using useCapture in this way, we can modify the behavior of the click event and ensure that the dropdown menu is collapsed when the user clicks outside of it. */
```

- when to pass an event object as an argument?
  Example:

Simple Form:

```HTML
<form>
  <label for="name">Enter your name:</label>
  <input type="text" id="name" name="name">
  <button type="submit">Submit</button>
</form>

<div id="message"></div>

```

Prevent default submit event:

```javascript
const form = document.querySelector("form");
const message = document.querySelector("#message");

form.addEventListener("submit", function (event) {
  // Prevent the default behavior of the submit event
  event.preventDefault();

  // Get the value entered in the input field
  const name = document.querySelector("#name").value;

  // Display the message on the page
  message.textContent = `Hello, ${name}! Your form has been submitted.`;
});

/* In this example, we're using the addEventListener() method to add a "submit" event listener to the form element. When the user submits the form, the anonymous function defined in the second argument of addEventListener() will be called. Since we passed event as the argument to the function, we can access the event object inside the function.

We're using event.preventDefault() to prevent the default behavior of the submit event, which would normally cause the browser to navigate to a new page. Then, we're using document.querySelector() to get the value entered in the input field, and storing it in a variable called name. Finally, we're displaying the message on the page by setting the text content of the message element to a string that includes the user's name. */
```

---

### element.classList.add("class")

<br>
Beispiel:

```javascript
const button = document.querySelector('[data-js="button"]');

button.addEventListener("click", () => {
  button.classList.toggle("dark");
});
```

---

### Template Literals

- need backticks ``
- ${} -> string interpolation
- any expression usable within
- multi-line-use

- Beispiel:

```javascript
const greeting = `Hello ${
  name !== null ? name : "mysterious person"
}, good to see you!`;
```

---

### .querySelectorAll()

a list of elements

```javascript
.querySelectorAll(attribute^=startsWithValue) // ^=

.querySelectorAll(attribute$=endsWithValue) // $=

.querySelectorAll(attribute*=containsValue) // *=
```

---

### JS Inputs and Strings

Box Challenge Beispiel:

```html
<body>
  <div class="box" data-js="box"></div>
  <form>
    <p>
      <label for="color"> Color: </label>
      <input
        id="color"
        type="range"
        value="0"
        max="360"
        data-js="input-color"
      />
    </p>
    <p>
      <label for="radius"> Border Radius: </label>
      <input
        id="radius"
        type="range"
        value="0"
        max="50"
        data-js="input-radius"
      />
    </p>
    <p>
      <label for="rotation"> Rotation: </label>
      <input
        id="rotation"
        type="range"
        value="0"
        max="180"
        data-js="input-rotation"
      />
    </p>
  </form>
  <script src="./js/index.js" defer></script>
</body>
```

JS solution:

```javascript
const box = document.querySelector('[data-js="box"]');
const colorInput = document.querySelector('[data-js="input-color"]');
const borderInput = document.querySelector('[data-js="input-radius"]');
const rotationInput = document.querySelector('[data-js="input-rotation"]');

colorInput.addEventListener("input", () => {
  box.style.background = `hsl(${colorInput.value}deg, 70%, 60%)`;
});
borderInput.addEventListener("input", () => {
  box.style.borderRadius = `${borderInput.value}%`;
});
rotationInput.addEventListener("input", () => {
  box.style.transform = `rotate(${rotationInput.value}deg)`;
});
```

---

Element manipulation methods / DOM Manipulation:

- .classList.add/remove/toggle etc("classname")
- .setAttribute("key", "value")
- .textContent = "string"
- .append(elementName) // always do last
- .innerHTML = "some HTML including tags etc here"
- document.createElement(element) // example: ("button")

---

### JS Forms: Dom Manipulation

- Object.fromEntries(iterable) -> can access inputs from forms for example

Password Manager example:

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>🔑 Password Manager</title>
    <link rel="stylesheet" href="./css/styles.css" />
    <script src="./js/index.js" defer></script>
  </head>
  <body>
    <main class="app">
      <h1 class="app__title">
        Password Manager
        <span role="img" aria-label="A key emoji that represents security"
          >🔑</span
        >
      </h1>
      <section class="app__form">
        <h2 class="app__headline">Add new credentials</h2>
        <form class="form" data-js="form">
          <!-- Title -->
          <label class="form__label" for="title">Title:</label>
          <input
            type="text"
            class="form__field"
            id="title"
            name="title"
            data-js="title-input"
          />
          <!-- Email -->
          <label class="form__label" for="email">Email:</label>
          <input type="email" class="form__field" id="email" name="email" />

          <!-- Password -->
          <label class="form__label" for="password">Password:</label>
          <input
            minlength="8"
            type="password"
            class="form__field"
            id="password"
            name="password"
            data-js="password-input"
          />

          <!-- Password Hint -->
          <span class="form__field--hint" data-js="password-hint"></span>
          <button class="form__submit" type="submit">Save credentials</button>
        </form>
      </section>
      <section class="app__storage">
        <h2 class="app__headline">Your saved credentials</h2>
        <ul class="storage" data-js="storage"></ul>
      </section>
    </main>
  </body>
</html>

```

index.js

```javascript
console.clear();

const form = document.querySelector('[data-js="form"]');
const storage = document.querySelector('[data-js="storage"]');
const passwordInput = document.querySelector('[data-js="password-input"]');
const titleInput = document.querySelector('[data-js="title-input"]');
const passwordHint = document.querySelector('[data-js="password-hint"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // function call to show the saved credentials
  addStorageEntry(data.title, data.email, data.password);

  form.reset();
  passwordInput.focus();
});

passwordInput.addEventListener("input", (currywurst) => {
  updatePasswordStrength(currywurst.target.value, currywurst.target.minLength);
});

// function we need later :)
function updatePasswordStrength(text, minlength) {
  const passwordLength = text.length;
  if (passwordLength < 1) {
    passwordHint.textContent = "";
  } else if (passwordLength < minlength) {
    passwordHint.textContent = `Your password has ${passwordLength} out of minimum ${minlength} characters.`;
  } else {
    passwordHint.textContent = "Your password is secure enough.";
  }
}

/* function to create and append the Saved Credential -  not  relevant for the demo */
// ACHTUNG FUNCTION HOISTED -> GETS CALLED AT THE TOP
function addStorageEntry(title, email, password) {
  const entry = document.createElement("li");
  entry.className = "storage__entry";

  const headline = document.createElement("h3");
  headline.className = "storage__title";
  headline.textContent = title;

  const descriptionList = document.createElement("dl");
  descriptionList.className = "storage__credentials";

  const descriptionTermEmail = document.createElement("dt");
  descriptionTermEmail.textContent = "Email:";

  const descriptionDetailsEmail = document.createElement("dd");
  descriptionDetailsEmail.textContent = email;

  const descriptionTermPassword = document.createElement("dt");
  descriptionTermPassword.textContent = "Password:";

  const descriptionDetailsPassword = document.createElement("dd");
  descriptionDetailsPassword.textContent = password;

  descriptionList.append(
    descriptionTermEmail,
    descriptionDetailsEmail,
    descriptionTermPassword,
    descriptionDetailsPassword
  );

  entry.append(headline, descriptionList);

  storage.append(entry);
}
```

**_IMPORTANT LEARNINGS FROM THIS EXAMPLE:_**

- const data = Object.fromEntries(formData); can access and use data
- Hoisting: "In JavaScript, function declarations are hoisted, which means that they are moved to the top of their scope by the JavaScript engine. This allows you to use a function before it is actually defined in the code, as in this case."
- **_DOM?_** : The Document Object Model (DOM) is a programming interface for web documents. It represents the HTML or XML document as a tree structure, where each node in the tree represents an element, attribute, or text content in the document. Developers can use JavaScript to interact with the DOM and modify the structure, content, and styling of a web page in real-time. This allows for dynamic and interactive web pages, where user interactions can trigger changes to the content or appearance of the page. In summary, the DOM is an API that provides a way to programmatically access and manipulate the content and structure of a web page.
- .appenChild(element) : adds a child element to a parent element
- event.target -> refer to targeted element

example:

```javascript
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // [...] handle form data
  event.target.reset();
});
```

.reset() = sets back the target / form in this case

.document.createElement

```javascript
// first create elements
const article = document.createElement("article");
const button = document.createElement("button");
// then append elements
document.body.append(article); // placing the created article at the end of the body
article.append(button); // placing the created button into the article

// change context of elements with:
button.textContent = "Click me!";
//or
article.innerHTML = `bla bla ${someThing}`;
```

---

### JS Forms 2

- input attributes:

```HTML
<input
  id="input-name"
  type="text"
  name="name"
  minlength="3"
  maxlength="30"
  required
/>
```

- input event:

```javascript
const messageField = document.querySelector('[data-js="message"]');

messageField.addEventListener("input", (event) => {
  console.log(event.target.value);
});
/*
The input event is fired every time when the value of a form field has been changed. For example, a <textarea /> will fire this event with every keystroke.
*/
```

- focus input fields:
- why?: to improve ux after submitting a form
- example:

```javascript
const messageField = document.querySelector('[data-js="message"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // [...] handle form data
  messageField.focus();
});
//or w/o queryselector but with event target:
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // [...] handle form data
  event.target.elements.message.focus();
});
```

- resetting a form:

```javascript
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // [...] handle form data
  event.target.reset();
});
```

### important learnings:

- input attributes
- input event
- .focus()
- .reset()

---

### very useful:

#### using input values:

```javascript
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
});
```

- why?: with const data = Object.fromEntries(formData) you can access the input data of an entire form!
- event.target.elements is more useful when you want to access a single form field or focus it afterwards

---

### client-side form validation:

- html form field attributes to ensure all required form fields are fille out in the correct format
- input event = fired every time when the value of a form field has been changed
- change event = only fired after a fields content has been commited or the focus was moved
- .focus to focus a specific field after the submit = better ux
- .reset = to empty the form after a submit
