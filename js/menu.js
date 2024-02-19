document.addEventListener('DOMContentLoaded', function () {
  const sideNav = document.getElementById('sideNav');
  const toggleButton = document.getElementById('toggleButton');
  const pageTitle = document.getElementById('pageTitle');
  const overlayToggleButton = document.getElementById('overlayToggleButton');

  // Function to update page title and close overlay
  function updatePage(title) {
    pageTitle.textContent = title;
    toggleNavMenu(); // Utilize the new function
  }

  // Add event listener for the toggle button
  toggleButton.addEventListener('click', function () {
    toggleNavMenu();
  });

  // Add event listeners for navigation links
  const navigationLinks = document.querySelectorAll('.navigation a');
  navigationLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      updatePage(link.textContent);
    });
  });
});
