// JavaScript for the hamburger menu functionality
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Additional styles for the active menu
document.styleSheets[0].insertRule(`
    .nav-links.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 60px;
        right: 10px;
        background-color: #fff;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        width: 200px;
        padding: 10px;
    }
`, 0);
