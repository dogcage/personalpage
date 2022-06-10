let first = document.getElementById("image1");
let third = document.getElementById("image3");
let button = document.getElementById("clicker");

// addEventListener method has 2 parameters:
// one is event to listen for, second is callback function
first.addEventListener("mouseover", () => {
    first.style.display = "none";
    third.style.display = "block";
})

third.addEventListener("mouseover", () => {
    third.style.display = "none";
    first.style.display = "block";
})

button.addEventListener("click", () => {
    console.log("I felt a click");
})