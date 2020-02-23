/*! Arrowmet v0.0.1 description-IT Service Company | (c) 2020 Arrowmet http://arrowmet.com/ */
$((function() {
  $(document).scroll((function() {
    var $nav = $("#header");
    var $logoText = $("#logoText");
    var $logoSvg = $("#logoSvg");
    $nav.toggleClass("fixed", $(this).scrollTop() > $nav.height());
    if ($(this).scrollTop() > $nav.height()) {
      $logoText.css("fill", "#4F4F4F");
      $logoSvg.css("transform", "translateX(0px)");
    } else {
      $logoText.css("fill", "#fff");
      $logoSvg.css("transform", "translateX(-30px)");
    }
  }));
}));
