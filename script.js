const form = document.querySelector(`.password`);
const inp = document.querySelector(`.password-inp`);
const wrapper = document.querySelector(`.wrapper`);
const passwordEl = document.querySelector(`.password`);

const passwordRight = `213`;

if (!JSON.parse(localStorage.getItem(`password`))) {
  wrapper.classList.add(`hide`);
  passwordEl.classList.remove(`hide`);
}

form.addEventListener(`submit`, function (e) {
  e.preventDefault();

  const passwordInp = inp.value;
  if (!passwordInp) return inp.blur();

  if (passwordInp === passwordRight) {
    wrapper.classList.remove(`hide`);
    passwordEl.classList.add(`hide`);

    localStorage.setItem(`password`, passwordRight);
  }
});
