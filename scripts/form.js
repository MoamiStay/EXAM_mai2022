const form = document.querySelector("form#myForm");

// radio application
const radioSinger = document.querySelector("input#singer");
const radioModel = document.querySelector("input#model");
const radioActor = document.querySelector("input#actor");
const radioMc = document.querySelector("input#mc");
// radio gender
const female = document.querySelector("input#female");
const male = document.querySelector("input#male");

// name, email, password, about, submit
const myName = document.querySelector("input#fullname");
const email = document.querySelector("input#email");
const password = document.querySelector("input#password");
const about = document.querySelector("#text");
const submitBtn = document.querySelector("#submit");

// invalid input msg
const applicationMsg = document.querySelector("#applicationMsg");
const nameMsg = document.querySelector("#nameMsg");
const genderMsg = document.querySelector("#genderMsg");
const emailMsg = document.querySelector("#emailMsg");
const passwordMsg = document.querySelector("#passwordMsg");
const aboutMsg = document.querySelector("#aboutMsg");

// general fail msg
const responsMsg = document.querySelector("#responsMsg");




submitBtn.addEventListener("click", validateForm);

function validateForm(check) {
    check.preventDefault();

    let submittedName = myName.value.trim();
    console.log("Name: " + submittedName);
    nameMsg.innerHTML = "";
    responsMsg.innerHTML = "";
    if(submittedName.length <= 4) { // Input må være minst 5 karakterer
    nameMsg.innerHTML = "Please enter a valid name";
    } border(myName, nameMsg);

let submittedEmail = email.value.trim();
console.log("Email: " + submittedEmail);
emailMsg.innerHTML = "";
if(!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(submittedEmail)) {
emailMsg.innerHTML = "Please enter a valid email";
} border(email, emailMsg);
// RegEx er tatt fra: https://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149

let submittedPassword = password.value.trim();
console.log("Password: " + submittedPassword);
passwordMsg.innerHTML = "";
if(!submittedPassword || submittedPassword.length >= 16) { // Man kan skrive inn et passord som er mellom 1 og 15 karakterer, men ikke mer. (feltet kan heller ikke være tomt)
passwordMsg.innerHTML = "Password can have max 15 characters.";
} border(password, passwordMsg);

let submittedAbout = about.value.trim();
console.log("About me: " + submittedAbout);
aboutMsg.innerHTML = "";
if(submittedAbout.length <= 25) { // text input må være mer enn 25 karakterer.
aboutMsg.innerHTML = "Please enter a minimum of 26 characters.";
} border(about, aboutMsg);

// Display error message on the top of the page
if(nameMsg.innerHTML === "" && passwordMsg.innerHTML === "" && emailMsg.innerHTML === "" && aboutMsg.innerHTML === "") {
    responsMsg.innerHTML = "All good to go!";
} else { responsMsg.innerHTML = "Something seems to be missing.. Please check again.";
responsMsg.style.fontSize = "1.4em";
}

// error message for radio buttons in application
if(radioSinger.checked === true || radioModel.checked === true || radioActor.checked === true || radioMc.checked === true) {
    applicationMsg.innerHTML = "";
} else {
    applicationMsg.innerHTML = "Please choose one";
} border(radioSinger, applicationMsg);

//error message for radio buttons in gender
if(female.checked === true || male.checked === true) {
    genderMsg.innerHTML = "";
} else {
    genderMsg.innerHTML = "Please choose one";
} border(female, genderMsg);

};

function border(value, msg) {
    // console.log("hey");
    if(msg.innerText === "") {
    value.style.border = "1px solid white";
    } else value.style.border = "1px solid red";
    msg.style.color = "brown";
};