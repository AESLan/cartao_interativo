var input = document.getElementById("#number");
var div = document.getElementById("digito");
input.addEventListener("keyup", function () {
  div.innerHTML = input.value;
});
