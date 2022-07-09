let button = document.querySelector(".cart-button");
let message = document.querySelector(".grandpa");
let menu = document.querySelector(".hamburger-menu");
let nav = document.querySelector("#nav-bar");



button.addEventListener("click", ()=>{
    message.classList.toggle("reveal");
})

menu.addEventListener("click", ()=>{
    nav.classList.toggle("reveal");
})


