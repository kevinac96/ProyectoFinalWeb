const menu = document.querySelector("#menuicon")
const navList = document.querySelector(".navlist")

menu.onclick = () => {
    menu.classList.toggle("bx-x")
    navList.classList.toggle("open")
}


const sr = ScrollReveal({
    distance: "65px",
    duration: 2000,
    delay: 450,
    reset: true
})

sr.reveal(".herotext", {delay: 200, origin: "top"})
sr.reveal(".heroimg", {delay: 400, origin: "top"})
sr.reveal(".icons", {delay: 500, origin: "left"})
sr.reveal(".scrolldown", {delay: 450, origin: "right"})
