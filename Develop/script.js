$(document).ready(function () {
  var currentTime = moment();

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

  var hours = {};
  // adding current time
  moment().format();
  var d = moment().format("dddd, MMMM Do");
  var curTime = $(`<div class="time-block"><h5>${d}</h5></div`);
  $("#currentDay").append(curTime);
  //adding rows and sections
  for (var i = 0; i < 9; i++) {
    hours[hourValue[i]] = moment();
    var newRow = $(`
      <div id=${hourId[i]} class='row'>
        <span class='col-sm-1 hour'>${hourValue[i]}</span>
        <textarea class='col-sm-10 past present future'></textarea>
        <div class='col-sm-1 display-icon saveBtn btn'>
        <i class='fas fa-lock'></i>
      </div>
      </div>
    `);
    $(".container").append(newRow);
  }
});
// textArea.on("change", function () {});
// btnSave.on("click", function () {});

// version2=======================
 // var textArea = $(
    //   `<textarea class='col-sm-10 past present future'></textarea>`
    // );
    // var btnSave = $(`
    //   <div class='col-sm-1 display-icon saveBtn btn'>
    //     <i class='fas fa-lock'></i>
    //   </div>
    // `);
    // $(".container").append(newRow);
    // $("#" + hourId[i]).append(textArea, btnSave);

// version1=======================
//creating textarea
// for (var i = 0; i < 1; i++) {
//   var textArea = $("<input>");
//   textArea.addClass("col-sm-10 past present future ");
//   $(".row").append(textArea);
// }
// //adding save button
// for (var i = 0; i < 1; i++) {
//   var btnSave = $("<div><i class='fas fa-lock'></i></div>");
//   btnSave.addClass("col-sm-1 display-icon  saveBtn btn ");
//   $(".row").append(btnSave);
// }

//   $('.display-icon').click(function(){
//     -----FONT AWESOME ICON------
//     });
