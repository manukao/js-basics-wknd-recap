const button = document.querySelector('[data-js="button"]');

const button2 = document.querySelector('[data-js="button2"]');

button.addEventListener("click", () => button.classList.toggle("toggle"));

const paragraphs = document.querySelectorAll('[data-js*="pleb"]');

button2.addEventListener("click", () => {
  paragraphs.forEach((paragraph) => {
    paragraph.textContent = paragraph.textContent.toUpperCase();
  });
});
