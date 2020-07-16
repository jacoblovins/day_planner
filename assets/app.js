var hourString = moment().format('H');
var hourNum = parseInt(hourString);

// Add current date to the top of the page
$("#currentDay").text(moment().format('dddd, MMM Do'));

// Get hour and am or pm for time block label
function hourLabel(i) {
    var timeOfDay = "";
    if (i < 12) {
        timeOfDay = i + "am";
    } else {
        timeOfDay = i + "pm";
    }
    return timeOfDay;
}

// Set time blocks
for (var i = 9; i <= 17; i++) {
    var row = $('<div class="row">');
    var timeCol = $('<div class="col-md-1 hour">' + hourLabel(i) + '</div>');
    var taskCol = $('<textarea class="todo col-md-9" id=' + i + '></textarea>');
    var delCol = $('<button class="col-md-1 btn delBtn d-flex justify-content-center align-items-center"><i class="fas fa-trash-alt"></i></button>');
    var saveCol = $('<button class="col-md-1 btn saveBtn d-flex justify-content-center align-items-center"><i class="fas fa-save"></i></button>');
    row.append(timeCol, taskCol, delCol, saveCol);
    $(".container").append(row);
    hourLabel(i);
    saveTodos();
}

// Compare the current hour with each of the timeblock's hours
$(".col-md-9").each(function () {
    var dataTime = $(this).attr("id");
    var dataNum = parseInt(dataTime);

    // assign colors based on time
    if (hourNum < dataNum) {
        $(this).addClass("future");
    } else if (hourNum === dataNum) {
        $(this).addClass("present");
    } else {
        $(this).addClass("past");
    }
});

//Retrieving events from local storage
function saveTodos() {
    $(".todo").each(function () {
        var inputId = $(this).attr("id");
        $(this).val(localStorage.getItem(inputId));
    });
};

//Saving events into local storage
$(".saveBtn").click(function () {
    var scheduleInputs = $(this).siblings(".todo").val();
    var inputsLocation = $(this).siblings(".todo").attr("id");
    localStorage.setItem(inputsLocation, scheduleInputs);
});

// Delete events from textarea and localstorage individually 
$(".delBtn").click(function () {
    if ($(this).siblings(".todo").val() !== "") {

        // if the text area is empty confirm the user wants to delete the event
        var ask = confirm("Are you sure you want to delete this event?");
        if (ask) {
            $(this).siblings(".todo").val("");
            localStorage.removeItem($(this).siblings(".todo").attr("id"));
        } else {
            return;
        }
    } else {
        return;
    }
});
