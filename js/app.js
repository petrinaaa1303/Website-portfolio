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