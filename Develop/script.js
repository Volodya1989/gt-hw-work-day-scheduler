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
  var hoursKeys = Object.keys(hours);

  // adding current time
  var currentDate = moment();
  var timeBlock = $(
    `<div class="time-block"><h5>${currentDate.format(
      "dddd, MMMM Do"
    )}</h5></div`
  );
  $("#currentDay").append(timeBlock);
  //adding rows and sections
  for (var i = 0; i < hoursKeys.length; i++) {
    var hourKey = hoursKeys[i];
    var hourValue = hours[hourKey];
    var currentHour = hourKey;
    var currentTime = moment().set({ hour: currentHour, minute: 0, second: 0 });
    var nextTime = moment().set({
      hour: parseInt(currentHour) + 1,
      minute: 0,
      second: 0,
    });
    var isCurrentHour = currentDate.isBetween(currentTime, nextTime);
    var isFutureHour = currentDate.isBefore(currentTime);
    var hourBlockClassName = "past";

    if (isCurrentHour) {
      hourBlockClassName = "present";
    } else if (isFutureHour) {
      hourBlockClassName = "future";
    }

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

  $(".row").each(function () {
    var hourKey = $(this).attr("data-hour-key");
    var textArea = $(this).find("textarea");
    var saveBtn = $(this).find(".saveBtn");
    var storageNotes = localStorage.getItem(hourKey);

    if (storageNotes) {
      storageNotes = JSON.parse(storageNotes);
      textArea.val(storageNotes);
    }

    saveBtn.on("click", function () {
      var textArea = $(this).parent().find("textarea");
      localStorage.setItem(hourKey, JSON.stringify(textArea.val()));
    });
  });
});
