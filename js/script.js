var button = document.querySelector(".hotels-search-button");
var popup = document.querySelector(".search-form-box-show");
var form = document.querySelector(".search-form");
var arrival = popup.querySelector("[name=date-arrival]");
var departure = popup.querySelector("[name=date-departure]");
var grown = popup.querySelector("[name=grown]");
var children = popup.querySelector("[name=children]");
button.addEventListener("click", function (evt) {
  arrival.focus();
  if (popup.classList.contains("search-form-box-show")) {
    evt.preventDefault();
    popup.classList.toggle("search-form-box-hidden");}
});
form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !grown.value || !children.value) {
    evt.preventDefault();
    popup.classList.remove("search-form-box-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("search-form-box-error");}
});
