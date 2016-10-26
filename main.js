$(document).ready(function() {
  
  $(".block-visible").click(function(){
    console.log("voici mon message");
    $(".block-hidden").slideToggle(1000);
  });
});