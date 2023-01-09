// Assignment Code
const generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", getParameters);

const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const symbols = ['!', '@', '#', '%', '"', '^', '&', '*']
const numbersarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function getParameters() {

  const length = parseInt(window.prompt("Length? Must be more than 8 characters, and less than 128 characters?",));
  if ((Number.isInteger(length)) && (length >= 8 && length <= 128)) {
    const lower = confirm("Select Ok for lowercase chars or cancel for no lowercase chars")
    const upper = confirm("Select Ok for uppercase characters, or cancel for no upppercase chars")
    const numbers = confirm("Select Ok for number, or cancel for no numbers")
    const symbol = confirm("Select Ok for symbols, or cancel for no symbol")
    generatePassword(symbol, lower, upper, numbers, length)
  } else {
    return
  }
}
function generatePassword(symbol, lower, upper, numbers, length) {
  let generatedPassword = ''
  var userchosenchar = []
  if (symbol) {
    generatedPassword += getRandomSymbol();
    userchosenchar = userchosenchar.concat(symbols)
    //+= assigns the result to the var
  }
  if (lower) {
    generatedPassword += getRandomLower();
    userchosenchar = userchosenchar.concat(lowercase)
  }
  if (upper) {
    generatedPassword += getRandomUpper();
    userchosenchar = userchosenchar.concat(uppercase)
  }
  if (numbers) {
    generatedPassword += getRandomnumbers();
    userchosenchar = userchosenchar.concat(numbersarray)
  }
  var remaining = length - generatedPassword.length
  for (let i = 0; i < remaining; i++) {
    generatedPassword += userchosenchar[Math.floor(Math.random() * userchosenchar.length)]
  }
  writePassword(generatedPassword)
}
// Add event listener to generate button
// http://www.net-comber.com/charset.html
function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
  //Browser Character Set
}
function getRandomLower() {
  return lowercase[Math.floor(Math.random() * lowercase.length)];
}
function getRandomUpper() {
  return uppercase[Math.floor(Math.random() * uppercase.length)];
}
function getRandomnumbers() {
  return numbersarray[Math.floor(Math.random() * numbersarray.length)];
}
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}





