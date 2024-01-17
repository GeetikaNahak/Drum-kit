document.querySelectorAll(".drum").forEach(function (btn) {
  btn.addEventListener("click", () => {
    var k = btn.innerText;
    makeSound(k);
   
  });
});

document.addEventListener("keydown",(e)=>{
  makeSound(e.key);
})

function makeSound(key){
  switch (key) {
    case "l":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
  }
}