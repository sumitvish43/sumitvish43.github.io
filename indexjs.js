var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

document.addEventListener("click", function (e) {
  if (e.path[0] == document.getElementsByClassName("card1")[0]) {
    modal.style.display = "block";
    document.getElementById("content").innerHTML = document.getElementById(
      "cls9"
    ).innerHTML;
  } else if (e.path[0] == document.getElementsByClassName("card2")[0]) {
    modal.style.display = "block";
    document.getElementById("content").innerHTML = document.getElementById(
      "cls10"
    ).innerHTML;
  } else if (e.path[0] == document.getElementsByClassName("card3")[0]) {
    modal.style.display = "block";
    document.getElementById("content").innerHTML = document.getElementById(
      "scicls11"
    ).innerHTML;
  } else if (e.path[0] == document.getElementsByClassName("card4")[0]) {
    modal.style.display = "block";
    document.getElementById("content").innerHTML = document.getElementById(
      "scicls12"
    ).innerHTML;
  }
});

function openPanel() {
  document.getElementById("myOverlay").style.display = "block";
}

function closePanel() {
  document.getElementById("myOverlay").style.display = "none";
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function phonenumber(inputtxt) {
  var phoneno = /^\d{10}$/;
  if (inputtxt.value.match(phoneno)) {
    document.getElementById("invalidNumber").style.display = "none";
    return true;
  } else {
    document.getElementsByName("mobno")[0].value = "";
    document.getElementById("invalidNumber").style.display = "block";
    return false;
  }
};
function snackBar() {
  var x = document.getElementById("snackbar");
  x.className = "show";

  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 4000);
  document.getElementsByName("getMob")[0].reset();
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