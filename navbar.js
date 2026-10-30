(function () {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    let currentPage = window.location.pathname.split("/").pop() || "index.html";
    if (!currentPage.includes(".")) currentPage += ".html";
    const links = [
        ["index.html", "Home"],
        ["games.html", "Games"],
        ["about.html", "About"],
        ["news.html", "News"],
        ["devlogs.html", "Devlogs"]
    ];

    const navLinks = links.map(([href, label]) => {
        const current = currentPage === href || (href === "devlogs.html" && currentPage.startsWith("devlog"));
        return `<a class="navlink${current ? " is-current" : ""}" href="${href}"${current ? ' aria-current="page"' : ""}>${label}</a>`;
    }).join("");

    navbar.innerHTML = `
        <a class="logo-link" href="index.html" aria-label="Dark Thunder Games home">
            <img class="logo" src="img/logo.png" alt="Dark Thunder Games">
        </a>
        <div class="nav-buttons">${navLinks}</div>
    `;
})();