//define functions here
function getIt() {
  // The function should bind a click event to the p tag. When the paragraph is clicked, the function should alert "Hey!".
  $('p').on('click', function() {
    alert('Hey!');
  });
};

function frameIt() {
  // The function should bind the load event that adds the class tasty to the image to add a red frame to the image.
  $('img').on('load', function() {
      $(this).addClass("tasty");
      $('#tasty').css('border-color', 'red');
  });
};

function pressIt() {
  // The function should bind a keydown event to the input field of the form that alerts a user when they have pressed the g key.
  $(document).on('keydown', function(key) {
    if (key.which === 71) {
      alert('g was pressed');
    };
  });
};

function submitIt() {
  // The function should bind a submit event to the form that alerts "Your form is going to be submitted now.".
  $(document).on('submit', function() {
    alert("Your form is going to be submitted now.");
  });
};

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
// call functions here

});
//
// $('h1').on("eventname", function(){
//     //action you want taken
// });
//
// $('img').on('load', function(){
//   //actions you want to happen
// });
//
// $(document).on('keypress', function(key) {
//   if (key.which == 13){
//     alert('enter was pressed');
//   }
// });
//
// $(document).on('keyup', function(key) {
//   if (key.which == 82){
//     alert('r was pressed');
//   }
// });
//
// $(document).on('keydown', function(key) {
//   if(key.which == 83){
//       alert('s was pressed');
//   }
// });
//
// $("form").on("submit", function() {
//   if ($( "input:first" ).val() === "correct") {
//     alert('your form is going to be submitted now');
//     return;
//   }
//   alert("you entered the wrong value");
//   return;
// });
