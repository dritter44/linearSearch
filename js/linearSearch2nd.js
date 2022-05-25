/*const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {

function linearSearch(valueToFind, arrayToSearchThrough) {
  if (arrayToSearchThrough.indexOf(valueToFind) != -1) {
    return arrayToSearchThrough.indexOf(valueToFind);
  } else {
    return undefined;
  }
};
console.log(linearSearch(3, [1,2,3]));
console.log(linearSearch(4, [1,2,3]));
console.log(linearSearch(13, [1,2,3]));
7:19
arr.indexOf(arg)



function linearSearchGlobal(valueToFind, arrayToSearchThrough) {
  let arr = [];
  for (let i = 0; i < arrayToSearchThrough.length; i++) {
    if (arrayToSearchThrough[i] === valueToFind) {
      arr.push(i);
    }
    if (arrayToSearchThrough.indexOf(valueToFind) != -1) {
        return arrayToSearchThrough.indexOf(valueToFind);
      } else {
        return undefined;
      }
    };*/
    
exports.linearSearchGlobal = function(valueToFind,arrayToSearchThrough){
    let indexArray = []
    arrayToSearchThrough.forEach((q)=> {
        if(q === valueToFind){
            console.log(q)
            indexArray.push(arrayToSearchThrough.indexOf(q))
        }
        //console.log(indexArray)
    })
    return indexArray
}
console.log(linearSearchGlobal("a",["b", "a", "n", "a", "n", "a", "s"]))
