//Current Date
$("#currentDay").text(moment().format('dddd, MMMM Do'));
//Current time hour
var currentHour= moment().format('h');
console.log(currentHour);
//Save Click works saves textarea and hour
$(".saveBtn").on("click",function(){
    var userEntry = $(this).siblings("textarea").val()
    var hour = $(this).parent().attr("id")
    //console.log(userEntry);
    //console.log(hour);
    localStorage.setItem(hour,userEntry)
})


//Local storage item and saves item when refreshed
//else if to change class depending on time 
var currentHourBlock = moment().hours()
console.log(currentHourBlock,currentHour)
for (i=9;i<18;i++){
    var storedData = localStorage.getItem("hour-"+i) || ""
   // console.log(storedData)
    $("#hour-"+i).children("textarea").val(storedData)
    if(i<currentHourBlock){
        $("#hour-"+i).children("textarea").addClass("past")
    }else if( i == currentHourBlock){
        $("#hour-"+i).children("textarea").addClass("present")
    }else if( i>currentHourBlock){
        $("#hour-"+i).children("textarea").addClass("future") 
    }
}
