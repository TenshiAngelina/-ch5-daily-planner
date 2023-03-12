var currentDay = $('#currentDay');
var today = dayjs();


currentDay.text(`Today is ${today.format('dddd, MMMM D, YYYY, HH:mm')}`);


$(function () {

  $(".saveBtn").click(function(){
    var textBody = $(this).siblings(".description").val();
    var timeBlock = $(this).parent().attr("id");
    localStorage.setItem(timeBlock, textBody);
    $("#save-message").removeClass("hidden");
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  var targetHour = $(".hour");
  var currentHour = today.format("HH:mm");
  if (currentHour > targetHour) {
    $(".time-block").addClass("future");
    $(".time-block").removeClass("past");
    $(".time-block").removeClass("present");
  } else if (currentHour < targetHour) {
    $(".time-block").addClass("past");
    $(".time-block").removeClass("present");
    $(".time-block").removeClass("future");
  } else {
    $(".time-block").addClass("present");
    $(".time-block").removeClass("past");
    $(".time-block").removeClass("future");
  };

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $(".time-block").each(function() {
    var timeBlock = $(this).attr("id");
    $(this).children(".description").val(localStorage.getItem(timeBlock));
  });

});
