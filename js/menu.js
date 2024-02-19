document.addEventListener('DOMContentLoaded', function () {
  const sideNav = document.getElementById('sideNav');
  const toggleButton = document.getElementById('toggleButton');
  const pageTitle = document.getElementById('pageTitle');
  const overlay = document.getElementById('overlay');

  // Function to toggle overlay visibility
  function toggleOverlay() {
    sideNav.style.width = (sideNav.style.width === '250px') ? '0' : '250px';
    overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
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
});
