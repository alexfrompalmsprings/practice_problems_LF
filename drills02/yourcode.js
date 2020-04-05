function countOccurences(arr, word){
  let finder = word;
  let count = 0;

  arr.forEach((palabra) => {
    if(palabra === finder){
      count++
    }
   return count;
  })

  return count;
}
// console.log(countOccurences(['dog','cat','dog','pig','canary','cat','dog'],'dog'));

function wordLengths(arr){

}



function getMinMaxMean(arr){
  let sorted = arr.sort((a,b) => (a -b));
  let sum = 0;
  for(let i =0; i < sorted.length; i++){
    let current = sorted[i]

    sum = sum + current;
  }


  let max = sorted[sorted.length -1]
  let min = sorted[0]
  let avg = sum / (sorted.length)

  console.log(`here we have the min ${min}, the max ${max} && the mean ${avg}`)

  let result = {}
  result.min = min;
  result.max = max;
  result.mean = avg;

  return result;
}
console.log(getMinMaxMean( [5,-5,15,25,12,2]))

function findMode(){

}
