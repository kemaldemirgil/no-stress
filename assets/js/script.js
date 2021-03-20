let currentDay = $("#currentDay");
let textArea = $(".textarea");
let listArray = [];
var myVal;
var myValue;

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
})


let myNumArray = [];
let myValArray = [];
let theArray = [], myObj = {};
let finalObject = {};
var textAreaDataNumber;
var textAreaValue;
run();
$(".saveBtn").click(function(event) {
    textAreaDataNumber = $(this).parent().children(":nth-child(2)").data("number");
    textAreaValue = $(this).parent().children(":nth-child(2)").val();
    myObj = {
        textAreaDataNumber: textAreaDataNumber,
        textAreaValue: textAreaValue
    }
    theArray.push(myObj);
    for (let val of theArray) {
        if (finalObject[val.textAreaDataNumber]) {
            finalObject[val.textAreaDataNumber] = finalObject[val.textAreaDataNumber]
        }
    }
    console.log(finalObject);
    localStorage.setItem("values", JSON.stringify(finalObject));
    console.log(localStorage);
    console.log(textAreaDataNumber);
    console.log(textAreaValue);
})

function run() {
    var myValues = JSON.parse(localStorage.getItem("values"));
    if (myValues !== null) {
        finalObject = myValues;
    }
    refreshList();
}

function refreshList() {
    for (var i = 0; i < finalObject.length; i++) {
        var input = finalObject[i];
        var myText = textArea[i];
        myText.textContent = input;
    }
}
// console.log(localStorage);
// localStorage.clear();

    // myValArray.push(textAreaValue);
    // localStorage.setItem("myValArray", JSON.stringify(myValArray));




    // myObj [textAreaValue] = textAreaValue;
    // myArray.push({myObj: myObj});

    // var myStorage = [];
    // myStorage.push(textAreaDataNumber);
    // myStorage.push(textAreaValue);
    // myObj.myDataId = myStorage;
    // localStorage.setItem(myValue);

    // console.log(theArray);
    // console.log(myValArray);
    // run()









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

//     console.log(listArray);
//     console.log(localStorage);

// $(textArea).each(function(index, element) {
//     var textValue = $(element).val();
//     listArray.push(textValue);
//     localStorage.setItem(index, textValue);
//     textArea = localStorage.getItem(listArray);
// })

// $(".saveBtn").click(function(index) {
//     var textValue = $(textArea).val();
//     listArray.push(textValue);
//     localStorage.setItem(index, textValue);
// })

// $(textArea).each(function() {
//     textArea.val(localStorage.getItem(listArray));
// })

// $(".saveBtn").click(function(index, element) {
//     var textValue = $(element).val();
//     listArray.push(textValue.text());
//     localStorage.setItem(index, textValue);
//     
// 
// });


