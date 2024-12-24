//? Question-2:Write a code that, upon clicking a button labeled "Place Bid" changes its text to "Added to Cart" and disables the button (you can modify the style if necessary).
// hint: watch help.mp4
//!Answer:
const button = document.querySelector("button")
button.addEventListener("click",()=>{
    button.textContent ="Added to Cart"
})