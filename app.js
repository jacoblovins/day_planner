var currentDay = document.querySelector("#currentDay");
var timeBlocks = document.querySelector(".container"); 
var hourString = moment().format('H');
var hourNum = parseInt(hourString);
console.log(hourNum);
console.log(typeof hourNum);

currentDay.textContent = moment().format('dddd, MMM Do');

// possible for each loop here
// $(".row").each(function(){
//     var blockHr = parseInt($(this).$(".col-md-10").attr("data-time"));
//     console.log(blockHr);

// })

$(".col-md-10").each(function(){
    var dataTime = $(this).attr("data-time");
    var dataNum = parseInt(dataTime);
    console.log(dataNum);
    if(hourNum < dataNum){
        $(this).addClass("future");
    }else if(hourNum === dataNum){
        $(this).addClass("present");
    }else{
        $(this).addClass("past");
    }
    
})

// function timeColor(){
//     if(){

//     }else if() {

//     }
// }