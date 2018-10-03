// ***** code for password validation ****

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) { 
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) { 
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) { 
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
// the end off passport validation

/* validation form for all fields/ NOT WORKING
function validateForm() {
    var x = document.forms["myForm"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
*/


// email validation
var email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Email address is not valid.");
  } else {
    email.setCustomValidity("");
  }
});




/* var form = document.getElementById("fname");
var isValidForm = form.checkValidity();

ValidityState = {
 badInput: false,
 customError: false,
 patternMismatch: false,
 rangeOverflow: false,
 rangeUnderflow: false,
 stepMismatch: false,
 tooLong: false,
 tooShort: false,
 typeMismatch: false,
 valid: false,
 valueMissing: true
};
*/
