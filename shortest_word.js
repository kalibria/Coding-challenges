//Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.

function findShort(s){
  const arrS = s.split(" ");
  const arrLength = arrS.reduce((accum, item)=>{
    accum.push(item.length);
    return accum;
  },[]);
  const lengthSort = arrLength.sort((a, b)=>{
    return a -b;
  });
  return lengthSort[0]
}
