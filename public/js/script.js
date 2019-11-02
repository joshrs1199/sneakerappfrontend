//
//   // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};
//
// // Get the navbar
// var navbar = document.getElementById("navbar");
//
// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;
//
// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
// if (window.pageYOffset >= sticky) {
// navbar.classList.add("sticky")
// } else {
// navbar.classList.remove("sticky");
// }
// }

// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

 window.onscroll = function myFunction() {
  if (window.pageYOffset > 300) {
    document.getElementsByTagName('nav')[0].classList.add('fixed-header');
    document.getElementsByTagName('nav')[0].classList.add('visible-title');
    document.getElementsByTagName('nav')[0].classList.add('visible-title');

  } else {
    document.getElementsByTagName('nav')[0].classList.remove('fixed-header');
    document.getElementsByTagName('nav')[0].classList.remove('visible-title');
    document.getElementsByTagName('div')[0].classList.remove('visible-title');

  }
}


// window.onscroll = function(){
//     if (window.scrollTop() >= 300) {
//         document.getElementById('nav').addClass('fixed-header');
//         document.getElementById('nav','div').addClass('visible-title');
//     }
//     else {
//           document.getElementById('nav').removeClass('fixed-header');
//         document.getElementById('nav','div').removeClass('visible-title');
//     }
// };
