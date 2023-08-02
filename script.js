const display = document.querySelector(".input");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;

    if (action === "check") {
      let a = display.value;
      let b = palindrome(a);

      if (b === true) {
        display.value = a + "\n is a palindrome!";
      } else {
        display.value = a + "\n is not a palindrome!";
      }
    }

    if (action === "clear") {
      display.value = "";
    }
  }
});

function palindrome(str) {
  // changes letter case of str, removes non-alphanumericl characters, and stores in an array
  let arr = str.toLowerCase().split("");
  let lowerCase = [];
  let regex = /[a-z0-9]/;
  for (let i = 0; i < arr.length; i++) {
    let a = regex.test(arr[i]);
    if (a === true) {
      lowerCase.push(arr[i]);
    }
  }
  // creates a reversed copy of the array above
  let reverse = [];
  let arr2 = [...lowerCase];
  while (arr2.length > 0) {
    reverse.push(arr2.pop());
  }
  // joins and verifies if the two strings are equel and if the string is infact a palandrome
  if (reverse.join("") === lowerCase.join("")) {
    return true;
  } else {
    return false;
  }
}
