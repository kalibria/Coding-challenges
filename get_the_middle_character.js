//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//
// #Examples:
//
// Kata.getMiddle("test") should return "es"
//
// Kata.getMiddle("testing") should return "t"
//
// Kata.getMiddle("middle") should return "dd"
//
// Kata.getMiddle("A") should return "A"

function getMiddle(s){
  if(s.length === 1){
    return s
  }else if(s.length % 2 === 0){
    const middle = s.length / 2;
    return s.slice(middle-1, middle+1)
  }else {
    const middle = Math.trunc(s.length / 2);
    return s[middle]
  }
}
