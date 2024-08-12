document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 150,
        loop: true
    }).type('Computer Science Student', {delay: 900}).delete(25).type('Software Developer', {delay: 500})
    
    .go();
});

const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",window.scrollY > 0)
});

const topo = document.getElementById("top");

window.addEventListener("scroll", function() {
    topo.classList.toggle ("show-top", window.scrollY > 140)
    topo.classList.toggle ("hide-top", window.scrollY < 140);
});

window.onload = () => {
    topo.classList.toggle ("hide-top");
}