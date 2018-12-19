// show menu nav
const menuShowBtn = document.querySelector('.fa-bars');
const menuNav = document.querySelector('#menu-nav');

menuShowBtn.addEventListener('click', showMenu);

function showMenu(e){
    if(e.target.classList.contains('fa-times')){
        menuNav.classList.add('d-none');
        menuNav.classList.remove('d-block');
        menuShowBtn.classList.remove('fa-times');
        menuShowBtn.classList.add('fa-bars');
        return;
    }
    menuNav.classList.add('d-block');
    menuNav.classList.remove('d-none');
    menuShowBtn.classList.remove('fa-bars');
    menuShowBtn.classList.add('fa-times');
}

// show search menu
var searchMenuBtn = document.querySelector('.search-menu-btn');
var searchMenu = document.querySelector('.search-menu');
var angleDown = document.querySelector('.fa-angle-down');

searchMenuBtn.addEventListener('click', showSearchMenu);

function showSearchMenu(){
  searchMenu.classList.toggle('d-block');
  angleDown.classList.toggle('fa-angle-up');
}

var size = {
  width: window.innerWidth || document.body.clientWidth,
}

let perview = 3;

if(size.width < 768){
  perview = 2;
}

if(size.width < 450){
  perview = 1;
}

var swiper = new Swiper('.swiper-container', {
  slidesPerView: perview,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// first slider

let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector(".arrow1"),
  arrowRight = document.querySelector(".arrow2"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();




// chat slider

var chatslider = chatsliderImages = document.querySelectorAll(".chat-slide"),
chatarrowLeft = document.querySelector(".chat-arrow1"),
chatarrowRight = document.querySelector(".chat-arrow2"),
chatcurrent = 0;


// Clear all images
function chatreset() {
  for (let i = 0; i < chatsliderImages.length; i++) {
    chatsliderImages[i].style.display = "none";
  }
}

// Init slider
function chatstartSlide() {
  chatreset();
  chatsliderImages[0].style.display = "block";
}

// Show prev
function chatslideLeft() {
  chatreset();
  chatsliderImages[chatcurrent - 1].style.display = "block";
  chatcurrent--;
}

// Show next
function chatslideRight() {
  chatreset();
  chatsliderImages[chatcurrent + 1].style.display = "block";
  chatcurrent++;
}

// Left arrow click
chatarrowLeft.addEventListener("click", function() {
  if (chatcurrent === 0) {
    chatcurrent = chatsliderImages.length;
  }
  chatslideLeft();
});

// Right arrow click
chatarrowRight.addEventListener("click", function() {
  if (chatcurrent === chatsliderImages.length - 1) {
    chatcurrent = -1;
  }
  chatslideRight();
});

chatstartSlide();



// medicines slider

var medicineslider = medicinesliderImages = document.querySelectorAll(".medicine-slide"),
medicinearrowLeft = document.querySelector(".medicine-arrow1"),
medicinearrowRight = document.querySelector(".medicine-arrow2"),
medicinecurrent = 0;


// Clear all images
function medicinereset() {
  for (let i = 0; i < medicinesliderImages.length; i++) {
    medicinesliderImages[i].style.display = "none";
  }
}

// Init slider
function medicinestartSlide() {
  medicinereset();
  medicinesliderImages[0].style.display = "block";
}

// Show prev
function medicineslideLeft() {
  medicinereset();
  medicinesliderImages[medicinecurrent - 1].style.display = "block";
  medicinecurrent--;
}

// Show next
function medicineslideRight() {
  medicinereset();
  medicinesliderImages[medicinecurrent + 1].style.display = "block";
  medicinecurrent++;
}

// Left arrow click
medicinearrowLeft.addEventListener("click", function() {
  if (medicinecurrent === 0) {
    medicinecurrent = medicinesliderImages.length;
  }
  medicineslideLeft();
});

// Right arrow click
medicinearrowRight.addEventListener("click", function() {
  if (medicinecurrent === medicinesliderImages.length - 1) {
    medicinecurrent = -1;
  }
  medicineslideRight();
});

medicinestartSlide();





// healthcare slider

var healthcareslider = healthcaresliderImages = document.querySelectorAll(".healthcare-slide"),
healthcarearrowLeft = document.querySelector(".healthcare-arrow1"),
healthcarearrowRight = document.querySelector(".healthcare-arrow2"),
healthcarecurrent = 0;


// Clear all images
function healthcarereset() {
  for (let i = 0; i < healthcaresliderImages.length; i++) {
    healthcaresliderImages[i].style.display = "none";
  }
}

// Init slider
function healthcarestartSlide() {
  healthcarereset();
  healthcaresliderImages[0].style.display = "block";
}

// Show prev
function healthcareslideLeft() {
  healthcarereset();
  healthcaresliderImages[healthcarecurrent - 1].style.display = "block";
  healthcarecurrent--;
}

// Show next
function healthcareslideRight() {
  healthcarereset();
  healthcaresliderImages[healthcarecurrent + 1].style.display = "block";
  healthcarecurrent++;
}

// Left arrow click
healthcarearrowLeft.addEventListener("click", function() {
  if (healthcarecurrent === 0) {
    healthcarecurrent = healthcaresliderImages.length;
  }
  healthcareslideLeft();
});

// Right arrow click
healthcarearrowRight.addEventListener("click", function() {
  if (healthcarecurrent === healthcaresliderImages.length - 1) {
    healthcarecurrent = -1;
  }
  healthcareslideRight();
});

healthcarestartSlide();

