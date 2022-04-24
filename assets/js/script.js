// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var generatePassword = function(){
  var lowerCase = window.confirm("Do you want to include lowercase letters?");
  var upperCase = window.confirm("Do you want to include uppercase letters?")
  var numericValue = window.confirm("Do you want to include numbers?")
  var specialChar = window.confirm("Do you want to include special characters?")
  if (lowerCase === false && upperCase === false && numericValue === false && specialChar === false) {
    window.alert("Please select valid parameters.");
  };
  if (lowerCase === true || upperCase === true || numericValue === true || specialChar === true) {
  var passLength = parseInt(prompt("Please select a password length between 8 and 128 characters."));
  console.log(passLength);
  };
  // all 4
  if (lowerCase === true && upperCase === true && numericValue === true && specialChar === true) {
    choices = lowerAlpha.concat(upperAlpha, number, characters);
  }
  // just 3
  else if (lowerCase === true && upperCase === true && numericValue === true && specialChar === false) {
    choices = lowerAlpha.concat(upperAlpha, number);
  }
  else if (lowerCase === true && upperCase === true && numericValue === false && specialChar === true) {
    choices = lowerAlpha.concat(upperAlpha, characters);
  }
  else if (lowerCase === true && upperCase === false && numericValue === true && specialChar === true) {
    choices = lowerAlpha.concat(number, characters);
  }
  else if (lowerCase === false && upperCase === true && numericValue === true && specialChar === true) {
    choices = upperAlpha.concat(number, characters);
  }
  //just 2
  else if (lowerCase === true && upperCase === true && numericValue === false && specialChar === false) {
    choices = lowerAlpha.concat(upperAlpha);
  }
  else if (lowerCase === true && upperCase === false && numericValue === true && specialChar === false) {
    choices = lowerAlpha.concat(number);
  }
  else if (lowerCase === true && upperCase === false && numericValue === false && specialChar === true) {
    choices = lowerAlpha.concat(characters);
  }
  else if (lowerCase === false && upperCase === true && numericValue === true && specialChar === false) {
    choices = upperAlpha.concat(number);
  }
  else if (lowerCase === false && upperCase === true && numericValue === false && specialChar === true) {
    choices = upperAlpha.concat(characters);
  }
  else if (lowerCase === false && upperCase === false && numericValue === true && specialChar === true) {
    choices = number.concat(characters);
  }
  //just 1
   else if (lowerCase === true) {
    choices = lowerAlpha;
  }
  else if (upperCase === true) {
    choices = upperAlpha;
  }
  else if (numericValue === true) {
    choices = number;
  }
  else if (specialChar === true) {
    choices = characters;
  };

  // password variable is an array placeholder for user generated amount of length
  var password = [];

  for (var i = 0; i < passLength; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
  }

  var ps = password.join("");
  return ps;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
