
// Sidebar Navigation Toggle
    function toggleMenu(x) {
        x.classList.toggle("change");
        var x = document.getElementById("sidebar");
        if (x.style.visibility === "visible") {
            x.style.visibility = "hidden";
        } else {
            x.style.visibility = "visible";
        }
    }

// Task Form Show/Hide (when clicking CREATE button)
    function toggleTaskForm() {
        var x = document.getElementById("task-form");
            if (x.style.visibility === "visible") {
                x.style.visibility = "hidden";
            } else {
                x.style.visibility = "visible";
            }
        }

// Date/Time
    function display_ct6() {
        var x = new Date()
        var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
        hours = x.getHours( ) % 12;
        hours = hours ? hours : 12;
        var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
        x1 = x1 + " - " +  hours + ":" +  x.getMinutes() + ":" +  x.getSeconds() + ampm;
        document.getElementById('ct6').innerHTML = x1;
        display_c6();
        }
        function display_c6(){
        var refresh=1000; // Refresh rate in milli seconds
        mytime=setTimeout('display_ct6()',refresh)
        }
        display_c6() 

        
        


// TASK FORM VALIDATION

// 1. assign DOM elements
const formTitle = document.getElementById(form-title);
const formDescription = document.getElementById(form-desc);
const formAssignee = document.getElementById(form-assignee);
const formDue = docment.getElementById(form-due);
const formStatus = document.getElementById(form-status-select);
const deleteButton = document.getElementById(deleteTaskBtn);
const saveButton = document.getElementById(saveTaskBtn);
const closeForm = document.getElementById(closeTaskForm);


// 2. create a function with if/else statement
let titleErrorMsg;
let descErrorMsg;
let assignErrorMsg;
let statusErrorMsg;

function validateInput () {
    if (formTitle.length<5 ||formDescription.length<5 || formAssignee.length<5 || formDue==="" || formStatus==="") {
    
        if (title.length<5) {
            titleErrorMsg = "Your title is less than 5."
        }
    
        if (desc.length<5) {
            descErrorMsg = "Your description is less than 10"
        }

        if (title.length<5) {
            titleErrorMsg = "Your title is less than 5."
        }

        if (title.length<5) {
            titleErrorMsg = "Your title is less than 5."
        }

    
    window.prompt(`Please enter valid input. ${title}. ${assignee}`)
    }
}


    /* 
Check if the Task Name input value is more than 5 characters.
Check if the Task Description input value is more than 5 characters.
Check if the Assigned To value is more than 5 characters.
Check if the Task Due Date input value is not empty.
Check if the Task Status input value is not empty.


1. assign the id of each input on task form to a variable
e.g    const title = document.getElementById(form-title)
       const description= document.getElementById(form-desc)
       const assignee= document.getElementById(form-due)
       const status = document.getElementById(form-status-select)

2. create a function with if/else statement

let titleErrorMsg;
let descErrorMsg;
let assignErrorMsg;
let statusErrorMsg;

function validateInput () {
    if (title.legnth<5 || assignee.length<10) {
    
        if (title.length<5) {
            titleErrorMsg = "Your title is less than 5."
        }
    
        if (desc.length<5) {
        assignErrorMsg = "Your description is less than 10"
        }

        if (title.length<5) {
            titleErrorMsg = "Your title is less than 5."
        }

        if (title.length<5) {
            titleErrorMsg = "Your title is less than 5."
        }

    
    window.prompt(`Please enter valid input. ${title}. ${assignee}`)
    }

        will make popup saying: 
            Please enter valid input. Your title is less than 5. Your assignee less than 10.




3. submitButton.addEventListener("click", validateInput)

*/