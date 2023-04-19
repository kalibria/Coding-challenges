//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"





function longest(s1, s2) {
  const arrS1 = s1.split("");
  const arrS2 = s2.split("");

  let set = new Set(arrS1);

  arrS2.forEach(item => set.add(item));

  let newArr = Array.from(set).sort();

  return newArr.join("");
}
