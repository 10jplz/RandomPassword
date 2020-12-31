// Special characters for the function created
var    generateBtn = document.getElementById('generateBtn')
generateBtn.addEventListener('click', writePassword)

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
    return "";
  } 

  if (passwordLength > 128 ) {
    alert("Password is too long");
    return "";
  } 

  var numbers = confirm("Do you want your password to include numbers?");

  var lowerCases = confirm("Do you want your password to include? lower case letters?");

  var upperCases = confirm("Do you want your password to include upper cases letters?");

  var special = confirm("Do you want your password to include special characters?");

  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;


  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


  // Generator functions**
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};
var specialCharacters = "!@#$%^&*()";


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
