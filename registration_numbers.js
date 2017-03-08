const form = document.getElementById("fillForm");
const inputRegiNumbers = document.querySelector("#regiNumber");
var outputRegiNumbers = document.querySelector("#regiNumberOutput");
var regiListForRegis = document.querySelector("regiOutputList");
var ul = document.querySelector("ul");
var li = document.createElement("li");



form.addEventListener("submit", function() {
  event.preventDefault();
  // outputRegiNumbers.innerHTML = inputRegiNumbers.value;
  li.innerHTML = addRegiNumbers();
});


function addRegiNumbers() {
  var li = document.createElement("li");
  li.setAttribute("id", "inputRegiNumbers");
  ul.appendChild(li);
  li.innerHTML = inputRegiNumbers.value;
}

// function addRegiNumbers() {
//   var regiList = document.createElement("li");
//   regiList.appendChild(inputRegiNumbers);
//   document.getElementById("regiNumber").appendChild(regiList);
// }

// regiList.setAttribute("id", outputRegiNumbers);
// fullRegiList.appendChild("regiList")

// function myFunction() {
//     var node = document.createElement("LI");
//     var textnode = document.createTextNode("Water");
//     node.appendChild(textnode);
//     document.getElementById("myList").appendChild(node);
// }
