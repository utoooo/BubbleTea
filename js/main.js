$(function () {
  /*=================================================
 Hamburger Menu
  ===================================================*/
  // Click Event
  $(".toggle_btn").on("click", function () {
    // #When there is an open class in the header
    if ($("#header").hasClass("open")) {
      // delete open class
      $("#header").removeClass("open");

      // #When there is no open class in the header
    } else {
      // Add open class
      // Adding the open class will apply the CSS for the open class, so the
      // Menu is displayed
      $("#header").addClass("open");
    }
  });

  // when you click on the screen when the menu is displayed
  $("#mask").on("click", function () {
    // delete open class and close menu
    $("#header").removeClass("open");
  });
});
