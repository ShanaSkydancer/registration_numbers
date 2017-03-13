const form = document.getElementById("fillForm");
const inputRegiNumbers = document.querySelector("#regiNumber");
var outputRegiNumbers = document.querySelector("#regiNumberOutput");
var regiListForRegis = document.querySelector("#regiOutputList");
var ul = document.querySelector("ul");
var li = document.createElement("li");
var dropDownButt = document.querySelector(".ddButton");
var ddValues = document.querySelector("#myDropdown");
var dropdowns = document.querySelector("ddContent");
var ddSection = document.getElementsByClassName("dropdown");
var ouputTown = document.getElementById("selectTownOutput");

form.addEventListener("submit", function() {
  event.preventDefault();
  li.innerHTML = addRegiNumbers();
});

function addRegiNumbers() {
  var li = document.createElement("li");
    if (inputRegiNumbers.value !== ""){
      li.setAttribute("id", "inputRegiNumbers");
      ul.appendChild(li);
      li.innerHTML = inputRegiNumbers.value;
      }
}

function selectTown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.ddButton')) {
    var dropdowns = document.getElementsByClassName("ddContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  ddValues.addEventListener("change", function(){
    console.log("sss");
    if (dropdowns.value === "capeTown"){
      li.startsWith("CA");
      li.style.display="block";
      // bell.style.display="hidden";
      // paarl.style.display="hidden";
      // li.innerHTML = inputRegiNumbers.value;
    }
    else if (dropdowns.value === "bellville"){
      li.startsWith("CY");
      li.style.display="block";
      // paarl.style.display="hidden";
      // capeT.style.display="hidden";
      // li.innerHTML = inputRegiNumbers.value;
    }
    else if (dropdowns.value === "paarl"){
      li.startsWith("CJ");
      li.style.display="block";
      // capeT.style.display="hidden";
      // bell.style.display="hidden";
      // li.innerHTML = inputRegiNumbers.value;
    }
    else {
      li.style.display="hidden";
    }
  })
}
