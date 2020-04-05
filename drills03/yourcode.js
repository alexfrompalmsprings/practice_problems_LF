function getPath(str) {
  let paths = str.split('/')
  return paths;
}

function getPathParts(fullUrl) {
  let firstSplit = fullUrl.split('://')
  let secondSplit = firstSplit[1].split(':')
  let thirdSplit = secondSplit[1].split('/');
  console.log(thirdSplit);

  let proto = firstSplit[0];
  let hostVar = secondSplit[0]
  let num = Number(thirdSplit[0])
  let fileType = thirdSplit[thirdSplit.length -1];
  let middlePart = thirdSplit.slice(1, thirdSplit.length - 1)

  let pathVar;

  if(middlePart.length === 1){
    pathVar = middlePart[0];
  } else{
    pathVar = middlePart.join('/')
  }




  let getPartsObj = {
    protocol: proto,
    host: hostVar,
    port: num,
    path: pathVar,
    file: fileType
  }
  console.log(getPartsObj);

  return getPartsObj;
}


function getCapitalCount() {

}

function correctCalcChecker() {

}

function doMath() {

}