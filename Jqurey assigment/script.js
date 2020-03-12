
$(document).ready(function() {

  //Man behöver göra en variabel för de elementen som man
  //kommer att ta bort då variabeln förvarar den ordinarie kopian.
  // the count boxes räknar alla li element så när man tar bort en li via checkbox så finns det fortfarande information om hur många det fans från början.
  // samt så sparas li och blir "hide" och det gör det enklare att restore då det finns en gömd kopia att hämta.
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
  //Clear the check color of the checkbox.
  // you ned the id of the button, class of all your checkboxes.
  // so when click on the button it checkes the checked boxes and changes the color to the beginer color.
  // i have gray as a base color in my css. 
  $("#btn-clear").click(function(){
   $(".check-b li input:checked").parent().css("background-color","grey");

  });

  //COLOR BUTTONS
  //when click any color button and check any box the color is going to change to the buttons css.background color.
  //you need to put parent there because you can not change the color of the child element because that do not have a background.
  $(".color-btn").click(function(event){
    let color = $(this).css("background-color"); 
    $("input:checked").parent().css("background-color", color);
  });
  
 //BUTTON APPLY 
 //you need to have a span event in the li html tag
 //when you click the button the text that you type in is becoming a variable and
 //then sends it to the span element as a string. 
  $("#btn-apply").click(function(){
      var str = $("#myText").val();
      $("input:checked").next("span").text(str);
  });

//BUTTON REMOVE this is also connected to the counter
//when button is clicked the check box is going to be removed by the detach().
// counter check how many removed elements that are taken away.
// length event is doing that.
//counter needs span to change the text counter. 
  $("#btn-rem").click(function(){
    let removed = $("input:checked").parent().detach();
    count += removed.length;
    $(".span-counter").text(count);
  });

//BUTTON RESTOR this is also connected to the counter
//id of button click it resets all the ul (li) boxes that where removed.
//(boxes) = is the varieble in the begining.
// counter = 0; restore it to the original value vilket är 0. 
// span class an text is changeing the text and count is the variable in the begining. 
  $("#btn-res").click(function(){
     $("ul").append(boxes);
     count=0;
     $(".span-counter").text(count);
  }); 
}); 





