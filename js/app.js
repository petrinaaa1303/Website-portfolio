let slide1 = document.getElementById('slide1');
let slide2 = document.getElementById('slide2');
let slide3 = document.getElementById('slide3');
let slide4 = document.getElementById('slide4');

//up
//function show() {

 //   const up = document.querySelectorAll('.slide');
 //   up.forEach((element) => {
 //       element.classList.remove('hidden');
 //   });

//}

//function hide() {
 //   const up = document.querySelectorAll('.slide');
 //   up.forEach((element) => {
 //       element.classList.add('hidden');
 //   });

//}


function show(x) {
    x.classList.remove('hidden');
  }

  function hide(x) {
    x.classList.add('hidden');
  }

  const about = document.getElementById("about");
function go_about(x) {
  about.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

const works = document.getElementById("works");
function go_works(x) {
  works.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

const contact = document.getElementById("contact");
function go_contact(x) {
  contact.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}


//go to top
const backToTopButton = document.querySelector(".up");

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};

backToTopButton.addEventListener("click", goToTop);