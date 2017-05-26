const form = document.getElementById("fillForm");
const inputRegiNumbers = document.querySelector("#regiNumber");
var outputRegiNumbers = document.querySelector("#regiNumberOutput");
var regiListForRegis = document.querySelector("#regiOutputList");
var ul = document.querySelector("ul");
var li = document.createElement("li");
var dropDownButt = document.querySelector(".ddButton");

//Listens for when you submit the form
form.addEventListener("submit", function() {
  event.preventDefault();
  li.innerHTML = addRegiNumbers()
});

//Displays the selected Town's registration numbers
dropDownButt.addEventListener('change', function() {
  const currentOption = event.target;
  const currentOptionID = currentOption.value;
  var li = ul.getElementsByTagName('li');
  for (var i = 0; i < li.length; i++) {
    var currentList = li[i].textContent;
    if (currentOptionID === 'ALL' || currentList.startsWith(currentOptionID)) {
      li[i].style.display = 'block';
    } else {
      li[i].style.display = 'none';
    };
  };
});
