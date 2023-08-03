// Given a string of words, you need to find the highest scoring word.
//
//   Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//
//   For example, the score of abad is 8 (1 + 2 + 1 + 4).
//
//   You need to return the highest scoring word as a string.
//
//   If two words score the same, return the word that appears earliest in the original string.
//
//   All letters will be lowercase and all inputs will be valid.


function high(x){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');//array of letters


  const arrayX = x.split(' ');//array of words
  const arrayArrays = arrayX.map(item => item.split(''));//array of arrays

  const arrayNumbers = arrayArrays.reduce((accum, item, index, arr) =>{
    const arrayNums = item.map(i => i = alphabet.indexOf(i) + 1);
    const sumNumbers = arrayNums.reduce((sum, item) => {
      return sum + item
    },0);
    accum.push(sumNumbers);
    return accum
  },[]);

  const copedArrayNumbers = [...arrayNumbers];
  const sortedArrayNumbers = copedArrayNumbers.sort((a,b) => b - a);
  const indexOfNumber = arrayNumbers.indexOf(sortedArrayNumbers[0]);

  return arrayX[indexOfNumber]
}
