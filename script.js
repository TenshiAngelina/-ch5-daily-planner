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

  // Applies the past, present, or future class to each time
  
  $(".time-block").each(function(){
    var scheduleHour = parseInt($(this).attr("id").split("-")[1]);
    var currentHour = today.hour();
    console.log(scheduleHour, currentHour);
    if (scheduleHour < currentHour) {
      $(this).addClass("past");
    } else if (currentHour === scheduleHour) {
      $(this).addClass("present");
      $(this).removeClass("past");
    } else {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    };
  });

  // Gets any user input that was saved in localStorage and set

  $(".time-block").each(function() {
    var timeBlock = $(this).attr("id");
    $(this).children(".description").val(localStorage.getItem(timeBlock));
  });

});
