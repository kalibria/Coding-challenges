//list, respectively.
//
// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5




let min = function(list){
  const arrSort = list.sort((a, b) => a -b);
  return arrSort[0]

}

let max = function(list){
  const arrSort = list.sort((a, b) => b -a);
  return arrSort[0]

}
