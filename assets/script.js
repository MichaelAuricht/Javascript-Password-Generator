// Assignment Code
//set starting values:
var length = 0;
var uppers = false;
var lowers = false;
var numbers = false
var symbols = false;


function generate_button_clicked()
{
run_prompts(); //run the first time, this should result in length and uppers/lowers etc being set.

//Incase they did not do the right thing, we re-run, showing an additional error message first. (will run forever until they get it right)/
while (!uppers && !lowers && !numbers && !symbols)
	{
	alert("You must select at least one character type!");
	run_prompts();
	}

//WE ARE ALL GOOD!

var password = generateNewPassword(); //generate password based on settings.
if(password == "" || password == null) // this should never happen, but we've failed.
	{
alert("We failed to generate a password");
return;
	}

writePassword(password);
 //set id="password" to our new value.
}




function run_prompts()
{
length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
uppers = confirm("Would you like to use uppercase letters?");
lowers = confirm("Would you like to use lowercase letters?");
numbers = confirm("Would you like to use numbers?");
symbols = confirm("Would you like to use special characters?");
}


function writePassword(pw) {
  document.getElementById("password").value = pw;

}


function generateNewPassword() {

var characters_allowed = ""; // start with no acceptable letters, then we add on what we are allowed.

  if (uppers) characters_allowed += "QWERTYUIOPASDFGHJKLZXCVBNM";
  if (lowers) characters_allowed += "qwertyuiopasdfghjklzxcvbnm";
  if (numbers) characters_allowed += "1234567890";
  if (symbols) characters_allowed += "!@#$%^&*(){}[]=<>/,.";


//characters_allowed is now a string with all possible characters we are going to use.

if(characters_allowed == "" || length <= 0) //invalid settings?
	{
return ""; //none of the options have been selected, return nothing.
	}

  var password = ""; //starting password.
//we now loop through 0 -> LENGTH_OF_PW_REQUIRED and for each iteration we choose a random character from our characters_allowed list.
    for ( var i = 0; i < length; i++ )
	{
      password += characters_allowed.charAt(Math.floor(Math.random() * characters_allowed.length));
	  //this chooses a position between 0 and the length of our string and then appends it to password
   }


return password;

}

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// //

// //

// var length = Number(prompt("How many characters would you like your password to be?"));
// while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

// var uppers = confirm("Would you like to use uppercase letters?");
// var lowers = confirm("Would you like to use lowercase letters?");
// var numbers = confirm("Would you like to use numbers?");
// var symbols = confirm("Would you like to use special characters?");

// while (!uppers && !lowers && !numbers && !symbols) {
//   alert("You must select at least one character type!");
//   uppers = confirm("Would you like to use uppercase letters?");
//   lowers = confirm("Would you like to use lowercase letters?");
//   numbers = confirm("Would you like to use numbers?");
//   symbols = confirm("Would you like to use special characters?");
// }

// window.addEventListener('load', function() {
//   generateNewPassword();
// });

// function generateNewPassword() {
//   var password = "";

//   var allowed = {};
//   if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
//   if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
//   if (numbers) password += rando(allowed.numbers = "1234567890");
//   if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

//   for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

//   document.getElementById("password").value = randoSequence(password).join("");
// }
