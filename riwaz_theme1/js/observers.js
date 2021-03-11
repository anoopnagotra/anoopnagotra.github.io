$("#header-scroll").hide();
$(window).scroll(function() {
  if ($(this).scrollTop() > 650) {
    $('#header-scroll').slideDown();
    $('#header-full').slideUp(500);
  } else {
    $('#header-scroll').slideUp(500);
    $('#header-full').slideDown(500);
  }
});

// const header = document.querySelector("header");
// const sectionOne = document.querySelector(".home-intro");

// const sectionOneOptions = {
//   rootMargin: "-200px 0px 0px 0px"
// };

// const sectionOneObserver = new IntersectionObserver(function(
//   entries,
//   sectionOneObserver
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       header.classList.remove("nav-scrolled");
//     } else {
//       header.classList.add("nav-scrolled");
//     }
//   });
// },
// sectionOneOptions);

// // sectionOneObserver.observe(sectionOne);
