// Assignment Code
var generateBtn = document.querySelector("#generate");
// created characters and for statement to generate password
var characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var password = "";

function generatePassword() {
// created prompt message for password length
let passwordLength = prompt(
  "Choose a length of at least 8 characters and no more than 128 characters"
);

if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  alert("Length of password must be between 8 to 128.");
  return "";
  }
 else {
  // created confirm booleans to confirm character types.
  let confirmLower = confirm(
    "Would you like your password to include Lower Case letters?"
  );
  let confirmUpper = confirm(
    "Would you like your password to include Upper Case letters?"
  );
  let confirmNumbers = confirm(
    "Would you like your password to include Numbers?"
  );
  let confirmSpecial = confirm("Would you like your password to include Special characters?");

  let Password = ""; 
  // Created if statement if user chose to cancel either character type.
    if ( 
      confirmLower == false &&
      confirmUpper == false &&
      confirmNumbers == false &&
      confirmSpecial == false
    ) {
      alert("You did not choose a character type. You must choose at least one character type in order to generate a password.");
      return "";
    }
  } 
  // created for statement to generate password
  for (var i = 0; i <= passwordLength; i++) {
    var generate = (Math.floor(Math.random() * characters.length));
    password += characters.charAt(generate);
    }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);