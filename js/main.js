//mCustomScrollbar
$(".vehicles__item--down").mCustomScrollbar({ theme: "dark" });

//click <a>, scroll down
function scroll(value) {
  $(".vehicles__item--down").mCustomScrollbar("scrollTo", value, {
    scrollEasing: "easeOut",
  });
}

$(".vehicles__item--nav ul li a").click(function () {
  if ($(this).attr("id") === "nav-cars") {
    scroll("#cars");
  }
});

//close vehicles__item--down section
let count = "";

$("#header .navbar .navbar--a").click(function () {
  if (count === "") {
    count = $(this).attr("id");
    $(this).addClass("active");

    if (count === "nav--vehicles") {
      //show menu
      $(".vehicles").removeClass("hide--vehicles");
      $(".vehicles__item--up").addClass("animate__fadeInDown");
      $(".vehicles__item--down").addClass("animate__fadeInUp");
    }
  } else {
    //count !== ""
    if ($(this).attr("id") === count) {
      //hide menu
      $(this).removeClass("active");
      count = "";
      // $(".vehicles").addClass("hide--vehicles");
      $(".vehicles__item--up").addClass("animate__fadeOutUp");
      $(".vehicles__item--down").addClass("animate__fadeOutDown");
      setTimeout(function () {
        $(".vehicles").addClass("hide--vehicles");
        $(".vehicles__item--up").removeClass("animate__fadeOutUp");
        $(".vehicles__item--down").removeClass("animate__fadeOutDown");
      }, 500);
    } else {
      //$(this).attr("id") !== count
      $("#header .navbar .navbar--a").removeClass("active");
      $(this).addClass("active");

      count = $(this).attr("id");
      if (count === "nav--vehicles") {
        $(".vehicles").removeClass("hide--vehicles");
        $(".vehicles__item--up").addClass("animate__fadeInDown");
        $(".vehicles__item--down").addClass("animate__fadeInUp");
      } else {
        // $(".vehicles").addClass("hide--vehicles");
        $(".vehicles__item--up").addClass("animate__fadeOutUp");
        $(".vehicles__item--down").addClass("animate__fadeOutDown");
        setTimeout(function () {
          $(".vehicles").addClass("hide--vehicles");
          $(".vehicles__item--up").removeClass("animate__fadeOutUp");
          $(".vehicles__item--down").removeClass("animate__fadeOutDown");
        }, 500);
      }
    }
  }
});
//close button
$(".vehicles__close").click(function () {
  $(".vehicles__item--up").addClass("animate__fadeOutUp");
  $(".vehicles__item--down").addClass("animate__fadeOutDown");

  setTimeout(function () {
    $(".vehicles").addClass("hide--vehicles");
    $(".vehicles__item--up").removeClass("animate__fadeOutUp");
    $(".vehicles__item--down").removeClass("animate__fadeOutDown");
  }, 500);
  $("#header .navbar .navbar--a").removeClass("active");
  count = "";
});
//animation-delay imgs
$(".vehicles__block").addClass("animate__animated animate__fadeInUp");

//SWIPER - CAROUSEL
const swiper = new Swiper(".swiper", {
  centeredSlides: true,
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//OUR VEHICLES__CAROUSEL
$(" .our-vehicles__list li").click(function () {
  $(" .our-vehicles__list li").removeClass("active");
  $(this).addClass("active");
});

//slideToggle-menu xs
$(".carousel__indicator--title").click(function () {
  $(".carousel__indicator--list").slideToggle();
  if (
    $(".carousel__indicator--title .carousel--icon").hasClass(
      "transform-rotate"
    )
  ) {
    $(".carousel__indicator--title .carousel--icon").removeClass(
      "transform-rotate"
    );
  } else {
    $(".carousel__indicator--title .carousel--icon").addClass(
      "transform-rotate"
    );
  }
});
$(".carousel__indicator--list li").click(function () {
  $(".carousel__indicator--title span").html($(this).html());
  $(".carousel__indicator--list").slideUp();
});
//carousel-indicators
let countCarousel = 0;
$(".carousel-control-prev").click(function () {
  $(".our-vehicles__list li").removeClass("active");
  if (countCarousel == 0) {
    countCarousel = 4;
  } else {
    countCarousel--;
  }
  $(".our-vehicles__list li").each(function (i) {
    if (i == countCarousel) {
      $(this).addClass("active");
      $(".carousel__indicator--title span").html($(this).html());
    }
  });
});

$(".our-vehicles__carousel .carousel-control-next").click(function () {
  $(".our-vehicles__list li").removeClass("active");
  if (countCarousel == 4) {
    countCarousel = 0;
  } else {
    countCarousel++;
  }
  $(".our-vehicles__carousel .our-vehicles__list li").each(function (i) {
    if (i == countCarousel) {
      $(this).addClass("active");
      $(".carousel__indicator--title span").html($(this).html());
    }
  });
});
//collapse / screen xs: ul collapse
let collapse = function () {
  let screenWidth = $(window).width();
  console.log(screenWidth);
  if (screenWidth < 560) {
    $(".footer__up--detail .collapse--ul").addClass("collapse");
  } else {
    $(".footer__up--detail .collapse--ul").removeClass("collapse");
  }
};
$(window).resize(function () {
  collapse();
});
$(document).ready(function () {
  collapse();
});
