function addRegiNumbers() {
  var li = document.createElement("li");
    if (inputRegiNumbers.value !== ""){
      li.setAttribute("id", "inputRegiNumbers");
      ul.appendChild(li);
      li.innerHTML = inputRegiNumbers.value;
      }
}
