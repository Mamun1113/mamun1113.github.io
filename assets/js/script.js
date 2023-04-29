"use strict";

$(document).scroll(function () {
  $("section").each(function () {
    if (
      $(this).position().top - 50 <= $(document).scrollTop() &&
      $(this).position().top + $(this).outerHeight() > $(document).scrollTop()
    ) {
      $("ul.navbar-nav > li").removeClass("active");
      $(".navbar-nav ." + $(this).attr("id") + "-nav").addClass("active");
    }
  });
});
