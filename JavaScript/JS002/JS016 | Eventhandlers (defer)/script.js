
const button = document.querySelector("#mybutton");
button.addEventListener("click", function () {
  alert("button clicked");
});


const button2 = document.querySelector("#mybutton2");
button2.addEventListener("click", function () {
  const body = document.querySelector("body");
  body.classList.toggle("red-background");
});