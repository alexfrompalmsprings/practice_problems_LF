function countOccurences(arr, word) {
  let finder = word;
  let count = 0;

  arr.forEach((palabra) => {
    if (palabra === finder) {
      count++
    }
    return count;
  })

  return count;
}
// console.log(countOccurences(['dog','cat','dog','pig','canary','cat','dog'],'dog'));

function wordLengths(arr) {
  let result = [];

  let lenChecker = arr.forEach((word) => {
    result.push(word.length)
    // console.log(result)
    return result
  })

  return result;

}
// console.log(wordLengths(['who','said','this','was','a','wet','bar','on','alligators']))



function getMinMaxMean(arr) {
  let sorted = arr.sort((a, b) => (a - b));
  let sum = 0;
  for (let i = 0; i < sorted.length; i++) {
    let current = sorted[i]

    sum = sum + current;
  }


  let max = sorted[sorted.length - 1]
  let min = sorted[0]
  let avg = sum / (sorted.length)

  // console.log(`here we have the min ${min}, the max ${max} && the mean ${avg}`)

  let result = {}
  result.min = min;
  result.max = max;
  result.mean = avg;

  return result;
}
// console.log(getMinMaxMean( [5,-5,15,25,12,2]))

function findMode(arr) {
  // variables that we need to begin with
  let objCounter = {}
  let compare = 0;
  let mostFrequent;

  //get the counter
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    if(objCounter[current] === undefined){
      objCounter[current] =1;
    } else{
      objCounter[current]++
    }


    if(objCounter[current] >= compare){
      compare = objCounter[current];
      mostFrequent = arr[i]
    }
  }

  return mostFrequent;







}

console.log(findMode([4, 6, 3, 6, 1, 8, 4, 3, 3, 4, 5, 6, 6, 7]))