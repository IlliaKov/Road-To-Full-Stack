var clickButton = document.querySelectorAll(".drum");

for (var i = 0; i < clickButton.length; i++) {
    clickButton[i].addEventListener("click", function () {
        this.style.color = "white";
    })
}

// var audioSound = new Audio('sounds/tom-1.mp3')
// audioSound.play();
