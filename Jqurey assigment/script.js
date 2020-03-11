
$(document).ready(function() {

  let count =0;
  const boxes = $("li");
  
  
  // Check All
  $(".checkall").click(function() {
      $(":checkbox").attr("checked", true);
  });

  // Uncheck All
  $(".uncheckall").click(function() {
      $(":checkbox").attr("checked", false);
  });

  $("#btn-clear").click(function(){
   $(".check-b li input:checked").parent().css("background-color","grey");

  });

  //COLOR BUTTONS
  $(".color-btn").click(function(event){
    let color = $(this).css("background-color"); 


    $("input:checked").parent().css("background-color", color);
  });
  
 //BUTTON APPLY
  $("#btn-apply").click(function(){
      var str = $("#myText").val();
      $("input:checked").next("span").text(str);
  });


  $("#btn-rem").click(function(){
    let removed = $("input:checked").parent().detach();
    count += removed.length;
    $(".span-counter").text(count);
  });


  $("#btn-res").click(function(){
     $("ul").append(boxes);
     count=0;
     $(".span-counter").text(count);
  }); 
}); 





