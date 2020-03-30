// Assignment code here
var generatePassword = function() {
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialChars = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
    var lowercaseArray = lowercase.split("");
    var uppercaseArray = uppercase.split("");
    var numericArray = numbers.split("");
    var specialCharsArray = specialChars.split("");
    console.log(lowercaseArray);
    console.log(uppercaseArray);
    console.log(numericArray);
    console.log(specialCharsArray);
    var length = parseInt(window.prompt("Type the length of your password. It must be at least 8 characters but less than 128 characters."));
    while (length < 8 || length >= 128) {
        length = parseInt(window.prompt("Type the length of your password. It must be at least 8 characters but less than 128 characters."));
    }
    console.log(length);
    var boolLower = window.confirm("Would you like lowercase letters in your password? Click OK for yes and Cancel for no.");
    console.log(boolLower);
    var boolUpper = window.confirm("Would you like uppercase letters in your password? Click OK for yes and Cancel for no.");
    console.log(boolUpper);
    var boolNumerics = window.confirm("Would you like numbers in your password? Click OK for yes and Cancel for no.");
    console.log(boolNumerics);
    var boolSpecialChars = window.confirm("Would you like special characters in your password? Click OK for yes and Cancel for no.");
    console.log(boolSpecialChars);
    while (!boolLower && !boolUpper && !boolNumerics && !boolSpecialChars) {
        window.alert("You must select at least one of the criteria. Try it again");
        var boolLower = window.confirm("Would you like lowercase letters in your password? Click OK for yes and Cancel for no.");
        console.log(boolLower);
        var boolUpper = window.confirm("Would you like uppercase letters in your password? Click OK for yes and Cancel for no.");
        console.log(boolUpper);
        var boolNumerics = window.confirm("Would you like numbers in your password? Click OK for yes and Cancel for no.");
        console.log(boolNumerics);
        var boolSpecialChars = window.confirm("Would you like special characters in your password? Click OK for yes and Cancel for no.");
        console.log(boolSpecialChars);
    }
    var result = "";
    if (boolLower) {
        result = "";
        for (var i = 0; i < length; i++) {
            result = result.concat(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
        }
    }
    if (boolUpper) {
        result = "";
        for (var i = 0; i < length; i++) {
            result = result.concat(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
        }
    }
    if (boolNumerics) {
        result = "";
        for (var i = 0; i < length; i++) {
            result = result.concat(numericArray[Math.floor(Math.random() * numericArray.length)]);
        }
    }
    if (boolSpecialChars) {
        result = "";
        for (var i = 0; i < length; i++) {
            result = result.concat(specialCharsArray[Math.floor(Math.random() * specialCharsArray.length)]);
        }
    }
    if (boolLower && boolUpper) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%2 == 0) {
                result = result.concat(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
            }
            else {
                result = result.concat(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
            }
        }   
    }
    if (boolLower && boolNumerics) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%2 == 0) {
                result = result.concat(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
            }
            else {
                result = result.concat(numericArray[Math.floor(Math.random() * numericArray.length)]);
            }
        } 
    }
    if (boolLower && boolSpecialChars) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%2 == 0) {
                result = result.concat(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
            }
            else {
                result = result.concat(specialCharsArray[Math.floor(Math.random() * specialCharsArray.length)]);
            }
        } 
    }
    if (boolUpper && boolNumerics) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%2 == 0) {
                result = result.concat(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
            }
            else {
                result = result.concat(numericArray[Math.floor(Math.random() * numericArray.length)]);
            }
        } 
    }
    if (boolUpper && boolSpecialChars) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%2 == 0) {
                result = result.concat(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
            }
            else {
                result = result.concat(specialCharsArray[Math.floor(Math.random() * specialCharsArray.length)]);
            }
        } 
    }
    if (boolNumerics && boolSpecialChars) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%2 == 0) {
                result = result.concat(numericArray[Math.floor(Math.random() * numericArray.length)]);
            }
            else {
                result = result.concat(specialCharsArray[Math.floor(Math.random() * specialCharsArray.length)]);
            }
        }      
    }
    if (boolLower && boolUpper && boolNumerics) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%3 == 0) {
                result = result.concat(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
            }
            else if (i%3 == 1) {
                result = result.concat(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
            }
            
            else {
                result = result.concat(numericArray[Math.floor(Math.random() * numericArray.length)]);
            }
        }  
    }
    if (boolLower && boolUpper && boolSpecialChars) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%3 == 0) {
                result = result.concat(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
            }
            else if (i%3 == 1) {
                result = result.concat(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
            }
            
            else {
                result = result.concat(specialCharsArray[Math.floor(Math.random() * specialCharsArray.length)]);
            }
        } 
    }
    if (boolLower && boolNumerics && boolSpecialChars) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%3 == 0) {
                result = result.concat(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
            }
            else if (i%3 == 1) {
                result = result.concat(numericArray[Math.floor(Math.random() * numericArray.length)]);
            }
            
            else {
                result = result.concat(specialCharsArray[Math.floor(Math.random() * specialCharsArray.length)]);
            }
        } 
    }
    if (boolUpper && boolNumerics && boolSpecialChars) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%3 == 0) {
                result = result.concat(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
            }
            else if (i%3 == 1) {
                result = result.concat(numericArray[Math.floor(Math.random() * numericArray.length)]);
            }
            
            else {
                result = result.concat(specialCharsArray[Math.floor(Math.random() * specialCharsArray.length)]);
            }
        }
    }
    if (boolLower && boolUpper && boolNumerics && boolSpecialChars) {
        result = "";
        for (var i = 0; i < length; i++) {
            if (i%4 == 0) {
                result = result.concat(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
            }
            else if (i%4 == 1) {
                result = result.concat(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
            }
            
            else if (i%4 == 2){
                result = result.concat(numericArray[Math.floor(Math.random() * numericArray.length)]);
            }
            else {
                result = result.concat(specialCharsArray[Math.floor(Math.random() * specialCharsArray.length)]);
            }
        }
    }
    console.log(result);
    return result;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
