document.getElementById("help-toggle").addEventListener("click", () => {
    toggleVisibility("help-content");
});
document.getElementById("contact-toggle").addEventListener("click", () => {
    toggleVisibility("contact-content");
});
document.getElementById("about-toggle").addEventListener("click", () => {
    toggleVisibility("about-content");
});

function toggleVisibility(id) {
    const content = document.getElementById(id);
    const allContents = document.querySelectorAll(".toggle-content");

    allContents.forEach((section) => {
        if (section !== content) {
            section.style.display = "none";
        }
    });
    content.style.display = content.style.display === "block" ? "none" : "block";
}
