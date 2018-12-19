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

// get users position longitude and latitude

var getLoc = document.querySelector('.detect-location-btn');
getLoc.addEventListener('click', getLocation);

var locationInput = document.querySelector('#location');

function getLocation(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
  
        //GET USER CURRENT LOCATION
        var locCurrent = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
        //CHECK IF THE USERS GEOLOCATION IS IN AUSTRALIA
        var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'latLng': locCurrent }, function (results, status) {
                var locItemCount = results.length;
                var locCountryNameCount = locItemCount - 1;
                var locCountryName = results[locCountryNameCount].formatted_address;      
              locationInput.value = locCountryName;             
        });
    })
  }
}

// geo code function to get location when user enter the location in form

locationInput.addEventListener('keyup', geocode);

var addressbook = document.querySelector('.address-book-ul');

function geocode(){
  var mylocation = locationInput.value;
  axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
    params:{
      address: mylocation,
      key:'AIzaSyCfI7seM5_y_nqqccFrcHoNVdag0tW6dIY'
    }
  })
  .then(function(response){

    
    var results = response.data.results;
    var ul = '<ul class="search-addresses mt-1 bg-white">';
    for(i=0; i<results.length; i++){
      ul += `
      <li class="search-result"> ${results[i].formatted_address}</li>
      `;
    }

    ul += '</ul>';

    addressbook.innerHTML = ul;

  })
  .catch(function(err){
    console.log(err);
  })
}

addressbook.addEventListener('click', getSearchResult);

    function getSearchResult(e){
      if(e.target.classList.contains('search-result')){
        locationInput.value = e.target.innerHTML;
      }
    }


    // show search query results

var searchInput = document.querySelector('#search');
var searchQuery = document.querySelector('.search-query');
var searchInputForm = document.querySelector('.search-input-form')
searchInput.addEventListener('focus', function(){
  searchQuery.classList.add('d-block');
});

searchInput.addEventListener('blur', function(){
  searchQuery.classList.remove('d-block');
});

searchInputForm.addEventListener('click', function(e){
  if(e.target.classList.contains('search-query-result')){
    searchInput.value = e.target.innerHTML;
  }
});


// swiper for latest posts

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
