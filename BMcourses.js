var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

document.addEventListener("click", function (e) {
  if (e.path[0] == document.getElementsByClassName("sclcard4")[0]) {
    modal.style.display = "block";
    document.getElementById("content").innerHTML = document.getElementById(
      "cls8"
    ).innerHTML;
  } else if (e.path[0] == document.getElementsByClassName("sclcard5")[0]) {
    modal.style.display = "block";
    document.getElementById("content").innerHTML = document.getElementById(
      "cls9"
    ).innerHTML;
  } else if (e.path[0] == document.getElementsByClassName("sclcard6")[0]) {
    modal.style.display = "block";
    document.getElementById("content").innerHTML = document.getElementById(
      "cls10"
    ).innerHTML;
  } else if (e.path[0] == document.getElementsByClassName("scicard1")[0]) {
    modal.style.display = "block";
    document.getElementById("content").innerHTML = document.getElementById(
      "scicls11"
    ).innerHTML;
  } else if (e.path[0] == document.getElementsByClassName("scicard2")[0]) {
    modal.style.display = "block";
    document.getElementById("content").innerHTML = document.getElementById(
      "scicls12"
    ).innerHTML;
  } else if (e.path[0] == document.getElementsByClassName("scicard3")[0]) {
    modal.style.display = "block";
    document.getElementById("content").innerHTML = document.getElementById(
      "sciclsEntrance"
    ).innerHTML;
  } else if (e.path[0] == document.getElementsByClassName("scicard4")[0]) {
    modal.style.display = "block";
    document.getElementById("content").innerHTML = document.getElementById(
      "sciclsPackage"
    ).innerHTML;
  } else if (e.path[0] == document.getElementsByClassName("commcard1")[0]) {
    modal.style.display = "block";
    document.getElementById("content").innerHTML = document.getElementById(
      "commcls11"
    ).innerHTML;
  } else if (e.path[0] == document.getElementsByClassName("commcard2")[0]) {
    modal.style.display = "block";
    document.getElementById("content").innerHTML = document.getElementById(
      "commcls12"
    ).innerHTML;
  }
});

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function navOptions() {
  var x = document.getElementById("myButtons");
  if (x.className === "allbuttons") {
    x.className += " responsive";
  } else {
    x.className = "allbuttons";
  }
}
function openMenuPanel() {
  document.getElementById("menuOverlay").style.display = "block";
}

function closeMenuPanel() {
  document.getElementById("menuOverlay").style.display = "none";
}
