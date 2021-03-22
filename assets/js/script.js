///////////////////////////////////Init////////////////////////////////////
let currentDay = $("#currentDay");
let textArea = $(".textarea");

///////////////////////////////////Live-time///////////////////////////////
updateCurrentTime();
setInterval(updateCurrentTime, 1000);

function updateCurrentTime() {
    currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}

///////////////////////////////////Color-code//////////////////////////////
$(textArea).each(function(number, item) {
    if (parseInt($(item).data("number")) < moment().hour()) {
        $(item).attr("class", "past");
    } else if (parseInt($(item).data("number")) > moment().hour()) {
        $(item).attr("class", "future");
    } else {
        $(item).attr("class", "present");
    }
})

////////////////////////////////////Saving/////////////////////////////////
$(".saveBtn").click(function() {
    var activity = $(this).siblings("textarea").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, activity);
    // console.log(hour);
    // console.log(activity);
    // console.log(localStorage);
});

////////////////////////////////////Loading/////////////////////////////////
function paste() {
    $("#hour-7 textarea").val(localStorage.getItem("hour-7"));
    $("#hour-8 textarea").val(localStorage.getItem("hour-8"));
    $("#hour-9 textarea").val(localStorage.getItem("hour-9"));
    $("#hour-10 textarea").val(localStorage.getItem("hour-10"));
    $("#hour-11 textarea").val(localStorage.getItem("hour-11"));
    $("#hour-12 textarea").val(localStorage.getItem("hour-12"));
    $("#hour-13 textarea").val(localStorage.getItem("hour-13"));
    $("#hour-14 textarea").val(localStorage.getItem("hour-14"));
    $("#hour-15 textarea").val(localStorage.getItem("hour-15"));
    $("#hour-16 textarea").val(localStorage.getItem("hour-16"));
    $("#hour-17 textarea").val(localStorage.getItem("hour-17"));
}

paste();