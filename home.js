// ******** SELECTED ELEMENTS
const openmenu = document.getElementById("menupoper");
const closemenu = document.querySelector("[data-id = 'closemenu']");
const compass = document.querySelector(".compass");

let currentpage;

// ****** CONDITIONS OR OPTIONS
let pausepage = false;
// const query = matchMedia("(max-width: 768px)");
openmenu.addEventListener("click", openmenubar);
closemenu.addEventListener("click", closemenubar);


// ************ FUNCTIONS
// function close menu bar
function closemenubar() {
    compass.classList.remove("show_compass");
    pausepage = false;
}
function openmenubar() {
    compass.classList.add("show_compass");
    currentpage = window.pageYOffset;
    pausepage = true;
}

window.addEventListener("scroll", () => {
    if(pausepage) {
        window.scrollTo(0, currentpage)
    }
})