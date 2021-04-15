
document.body.addEventListener("click", handleClick);
const bodyTheme = document.querySelector(".bg");
const firstName = document.getElementById("firstname")
const lastName = document.getElementById("lastname")
const progName = document.getElementById("progName")
const submission = []

function handleClick(event) {
    console.log(event.target.innerText);
    if (event.target.innerText === "Change Background Color"){
        changeBG()
    }
    else if (event.target.innerText === "Submit") {
        submission.push({first: firstName.value, last: lastName.value, program: progName.value})
    }

}
function changeBG() {
    bodyTheme.classList.toggle("bg");
}