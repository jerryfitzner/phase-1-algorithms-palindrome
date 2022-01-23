function isPalindrome(orgWord) {
  let newString = "";
  for (let i = orgWord.length; i > -1; i--){
    let newLetter = orgWord.charAt(i);
    newString = newString.concat(newLetter);
  };
  return (orgWord === newString);
}



/* 
  Add your pseudocode here
  Write function
  take in a word
  if word is palindrome it will return true, 
  else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
