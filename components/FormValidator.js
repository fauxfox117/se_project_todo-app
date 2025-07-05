class FormValidator {
  constructor(settings, formElement) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formElement = formElement;
  }
  _showInputError = (_formElement, _inputElement, _errorMessage) => {
    this._errorElementId = `#${_inputElement.id}-error`;
    this._errorElement = _formElement.querySelector(this._errorElementId);
    _inputElement.classList.add(this._inputErrorClass);
    this._errorElement.textContent = _errorMessage;
    this._errorElement.classList.add(this._errorClass);
  };

  _hideInputError = (_formElement, _inputElement) => {
    this._errorElementId = `#${_inputElement.id}-error`;
    this._errorElement = _formElement.querySelector(this._errorElementId);
    _inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass);
    this._errorElement.textContent = "";
  };

  _checkInputValidity(_inputElement) {
    if (!_inputElement.validity.valid) {
      this._showInputError(
        this._formElement,
        _inputElement,
        _inputElement.validationMessage
      );
    } else {
      this._hideInputError(this._formElement, _inputElement);
    }
  }

  _hasInvalidInput = () => {
    return this._inputList.some((_inputElement) => {
      return !_inputElement.validity.valid;
    });
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  };

  _setEventListeners(_formElement) {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners(this._formElement);
  }
  resetValidation = () => {
    this._formElement.reset();
    this._inputList.forEach((_inputElement) => {
      this._hideInputError(this._formElement, this._inputElement);
      this._toggleButtonState();
    });
  };
}

export default FormValidator;
