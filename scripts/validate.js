//commented out to save code just in case something happens to the code

/*
const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElementId = `#${inputElement.id}-error`;
  const errorElement = formElement.querySelector(errorElementId);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorElementId = `#${inputElement.id}-error`;
  const errorElement = formElement.querySelector(errorElementId);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
  errorElement.textContent = "";
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );

  toggleButtonState(inputList, buttonElement, settings);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
};

const enableValidation = (settings) => {
  const formElement = document.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
  setEventListeners(formElement, settings);
};

enableValidation(validationConfig);
*/
