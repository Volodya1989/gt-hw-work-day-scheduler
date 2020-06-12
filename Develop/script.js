$(document).ready(function () {
  var hourId = [
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
  ];
  var buttonId = [
    "btn-Nine",
    "btn-Ten",
    "btn-Eleven",
    "btn-Twelve",
    "btn-Thirteen",
    "btn-Fourteen",
    "btn-Fifteen",
    "btn-Sixteen",
    "btn-Seventeen",
  ];
  var hourValue = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
  ];
  // adding current time
  moment().format();
  var d = moment().format("dddd, MMMM Do");
  var curTime = $(`<div class="time-block"><h5>${d}</h5></div`);
  $("#currentDay").append(curTime);
  //adding rows and hours
  for (var i = 0; i < 9; i++) {
    var newRow = $(
      `<div class='row'><div clas='hour col-sm-1' id =${hourId[i]}><h6>${hourValue[i]}</h6></div></div>`
    );
    $(".container").append(newRow);
  }
  //creating textarea
  for (var i = 0; i < 1; i++) {
    var textArea = $("<input>");
    textArea.addClass("col-sm-8 past present future ");
    $(".row").append(textArea);
  }
  //adding save button
  for (var i = 0; i < 1; i++) {
    var btnSave = $("<div><i class='fas fa-lock'></i></div>");
    btnSave.addClass(" display-icon col-sm-1 saveBtn btn ");
    $(".row").append(btnSave);
  }

  //   $('.display-icon').click(function(){
  //     -----FONT AWESOME ICON------
  //     });
});
