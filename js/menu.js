document.addEventListener('DOMContentLoaded', function () {
  const sideNav = document.getElementById('sideNav');
  const toggleButton = document.getElementById('toggleButton');
  const pageTitle = document.getElementById('pageTitle');
  const overlay = document.getElementById('overlay');
  const overlayToggleButton = document.getElementById('overlayToggleButton');

  // Function to toggle overlay visibility
  function toggleOverlay() {
    sideNav.style.width = (sideNav.style.width === '250px') ? '0' : '250px';
    overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
    overlayToggleButton.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
  }

  // Function to update page title and close overlay
  function updatePage(title) {
    pageTitle.textContent = title;
    toggleOverlay();
  }

  // Add event listener for the toggle button
  toggleButton.addEventListener('click', function () {
    toggleOverlay();
  });

  // Add event listeners for navigation links
  const navigationLinks = document.querySelectorAll('.navigation a');
  navigationLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      updatePage(link.textContent);
    });
  });

  // Add event listener for overlay toggle button
  overlayToggleButton.addEventListener('click', function () {
    toggleOverlay();
  });
});

// Additional function for toggling the navigation menu
function toggleNavMenu() {
  var sideNav = document.getElementById("sideNav");
  var overlayToggleButton = document.getElementById("overlayToggleButton");

  if (sideNav.style.width === "0px" || sideNav.style.width === "") {
    sideNav.style.width = "250px";
    overlayToggleButton.style.display = "block";
  } else {
    sideNav.style.width = "0";
    overlayToggleButton.style.display = "none";
  }
}
