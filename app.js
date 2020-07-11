var currentDay = document.querySelector("#currentDay");
var timeBlocks = document.querySelector(".container"); 
var hourString = moment().format('H');
var hourNum = parseInt(hourString);
// console.log(hourNum);
// console.log(typeof hourNum);

// Add current date to the top of the page
currentDay.textContent = moment().format('dddd, MMM Do');

// Compare the current hour with each of the timeblock's hours
$(".col-md-10").each(function(){
    var dataTime = $(this).attr("data-time");
    var dataNum = parseInt(dataTime);
    // console.log(dataNum);
    if(hourNum < dataNum){
        $(this).addClass("future");
    }else if(hourNum === dataNum){
        $(this).addClass("present");
    }else{
        $(this).addClass("past");
    }  
})

