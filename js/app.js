let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let body = document.querySelector('.body');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
  header.classList.toggle('active');
  body.classList.toggle("lock");
})

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header").style.top = "0";
  } else {
    document.querySelector(".header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

let header = document.querySelector (".header");
let listWhite = document.querySelectorAll(".list_white");
window.addEventListener("scroll", () =>{
  if(window.scrollY>50){
	header.classList.add('navbar-background');
	for(let item of listWhite) {
		item.classList.add("list_black");
	}
	listWhite.classList.add("list_black");
}else{
	header.classList.remove('navbar-background');
	for(let item of listWhite) {
		item.classList.remove("list_black");
	}
  }
});