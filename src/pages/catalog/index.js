var mobileHeader = document.querySelector(".mobile-header_js");
var buttonOpenHeader = document.querySelector(".header__menu_js");
var buttonCloseHeader = document.querySelector(".mobile-header__button_js");

buttonOpenHeader.addEventListener("click", function () {
    mobileHeader.classList.add("mobile-header_open");
});

buttonCloseHeader.addEventListener("click", function () {
    mobileHeader.classList.remove("mobile-header_open");
});