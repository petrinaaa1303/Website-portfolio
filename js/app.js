let slide1 = document.getElementById('slide1');
let slide2 = document.getElementById('slide2');
let slide3 = document.getElementById('slide3');
let slide4 = document.getElementById('slide4');
let slide5 = document.getElementById('slide5');
let slide6 = document.getElementById('slide6');
let slide7 = document.getElementById('slide7');
let slide8 = document.getElementById('slide8');
let slide9 = document.getElementById('slide9');
let slide10 = document.getElementById('slide10');
let slide11 = document.getElementById('slide11');






function showy(x) {
  x.classList.add('show');
  const noscroll = document.querySelectorAll('body');
  noscroll.forEach((element) => {
    element.classList.add('noscroll');
  });
}

function hidy(x) {
  x.classList.remove('show');
  const noscroll = document.querySelectorAll('body');
  noscroll.forEach((element) => {
    element.classList.remove('noscroll');
  });
}






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



//1
let slideIndex1 = 1;
showSlides1((slideIndex1));

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}
function showSlides1(n) {
  let i1;
  let slides1 = document.getElementsByClassName("Slides1");
  if (n > slides1.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides1.length}
  for (i1 = 0; i1 < slides1.length; i1++) {
    slides1[i1].style.display = "none";
  }
  slides1[slideIndex1-1].style.display = "block";
}

//12
let slideIndex12 = 1;
showSlides12((slideIndex12));

function plusSlides12(n) {
  showSlides12(slideIndex12 += n);
}
function showSlides12(n) {
  let i12;
  let slides12 = document.getElementsByClassName("Slides12");
  if (n > slides12.length) {slideIndex12 = 1}
  if (n < 1) {slideIndex12 = slides12.length}
  for (i12 = 0; i12 < slides12.length; i12++) {
    slides12[i12].style.display = "none";
  }
  slides12[slideIndex12-1].style.display = "block";
}



//2
let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}
function showSlides2(n) {
  let i2;
  let slides2 = document.getElementsByClassName("Slides2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (i2 = 0; i2 < slides2.length; i2++) {
    slides2[i2].style.display = "none";
  }
  slides2[slideIndex2-1].style.display = "block";
}

//3
let slideIndex3 = 1;
showSlides3((slideIndex3));

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}
function showSlides3(n) {
  let i3;
  let slides3 = document.getElementsByClassName("Slides3");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (i3 = 0; i3 < slides3.length; i3++) {
    slides3[i3].style.display = "none";
  }
  slides3[slideIndex3-1].style.display = "block";
}

//4
let slideIndex4 = 1;
showSlides4((slideIndex4));

function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}
function showSlides4(n) {
  let i4;
  let slides4 = document.getElementsByClassName("Slides4");
  if (n > slides4.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = slides4.length}
  for (i4 = 0; i4 < slides4.length; i4++) {
    slides4[i4].style.display = "none";
  }
  slides4[slideIndex4-1].style.display = "block";
}


//5
let slideIndex5 = 1;
showSlides5((slideIndex5));

function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}
function showSlides5(n) {
  let i5;
  let slides5 = document.getElementsByClassName("Slides5");
  if (n > slides5.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = slides5.length}
  for (i5 = 0; i5 < slides5.length; i5++) {
    slides5[i5].style.display = "none";
  }
  slides5[slideIndex5-1].style.display = "block";
}


//6
let slideIndex6 = 1;
showSlides6((slideIndex6));

function plusSlides6(n) {
  showSlides6(slideIndex6 += n);
}
function showSlides6(n) {
  let i6;
  let slides6 = document.getElementsByClassName("Slides6");
  if (n > slides6.length) {slideIndex6 = 1}
  if (n < 1) {slideIndex6 = slides6.length}
  for (i6 = 0; i6 < slides6.length; i6++) {
    slides6[i6].style.display = "none";
  }
  slides6[slideIndex6-1].style.display = "block";
}


//7
let slideIndex7 = 1;
showSlides7((slideIndex7));

function plusSlides7(n) {
  showSlides7(slideIndex7 += n);
}
function showSlides7(n) {
  let i7;
  let slides7 = document.getElementsByClassName("Slides7");
  if (n > slides7.length) {slideIndex7 = 1}
  if (n < 1) {slideIndex7 = slides7.length}
  for (i7 = 0; i7 < slides7.length; i7++) {
    slides7[i7].style.display = "none";
  }
  slides7[slideIndex7-1].style.display = "block";
}


//8
let slideIndex8 = 1;
showSlides8((slideIndex8));

function plusSlides8(n) {
  showSlides8(slideIndex8 += n);
}
function showSlides8(n) {
  let i8;
  let slides8 = document.getElementsByClassName("Slides8");
  if (n > slides8.length) {slideIndex8 = 1}
  if (n < 1) {slideIndex8 = slides8.length}
  for (i8 = 0; i8 < slides8.length; i8++) {
    slides8[i8].style.display = "none";
  }
  slides8[slideIndex8-1].style.display = "block";
}


//9
let slideIndex9 = 1;
showSlides9((slideIndex9));

function plusSlides9(n) {
  showSlides9(slideIndex9 += n);
}
function showSlides9(n) {
  let i9;
  let slides9 = document.getElementsByClassName("Slides9");
  if (n > slides9.length) {slideIndex9 = 1}
  if (n < 1) {slideIndex9 = slides9.length}
  for (i9 = 0; i9 < slides9.length; i9++) {
    slides9[i9].style.display = "none";
  }
  slides9[slideIndex9-1].style.display = "block";
}



//10
let slideIndex10 = 1;
showSlides10((slideIndex10));

function plusSlides10(n) {
  showSlides10(slideIndex10 += n);
}
function showSlides10(n) {
  let i10;
  let slides10 = document.getElementsByClassName("Slides10");
  if (n > slides10.length) {slideIndex10 = 1}
  if (n < 1) {slideIndex10 = slides10.length}
  for (i10 = 0; i10 < slides10.length; i10++) {
    slides10[i10].style.display = "none";
  }
  slides10[slideIndex10-1].style.display = "block";
}


//11
let slideIndex11 = 1;
showSlides11((slideIndex11));

function plusSlides11(n) {
  showSlides11(slideIndex11 += n);
}
function showSlides11(n) {
  let i11;
  let slides11 = document.getElementsByClassName("Slides11");
  if (n > slides11.length) {slideIndex11 = 1}
  if (n < 1) {slideIndex11 = slides11.length}
  for (i11 = 0; i11 < slides11.length; i11++) {
    slides11[i11].style.display = "none";
  }
  slides11[slideIndex11-1].style.display = "block";
}
