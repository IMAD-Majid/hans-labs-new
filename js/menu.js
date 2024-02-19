document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('overlay');
  const pageTitle = document.getElementById('pageTitle');
  const toggleOverlayButton = document.getElementById('toggleOverlayButton');

  // Function to toggle overlay visibility
  function toggleOverlay() {
    overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
  }

  // Function to update page title and close overlay
  function updatePage(title) {
    pageTitle.textContent = title;
    toggleOverlay();
  }

  // Add event listener for the toggle button
  toggleOverlayButton.addEventListener('click', function () {
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
