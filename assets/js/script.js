let currentDay = $("#currentDay");
let textArea = $(".textarea");
let listArray = [];
var myVal;

updateCurrentTime();
setInterval(updateCurrentTime, 1000);

function updateCurrentTime() {
    currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a')); // March 16th 2021, 10:42:35 am
}

$(textArea).each(function(number, item) {
    if (parseInt($(item).data("number")) < moment().hour()) {
        $(item).attr("class", "past");
    } else if (parseInt($(item).data("number")) > moment().hour()) {
        $(item).attr("class", "future");
    } else {
        $(item).attr("class", "present");
    }
    // console.log(item);
})

// $.each(textArea, function () {
//     var myVal = localStorage.setItem($(textArea).val(), JSON.stringify());
//     listArray.push(myVal);
// });
// console.log(listArray);
// console.log(localStorage);
// $.each(textArea, function() {
//     var myVal = $("textarea").val();
//     console.log(myVal);
// });

// $(textArea).each(function(item) {
//     myVal = localStorage.setItem("listArray", $(item).val());
//     // console.log(myVal);
//     // console.log(listArray);
//     console.log(localStorage);
//     // console.log(myVal);
// })
$(textArea).each(function(index, element) {
    var textValue = $(element).val();
    listArray.push(textValue);
    localStorage.setItem(index, textValue);
    textArea = localStorage.getItem(listArray);
})
console.log(localStorage);