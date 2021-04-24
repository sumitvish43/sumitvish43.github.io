var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

document.addEventListener("click", function (e) {
  if (e.path[0] == document.getElementsByClassName("sclcard1")[0]) {
    modal.style.display = "block";
    document.getElementById("content").innerHTML = document.getElementById(
      "cls5"
    ).innerHTML;
  } else if (e.path[0] == document.getElementsByClassName("sclcard2")[0]) {
    modal.style.display = "block";
    document.getElementById("content").innerHTML = document.getElementById(
      "cls6"
    ).innerHTML;
  } else if (e.path[0] == document.getElementsByClassName("sclcard3")[0]) {
    modal.style.display = "block";
    document.getElementById("content").innerHTML = document.getElementById(
      "cls7"
    ).innerHTML;
  } else if (e.path[0] == document.getElementsByClassName("sclcard4")[0]) {
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
