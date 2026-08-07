function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  var currentTab = document.getElementById(cityName);
  var isOpen = currentTab.style.display === "block";

  // Hide all tabs
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove active class from all buttons
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // If it wasn't already open, show it
  if (!isOpen) {
    currentTab.style.display = "block";
    evt.currentTarget.className += " active";
  }
}

// Open the default tab on page load
document.getElementById("defaultOpen").click();