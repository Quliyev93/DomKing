const menuBar = document.getElementById("menuNav");
const menuButton = document.getElementById("menuButton");
const navRight = document.getElementById("navright");
const closeButton = document.getElementById("closebutton");

console.log(navRight);

menuButton.addEventListener("click", () => {
    menuBar.classList.add("active_menubar");
    if (menuBar.style.display = "block") {
        menuButton.style.display = "none"
        navRight.style.display = "none"
    }

});

closeButton.addEventListener("click", () => {
    menuBar.style.display = "none"
    menuButton.style.display = "block"
    navRight.style.display = "flex"
})
