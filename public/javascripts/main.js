
$('document').ready(function() {
  $(".top").click(function(){
    console.log("clicked");
    $("html, body").animate({scrollTop: 0}, 1000);
  });
});