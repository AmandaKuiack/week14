
document.body.addEventListener("click", handleClick);
const bodyTheme = document.querySelector(".bg");
let submission = [];

function handleClick(event) {
    console.log(event.target.innerText);
    if (event.target.innerText === "Change Background Color"){
        changeBG()
    }
    else if (event.target.innerText === "Submit") {
        pushSubmit()
    }

};
function changeBG() {
    bodyTheme.classList.toggle("bg");
};
function pushSubmit() {
    let firstNameInput = document.querySelector("#firstname");
    let lastNameInput = document.querySelector("#lastname");
    let progNameInput = document.querySelector("#progName");
    let studentObject={
        firstname: firstNameInput.value,
        lastname: lastNameInput.value,
        progName: progNameInput.value
    };

    let exists = checkIfStudentExist(studentObject);
    if (!exists) {
            submission.push(studentObject);
            console.log(submission);
            addStudentToList(studentObject)
    }
    else {
        alert("Student already enrolled.");
    }

    firstNameInput.value = "";
    lastNameInput.value = "";
    progNameInput.value = "";
    
    
};

function checkIfStudentExist(newStudent){
    let studentExists = false;

    for (let stu of submission){
        if (stu.firstname === newStudent.firstname && stu.lastname === newStudent.lastname){
            studentExists = true;
            break;
        }
    }
    return studentExists
}

function addStudentToList(newStudent) {
    let CITList = document.querySelector("#CIT");
    let CSTList = document.querySelector("#CST");
    let listElement= document.createElement("li");
    if (newStudent.progName.toUpperCase() === "CIT"){

        listElement.textContent = `${newStudent.firstname} ${newStudent.lastname}`;
        CITList.appendChild(listElement);
    } else if (newStudent.progName.toUpperCase() === "CST"){
        listElement.textContent = `${newStudent.firstname} ${newStudent.lastname}`;
        CSTList.appendChild(listElement);
    }
    else {
        alert(`${newStudent.progName} program does not exist. Enrolling for CIT or CST`)
    }
}