exports.linearSearchGlobal = function(valueToFind, arrayToSearchThrough) {
    let arr = [];
    for (let i = 0; i < arrayToSearchThrough.length; i++) {
      if (arrayToSearchThrough[i] === valueToFind) {
        arr.push(i);
      }
    }
    return arr;
  }