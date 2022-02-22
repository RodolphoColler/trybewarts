const btnLogar = document.getElementById('btnlogin');
const login = document.getElementById('login');
const passwod = document.getElementById('password');

btnLogar.addEventListener('click', () => {
  const email = 'tryber@teste.com';
  const senha = '123456';
  if (login.value === email && passwod.value === senha) {
    alert('Hello!');
  } else {
    alert('Invalid email or password.');
  }
});

const labelAgreement = document.getElementById('agreement');

labelAgreement.addEventListener('click', () => {
  const submitButton = document.getElementById('submit-btn');
  submitButton.removeAttribute('disabled');
});

const textarea = document.getElementById('textarea');

textarea.addEventListener('keyup', () => {
  const counter = document.getElementById('counter');
  counter.innerText = (500 - textarea.textLength);
});

const name = document.getElementById('input-name');
const lastname = document.getElementById('input-lastname');
const email = document.getElementById('input-email');

const submitButton = document.getElementById('submit-btn');
function saveCheckbox() {
  const usercheckbox = [];
  const checkbox = document.querySelectorAll('input[class="subject"]:checked');
  for (let index = 0; index < checkbox.length; index += 1) {
    usercheckbox.push(` ${checkbox[index].value}`);
  }
  const p = document.createElement('p');
  p.innerText = `Technology: ${usercheckbox}`;
  return p;
}

function saveRadio() {
  const radio = document.querySelector('input[name="rate"]:checked');
  const userRadio = radio.value;
  const p = document.createElement('p');
  p.innerText = `Rate: ${userRadio}`;
  return p;
}

function saveFront() {
  const front = document.querySelector('input[name="family"]:checked');
  const userFront = front.value;
  const p = document.createElement('p');
  p.innerText = `Family: ${userFront}`;
  return p;
}

function saveHouse() {
  const house = document.querySelector('select');
  const userHouse = house.value;
  const p = document.createElement('p');
  p.innerText = `House: ${userHouse}`;
  return p;
}

function saveDescription() {
  const description = document.getElementById('textarea');
  const userDescription = description.value;
  const p = document.createElement('p');
  p.innerText = `Comment: ${userDescription}`;
  return p;
}

const form = document.getElementById('evaluation-form');
function removeForms(div) {
  form.innerHTML = '';
  form.appendChild(div);
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const userName = `${name.value} ${lastname.value}`;
  const pUserName = document.createElement('p');
  pUserName.innerText = `Name: ${userName}`;
  const userEmail = email.value;
  const pEmail = document.createElement('p');
  pEmail.innerText = `Email: ${userEmail}`;

  const div = document.createElement('div');
  div.appendChild(pUserName);
  div.appendChild(pEmail);
  div.appendChild(saveHouse());
  div.appendChild(saveCheckbox());
  div.appendChild(saveRadio());
  div.appendChild(saveFront());
  div.appendChild(saveDescription());

  removeForms(div);
});
