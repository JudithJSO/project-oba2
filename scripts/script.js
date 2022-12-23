function toggleSidebar() {
  var sidebar = document.getElementById("sidebar")
  var collapseBtn = document.getElementById("collapse-btn")
  var expandBtn = document.getElementById("expand-btn")

  if (sidebar.style.display === "none") {
    sidebar.style.display = "block"
    collapseBtn.innerHTML = "◄"
  } else {
    sidebar.style.display = "none"
    expandBtn.innerHTML = "►"
  }
}
