class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
    this._onEscape = (evt) => this._handleEscapeClose(evt);
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") this.close();
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", (evt) =>
      this._handleEscapeClose(evt, this._onEscape)
    );
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keyup", (evt) =>
      this._handleEscapeClose(evt, this._onEscape)
    );
  }

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("popup__close") ||
        evt.target.classList.contains("popup_visible")
      )
        this.close();
    });
  }
}
export default Popup;
