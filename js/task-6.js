const divContainer = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(number) {
  for (let i = 0; i < number; i++) {
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;

    divContainer.appendChild(divEl);
  }
}

function destroyBoxes() {
  divContainer.innerHTML = '';
}

btnCreateEl.addEventListener('click', () => {
  const number = parseInt(inputEl.value);

  if (number >= inputEl.min && number <= inputEl.max) {
    destroyBoxes();
    createBoxes(number);
    inputEl.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

btnDestroyEl.addEventListener('click', destroyBoxes);

btnCreateEl.classList.add('create');
btnDestroyEl.classList.add('destroy');
