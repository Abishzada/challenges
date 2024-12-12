// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

var isPalindrome = function (x) {
  let reverse = 0;
  let copyX = x;
  if (x < 0) return false;
  while (x > 0) {
    reverse = reverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  if (copyX === reverse) return true;
  else return false;
};
