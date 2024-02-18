function headerContent(currentPage) {
    const inIndex = location.href.includes("index");
    document.querySelector("header").innerHTML = `
        <h1>Han's Labs</h1>
        <input type="checkbox" id="active">
        <label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
        <div class="wrapper">
            <ul>
                <li><a
                    href="${inIndex ? '' : "../"}index.html"
                    class="${currentPage == "Home" ? "current" : ''}">
                    Home
                </a></li>
                <li><a
                    href="${inIndex ? "p/" : ''}projects.html"
                    class="${currentPage == "Projects" ? "current" : ''}">
                    Projects
                </a></li>
                <li><a
                    href="${inIndex ? "p/" : ''}services.html"
                    class="${currentPage == "Services" ? "current" : ''}">
                    Services
                </a></li>
                <li><a
                    href="${inIndex ? "p/" : ''}contacts.html"
                    class="${currentPage == "Contacts" ? "current" : ''}">
                    Contacts
                </a></li>
            </ul>
            <div class="social-links">
                <a href="#" class="social-icon">behance</a>
                <a href="#" class="social-icon">YouTube</a>
            </div>
        </div>
        `;
}