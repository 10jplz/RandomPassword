// Special characters for the function created
var    generateBtn = document.getElementById('generateBtn')
generateBtn.addEventListener('click', writePassword)
copyBtn.addEventListener('click', copyPassword)

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
  alert("Copied the generated password to your clipboard: " + copyText.value);

}


// Replaced function to get random character and typed available charecters 
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890"
const special = "!@#$%^&*()";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Prompts that come up after you click generate password
function generatePassword() {
  let characters = "";
  var passwordLength = prompt("How long would you like your password to be?(Must be longer than 8 Characters and Shorter than 128)");
  
  
  if (passwordLength < 8 ) {
    alert("Password is too short");
    return generatePassword();
  } 

  if (passwordLength > 128 ) {
    alert("Password is too long");
    return generatePassword();
  } 
  else  {

  var numbersConfirm = confirm("Do you want your password to include numbers?");

  var lowerCasesConfirm = confirm("Do you want your password to include? lower case letters?");

  var upperCasesConfirm = confirm("Do you want your password to include upper cases letters?");

  var specialConfirm = confirm("Do you want your password to include special characters?");
  }

  // Checks to make sure user selected ok for all and uses empty minimums from above

  if (numbersConfirm === true) {
    characters = characters + numbers;
  }

  if (lowerCasesConfirm === true) {
    characters = characters + lowerCase;
  }

  if (upperCasesConfirm === true) {
    characters = characters + upperCase;

  }

  if (specialConfirm === true) {
     characters = characters + special ;

  }

  if ( specialConfirm === false && numbersConfirm === false && lowerCasesConfirm === false && upperCasesConfirm == false) {
    alert ("You must choose an option");
    return generatePassword();
    }

  // empty string variable for the for loop below
  var password = "";

  // loop getting random characters
  for (let i = 0; i < passwordLength; i++) {
    var randomNumberPicked = Math.floor(Math.random() * characters.length);
    var randomCharacter = characters.charAt(randomNumberPicked)
    password = password + randomCharacter

  }

  return password;

}
