///////////////////////////////////Init///////////////////////////////////
let currentDay = $("#currentDay");
let textArea = $(".textarea");
var myObj = {};
let textAreaDataNumber;
let textAreaValue;
var Tvalue;
var Dnumber;
var theObj = {
    9 : null,
    10 : null,
    11 : null,
    12 : null,
    13 : null,
    14 : null,
    15 : null,
    16 : null,
    17 : null
}

///////////////////////////////////Live-time///////////////////////////////
updateCurrentTime();
setInterval(updateCurrentTime, 1000);

function updateCurrentTime() {
    currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a')); // March 16th 2021, 10:42:35 am
}

///////////////////////////////////Color-code///////////////////////////////
$(textArea).each(function(number, item) {
    if (parseInt($(item).data("number")) < moment().hour()) {
        $(item).attr("class", "past");
    } else if (parseInt($(item).data("number")) > moment().hour()) {
        $(item).attr("class", "future");
    } else {
        $(item).attr("class", "present");
    }
})

///////////////////////////////////Add-to-localStorage//////////////////////
$(".saveBtn").click(function() {
    textAreaDataNumber = $(this).parent().children(":nth-child(2)").data("number");
    textAreaValue = $(this).parent().children(":nth-child(2)").val();
    var key = textAreaDataNumber;
    var value = textAreaValue;
    theObj[key] = value;
    localStorage.setItem("values", JSON.stringify(theObj));
})

///////////////////////////////////Get-from-localStorage/////////////////////
function paste() {
    myObj = JSON.parse(localStorage.getItem("values"));
    Tvalue = Object.values(myObj);
    $.each(textArea, function (i, val) {
        var x = Tvalue[i];
        $(this).val(x);
        console.log(localStorage);
    });
}

paste();