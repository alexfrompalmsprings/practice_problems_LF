function sumArray(arr) {

  let result = 0;

  arr.forEach((num) => {
    result = result + num;
  })
  return result

}

// console.log(sumArray([4,2,3,6,7,1,8,10,9]));

function fitWithinVal(arr, maxValue) {
  let sorted = arr //.sort((a,b) => (a -b)) //do not need to sort it ✅
  let sum = 0;
  let resultArr = [];

  for (let i = 0; i < sorted.length; i++) {
    let currentNum = sorted[i];

    if (sum <= maxValue) {
      sum = sum + currentNum
      if (sum <= maxValue) {
        resultArr.push(currentNum)
        // console.log(sum, resultArr);
      }
    }
  }
  return resultArr


}

// console.log(fitWithinVal([4,2,3,6,7,1,8,10,9], 30));
// console.log(fitWithinVal([24,49,63,6,79,65,60,86,94,36,40,29,42,25,12,4,83,88,4,72], 500))


function getAllNamesShorterThan(arr, limitOfChars) {
  let namesResult = arr.filter((name) => {
    return name.length < limitOfChars
  })

  return namesResult;

}


// console.log(getAllNamesShorterThan(['Clyde','Sue','Jerry','Jo'], 4));

function makeLabel(arr) {


}



