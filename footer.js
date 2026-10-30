(function () {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const socials = [
        ["svg/youtube.svg", "https://www.youtube.com/@DarkThunderGamez", "YouTube"],
        ["svg/discord.svg", "https://discord.gg/YEAEXEZXF7", "Discord"],
        ["svg/x.svg", "https://x.com/DThunderGames", "X"],
        ["svg/tiktok.svg", "https://www.tiktok.com/@darkthundergames2", "TikTok"]
    ];

    const buttons = socials.map(([icon, url, name]) => `
        <a class="social-button"
           href="${url}"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="${name}">
            <img src="${icon}" alt="">
        </a>
    `).join("");

    footer.innerHTML = `
        <div class="socials">${buttons}</div>
        <h4><i>© 2026 Dark Thunder Games</i></h4>
    `;
})();