function map(array, fm) {
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    let item = array[i];
    newArray[i] = fm(item, i, array);
    
  }

  return newArray;
}


function filter(array, fm) {
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    let item = array[i];
    if(fm (item, i, array)) {
      newArray.push(item)
    }
    
  }

  return newArray;
}

function every(array,fm) {
  for(let i = 0; i < array.length; i++){
    let item = array[i];

    if (!fm(item, i, array)) {
      return false;
    }
  }
  return true;
}


function some(array,fm) {
  for(let i = 0; i < array.length; i++){
    let item = array[i];

    if (fm(item, i, array)) {
      return true;
    }
  }
  return false;
}