function iterativeLog(array, element, index) {
  array.forEach((element, index) =>{
    console.log(`${index}: ${element}`);
  })  
}

function iterate(callback){
  const shoes = ["circa", "Emerica", "Shootoo"];

  shoes.forEach(callback);

  return shoes;
}

function doToArray(array, callback){
  array.forEach(callback);
}