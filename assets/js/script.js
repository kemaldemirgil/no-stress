let currentDay = $("#currentDay");
updateCurrentTime();
setInterval(updateCurrentTime, 1000);

function updateCurrentTime() {
    currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a')); // March 16th 2021, 10:42:35 am
}

$(".textarea").each(function(number, item) {
    if (parseInt($(item).data("number")) < moment().hour()) {
        $(item).attr("class", "past");
    } else if (parseInt($(item).data("number")) > moment().hour()) {
        $(item).attr("class", "future");
    } else {
        $(item).attr("class", "present");
    }
    // console.log(item);
})