// Volodymyr Petrytsya  06/14/20

$(document).ready(function () {
  //assign hour id in array
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
  //assign hours as object
  var hours = {
    9: "9AM",
    10: "10AM",
    11: "11AM",
    12: "12PM",
    13: "1PM",
    14: "2PM",
    15: "3PM",
    16: "4PM",
    17: "5PM",
  };
  // extracting keys from the object  in order to comparis later on with current time
  var hoursKeys = Object.keys(hours);

  // adding current data that is displayed in header
  var currentDate = moment();
  var timeBlock = $(
    `<div class="time-block"><h5>${currentDate.format(
      "dddd, MMMM Do"
    )}</h5></div`
  );
  $("#currentDay").append(timeBlock);
  for (var i = 0; i < hoursKeys.length; i++) {
    //declaring variables to use for static and current time comparison
    var hourKey = hoursKeys[i];
    var hourValue = hours[hourKey];
    var currentHour = hourKey;
    //setting our static time using keys from 'hours' object
    var currentTime = moment().set({ hour: currentHour, minute: 0, second: 0 });
    var nextTime = moment().set({
      hour: parseInt(currentHour) + 1,
      minute: 0,
      second: 0,
    });
    //using moment js methods in order actually to comparis current time with our daily scheduler time
    var isCurrentHour = currentDate.isBetween(currentTime, nextTime);
    var isFutureHour = currentDate.isBefore(currentTime);
    //manipulating with classes to change background color
    var hourBlockClassName = "past";
    if (isCurrentHour) {
      hourBlockClassName = "present";
    } else if (isFutureHour) {
      hourBlockClassName = "future";
    }
    //adding HTML structure
    var newRow = $(`
      <div id=${hourId[i]} class='row' data-hour-key=${hourKey}>
        <span class='col-sm-1 hour'>${hourValue}</span>
        <textarea class='col-sm-10 ${hourBlockClassName}'></textarea>
        <div class='col-sm-1 display-icon saveBtn btn'>
          <i class='fas fa-lock'></i>
        </div>
      </div>
    `);
    $(".container").append(newRow);
  }
  //storing users info in local storage
  //using 'each' jQuery method to iterate though rows
  $(".row").each(function () {
    //using 'this' keyword to obtain appropriate information
    var hourKey = $(this).attr("data-hour-key");
    var textArea = $(this).find("textarea");
    var saveBtn = $(this).find(".saveBtn");
    //if there is something in local storage, then we return in textarea
    var storageNotes = localStorage.getItem(hourKey);
    if (storageNotes) {
      storageNotes = JSON.parse(storageNotes);
      textArea.val(storageNotes);
    }
    //saving to local storage
    saveBtn.on("click", function () {
      var textArea = $(this).parent().find("textarea");
      localStorage.setItem(hourKey, JSON.stringify(textArea.val()));
    });
  });
});
