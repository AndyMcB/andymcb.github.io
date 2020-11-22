
$('document').ready(function() {
  $("button").click(function(){
    console.log("clicked");
    $("html, body").animate({scrollTop: 0}, 1000);
  });
});