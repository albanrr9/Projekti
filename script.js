function menu() {
  var x = document.getElementById("searchbar");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("buttons");
  if (y.style.display === "none") {
    y.style.display = "flex";
  } else {
    y.style.display = "none";
  }
}
