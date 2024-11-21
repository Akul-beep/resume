window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

var angle = 0;
var opacity = 0;
$('.menu-img').on('click', function() {
    angle += 90;
    $('.menu-img').css('transform','rotate(' + angle + 'deg)');
    $('.header').slideToggle();
});

$('.conocosafe').on('click', function() {
  $('.conocosafe-proj').slideToggle();
  $('.birthday-proj').slideUp();
  $('.happy-proj').slideUp();
});

$('.birthday').on('click', function() {
  $('.conocosafe-proj').slideUp();
  $('.birthday-proj').slideToggle();
  $('.happy-proj').slideUp();
});

$('.happy').on('click', function() {
  $('.conocosafe-proj').slideUp();
  $('.birthday-proj').slideUp();
  $('.happy-proj').slideToggle();
});

async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
}
  
  
function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

typeSentence("Building Intelligence, Byte by Byte!", "#sentence");

const scrollOffset = 5;
 
const scrollElements = document.querySelectorAll(".js-scroll");
 
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
 
const displayScrollElement = (i) => {
  scrollElements[i].classList.add('scrolled');
}
 
const hideScrollElement = (i) => {
    scrollElements[i].classList.remove('scrolled');
}
 
const handleScrollAnimation = (i) => {
  if (elementInView(scrollElements[i], scrollOffset)) {
      displayScrollElement(i);
  } else {
    hideScrollElement(i);
  }
}
 
window.addEventListener('scroll', () => {
  for(let i = 0; i < scrollElements.length; i++) {
    handleScrollAnimation(i);
  }
})

$('.toggle-img').on('click', function() {
  console.log("clicked");
  // entire body dark
  var element = document.body;
  element.classList.toggle("dark-mode");
  
  // cursor turns white
  document.querySelector(".cursor-dm").classList.toggle("darkmode-bkg");

  // images turn white
  const darkModeImages = document.querySelectorAll(".dm-img");
  for(let i = 0; i < darkModeImages.length; i++) {
    darkModeImages[i].classList.toggle("dark-mode-img");
  }

  // header text turns white
  const darkModeElements = document.querySelectorAll(".dm-text");
  for(let i = 0; i < darkModeElements.length; i++) {
    darkModeElements[i].classList.toggle("darkmode-text");
  }

  // toggle between sun and moon images
  document.querySelector(".darkmode-img").classList.toggle("hide-img");
  document.querySelector(".lightmode-img").classList.toggle("display-img");

  // toggle dark and light mode social media images
  document.querySelector(".linkedin-light").classList.toggle("hide-img");
  document.querySelector(".linkedin-dark").classList.toggle("display-img");
});