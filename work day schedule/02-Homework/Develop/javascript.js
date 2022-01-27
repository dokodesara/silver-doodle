var dateEl = document.getElementById("currentDay");
var dateElement = document.querySelector("#currentDay");
var today = moment();
const description = document.querySelector(".description");
const saveBtn =document.querySelector (".saveBtn");
console.log(saveBtn)

function timeUpdate() {
    dateEl.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}

function save(element,saveName) {
    localStorage.setItem(saveName,element.value);
}

setInterval (timeUpdate,1000);


$(".saveBtn").click(function (event) {
    event.preventdefault();
    let hour = $(this).parent().attr("id")
    let description =($(this.previousElementSibling).val())
    console.log(hour);
    console.log(description);
    localStorage.setItem(hour,description);

});

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

function times(){
    var current = moment().hour()
    $ (".time-block").each(function(){
        var rowTime =parseInt($(this).attr("id").split('-')[1])
        if (rowTime<current){
            $ (this).addClass("past");

        }
        else if (rowTime===current){
            $ (this).addClass("present");
            $ (this).removeClass("past");

        }
        else{
            $ (this).addClass("future");
            $ (this).removeClass("past");
            $ (this).removeClass("present");
        }
    })
    
}

times();