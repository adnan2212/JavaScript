function reverseString(str) {
  
  let right = str.length - 1;
  let rev = '';
  
  while (right >= 0) {
    rev = rev + str[right]
    right--;
  }
  
  return rev;
}