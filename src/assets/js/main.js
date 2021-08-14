$(document).ready(function () {
  let shown = localStorage.getItem("shown");
  if (!shown) {
    $("#cookies").click(function (e) {
      e.preventDefault();
      $(".cookie-banner").fadeOut();
      localStorage.setItem("shown", true);
    });
  } else {
    $(".cookie-banner").hide();
  }

  $('nav .nav-item a[href^="#"]').click(function (e) {
    e.preventDefault();

    var target = this.hash;
    $target = jQuery(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        500,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });
});

$(document).scroll(function () {
  var $nav = $("nav");
  $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
});

var swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
