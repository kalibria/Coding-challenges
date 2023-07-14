//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
//
// For example (Input --> Output):
//
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  let newNum = 0;
  let count = 0;

  if(num >= 10){

    newNum = returnNewNum(num);
    count++

    if (newNum >=10) {
      do{
        newNum = returnNewNum(newNum);
        count++;
      } while(newNum >= 10)
    }


  } else {
    return 0
  }

  return count
}


const returnNewNum = (num) => {
  const arrDigits = String(num).split('');
  const newVal = arrDigits.reduce((a, b) => a * b, 1);
  return newVal
}



//another solution


function persistence(value) {
  let count = 0;

  function _persistence(v) {
    if (v < 10) {
      return count
    } else {
      const newNumber = String(v).split("").reduce((a,b) => a * b, 1)

      count++

      return _persistence(newNumber)
    }

    return count
  }

  return _persistence(value)
}
