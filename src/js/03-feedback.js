import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

restoreFormData();

function onFormSubmit(e) {
  e.preventDefault();
  if (refs.email.value === '' || refs.textarea.value === '') {
    return alert('Completion of fields is required!');
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
  formData = {};
}

function onFormInput(e) {
  const formValue = e.target.value;
  const formKey = e.target.name;

  formData[formKey] = formValue;

  updateLocalStorageThrottled();
}

function updateLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

const updateLocalStorageThrottled = throttle(updateLocalStorage, 500);

function restoreFormData() {
  const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedForm && savedForm.email) {
    refs.email.value = savedForm.email;
    formData.email = savedForm.email;
  }

  if (savedForm && savedForm.message) {
    refs.textarea.value = savedForm.message;
    formData.message = savedForm.message;
  }
}
