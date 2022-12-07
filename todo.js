// console.log();
var Lindex = 0;
var Tindex = 100;
var Cindex = 200;
var tasksC = 0;
var tasksA = 0;
function newTask(){
    if(Lindex==99){
        Lindex-=99;
        Tindex-=99;
        Cindex-=99;
    }
    var task = document.getElementById('typedTask').value;
    document.getElementById('list').innerHTML += ('<li id="' + Lindex.toString() + '"style="background-color:'+ getColor()+ '"' +'>' + task);
    document.getElementById('list').innerHTML += ('<button class="trashButton" id="' + Tindex.toString() +'" onclick="deleteTask(' +Lindex.toString() + ',' +Tindex.toString() + ',' + Cindex.toString() +')"></button>');
    document.getElementById('list').innerHTML += ('<button class="checkButton" id="' + Cindex.toString() +'" onclick="completeTask(' +Lindex.toString() + ',' +Tindex.toString() + ',' + Cindex.toString() +')"></button>');    
    document.getElementById('list').innerHTML += ('</li>');
    document.getElementById('typedTask').value = '';
    Lindex++;
    Tindex++;
    Cindex++;
}
function deleteTask(L,T,C){
    // tasksA+=1;
    // document.getElementById('taskCountA').innerHTML = ("Tasks Abandoned: " + tasksA);
    $("#" + L).fadeOut("slow");
    $("#" + T).fadeOut("slow");
    $("#" + C).fadeOut("slow");
    // document.getElementById(C).remove();
}
function completeTask(L,T,C){
    tasksC+=1;
    document.getElementById('taskCountC').innerHTML = ("Tasks Completed: " + tasksC);
    $("#" + L).fadeOut("slow");
    $("#" + T).fadeOut("slow");
    $("#" + C).fadeOut("slow");

    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").play()
    setTimeout(function(){
        document.getElementById("overlay").pause();
        document.getElementById("overlay").style.display = "none";}, 3000);
}
function clearTasks(){
    document.getElementById('list').innerHTML = ('');
}
function getColor(){ 
    return "hsl(" + 360 * Math.random() + ',' + 75 + '%,' + 86 + '%)'
}

function celebrateOn() {
    document.getElementById("overlay").style.display = "block";
}
  
function celebrateOff() {
    document.getElementById("overlay").style.display = "none";
}

var text = document.getElementById("typedTask");

//allows pressing enter instead of plus to add task
text.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    // event.preventDefault();
    document.getElementById("headButt").click();
  }
});