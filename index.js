let toggleBtn = document.querySelector(".togglebtn");
let nav = document.querySelector(".navlinks");
let link = document.querySelector(".navlivks li");

toggleBtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

var typed= new Typed(".input", {
    strings:["Frontend Developer", "Graphic Designer"],
    typedSpeed: 120,
    backSpeed: 50,
    loop:true
})