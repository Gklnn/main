var iterat = $(".drum").length;

// $ symbol can be used instead of document.querySelectorAll
//CODE FOR MOUSE CLICKS

for ( var i = 0; i < iterat; i++)
{

$(".drum")[i].addEventListener("click" ,function() {

   aud(this.innerHTML);

});

}

// CODE FOR KEY PRESS
document.addEventListener("keypress" ,function(event){

aud(event.key);

});

function aud(key){

    switch(key)
    {
    
    case "q":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "w":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "e":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "r":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "t":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "y":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    case "u":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    }
}

