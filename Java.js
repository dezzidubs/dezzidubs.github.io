function openNav() {
  document.getElementByID("mySidebar").style.width = "250px";
  document.getElementByID("main").style.marginLeft = "250px";
}

function closeNav () {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
