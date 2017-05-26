//Adds each registration number in a list, but does not add an empty value
function addRegiNumbers() {
  var li = document.createElement("li");
  if (inputRegiNumbers.value !== "") {
    li.setAttribute("id", "inputRegiNumbers");
    ul.appendChild(li);
    li.innerHTML = inputRegiNumbers.value;
  }
}
