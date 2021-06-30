// Special characters for the function created
var    generateBtn = document.getElementById('generateBtn')
generateBtn.addEventListener('click', writePassword)

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




  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


  // Checks to make sure user selected ok for all and uses empty minimums from above

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < passwordLength; i++) {
    var randomNumberPicked = Math.floor(Math.random() * passwordLength.length);

    randomPasswordGenerated += randomNumberPicked;

  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}
