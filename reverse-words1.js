//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.


function reverseWords(str) {
  const arrStr = str.split(" ");
  const arrStrRevers = arrStr.reduce((accum, item)=>{
    accum.push(item.split("").reverse().join(""));
    return accum;
  },[])
  return arrStrRevers.join(" ");
}
