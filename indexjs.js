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

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
