let ham = document.getElementById('ham-nav');
let body = document.getElementById('_body');
let ham_img = document.getElementById('ham-img');

function Open(){
  if(document.getElementById('ham-button').classList.contains('open')){
    ham.style.width = "70%";
    body.style.overflowY = "hidden";
    console.log(body + ham_img);
    ham_img.src="./assets/shared/icon-close.svg";
  }
  else{
    Close();
  }
}
function Close(){
    ham.style.width = "0%";
    body.style.overflowY = "scroll";
    ham_img.src="./assets/shared/icon-hamburger.svg";
}