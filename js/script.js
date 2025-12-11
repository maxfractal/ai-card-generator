$(document).ready(function() {
  //jquery load
  $("#slides").superslides({
    animation: "fade",
    play: 2950,
    pagination: false
  });
  //vanilla js call
  var typed = new Typed(".typed", {
    strings: [
	  "Product Manangement ^3950",	
      "User Experience ^3950",
      "User Centered Design ^3950",
      "Product Strategy ^2000",
      "UX Designer ^2000",
      "Product Designer ^2950"
    ],
    typeSpeed: 30,
    loop: true,
    startDelay: 2000,
    smartBackspace: true,
    showCursor: false
  });
  //owl carousel jquery
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      568: {
        items: 2,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      768: {
        items: 3,
        nav: false
      },
      1000: {
        items: 5,
        nav: true,
        loop: false
      },
      1024: {
        items: 5,
        nav: true,
        loop: false
      }
    }
  });

  var skillsTopOffset = $(".skillsSection").offset().top;
  var statsTopOffset = $(".statsSection").offset().top;
  var countUpFinished = false;

  $(window).scroll(function() {
    /* console.log(window.pageYOffset); */

    if (window.pageYOffset > skillsTopOffset - $(window).height() + 300) {
      //easy pie chart
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#fff",
        trackColor: "#b90d0d",
        scaleColor: false,
        lineWidth: 10,
        lineCap: "butt",
        onStep: function(from, to, percent) {
          $(this.el)
            .find(".percent")
            .text(Math.round(percent));
        }
      });
    }

    if (
      !countUpFinished &&
      window.pageYOffset > statsTopOffset - $(window).height() + 300
    ) {
      $(".counter").each(function() {
        var element = $(this);
        var endVal = parseInt(element.text());

        element.countup(endVal);
      });
      countUpFinished = true;
    }
  });

  $("data-fancybox").fancybox();

  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false
    }
  });

  $("#filters a").click(function() {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false
      }
    });
    return false;
  });

  $("#navigation li a").click(function(e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;
  console.log("navTop = " + navTop);

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    var body = $("body");

    if ($(window).scrollTop() >= navTop) {
      body.addClass("fixedNav");
    } else {
      body.removeClass("fixedNav");
    }
  }
});
