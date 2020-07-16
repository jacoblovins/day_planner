var hourString = moment().format('H');
var hourNum = parseInt(hourString);

// Add current date to the top of the page
$("#currentDay").text(moment().format('dddd, MMM Do'));

// Compare the current hour with each of the timeblock's hours
$(".col-md-9").each(function(){
    var dataTime = $(this).attr("id");
    var dataNum = parseInt(dataTime);
    
    // assign colors based on time
    if(hourNum < dataNum){
        $(this).addClass("future");
    }else if(hourNum === dataNum){
        $(this).addClass("present");
    }else{
        $(this).addClass("past");
    } 
});

//Retrieving events from local storage
(function saveTodos(){
    $(".todo").each(function(){
        var inputId = $(this).attr("id");
        $(this).val(localStorage.getItem(inputId));
    });
})();

//Saving events into local storage
$(".saveBtn").click(function(){
    var scheduleInputs = $(this).siblings(".todo").val();
    var inputsLocation = $(this).siblings(".todo").attr("id");
    localStorage.setItem(inputsLocation,scheduleInputs);
});

// Delete events from textarea and localstorage individually 
$(".delBtn").click(function(){
    if($(this).siblings(".todo").val() !== ""){
       
        // if the text area is empty confirm the user wants to delete the event
        var ask = confirm("Are you sure you want to delete this event?");
        if(ask){
            $(this).siblings(".todo").val("");
            localStorage.removeItem($(this).siblings(".todo").attr("id"));
        }else{
            return;
        }
    } else {
        return;
    }
});
