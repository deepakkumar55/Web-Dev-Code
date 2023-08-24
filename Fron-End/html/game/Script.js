console.log=function(){};
console.error=function(){};
window.onerror=function(){
console=null;
return true;
}

alert("swipe right left to move\nswipe up to rotate\nand tap to move it down");

window.addEventListener("click",goo);
function goo(){ 
let audio = document.getElementById("goo");
  audio.play();
  audio.addEventListener("ended", goo);
  }
