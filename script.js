// Loads date and month.
var date = new Date();
var months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

document.getElementById("date").innerHTML = months[date.getMonth()] + " " + date.getDate();

// To do list.
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
localStorage.setItem("tasks", JSON.stringify(tasks));

function newToDo() {
    var subject = prompt("What is it for?");
    var description = prompt("What is the task?");
    var dueTime = prompt("When is it due?");
    var confirmation = confirm("Add [" + subject.toUpperCase() + "] " + description + " due " + dueTime + "?");
    if (confirmation == true) {
        const task = {
            subject: subject.toUpperCase(),
            description: description,
            dueTime: dueTime,
        }
    
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        showToDo();
    }
}

function showToDo() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = tasks.map(task => {
            return `<li class="taskSegment">[${task.subject}] ${task.description} due ${task.dueTime}</li>`;
    }).join("");
}

const taskSegment = document.getElementById("taskList");

taskSegment.onclick = function(event) {
    var element = event.target;
    if (event.target.nodeName == "LI") {
        var confirmation = confirm("Are you sure you want to remove this task?");
        if (confirmation == true) {
                var taskRemovable = tasks.indexOf(element);
                console.log
            
                tasks.splice(taskRemovable);
                localStorage.setItem("tasks", JSON.stringify(tasks));
                
                element.remove();
            }
    }
}

// Load stuff when opening page.
showToDo();