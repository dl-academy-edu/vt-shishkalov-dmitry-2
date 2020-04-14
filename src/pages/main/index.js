var modalWindow = document.querySelector(".modal-window_js");
var buttonOpen = document.querySelector(".button_js");
var buttonClose = document.querySelector(".button-close_js");
var input = document.querySelector(".form-input_js");

buttonOpen.addEventListener("click", function () {
  modalWindow.classList.remove("modal-window-close");
  input.focus();
});

buttonClose.addEventListener("click", function () {
  modalWindow.classList.add("modal-window-close");
  buttonOpen.focus();
});

// Escape
window.addEventListener("keydown", function (event) {
  if (!modalWindow.classList.contains("modal-window-close") && event.code === "Escape") {
    modalWindow.classList.add("modal-window-close");
    buttonOpen.focus();
  }
})