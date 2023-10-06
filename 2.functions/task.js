function getArrayParams(...arr) {
  if(arr.length > 0) {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      if(arr[i] > max) {
        max = arr[i];
      }
      if(arr[i] < min) {
        min = arr[i];
      }
      sum += arr[i]
    }

    let avg = +(sum / arr.length).toFixed(2)

    return { min: min, max: max, avg: avg };
  } else {
    return 0;
  }
}

function summElementsWorker(...arr) {
  if(arr.length > 0) {
    let sum = 0;

    for (let i = 0; i < arr.length; i += 1) {
      sum += arr[i];
    }
    return sum;
  } else {
    return 0;
  }
}

function differenceMaxMinWorker(...arr) {
  if(arr.length > 0) {
    let min = 0;
    let max = 0;
    if(arr.length > 0) {
      max = Math.max(...arr);
      min = Math.min(...arr);
    }
    return max - min;
  } else {
    return 0;
  }
}

function differenceEvenOddWorker(...arr) {
  if(arr.length > 0) {
    let sumEvenElement = 0;
    let sumOddElement = 0;

    for (let i = 0; i < arr.length; i += 1) {
      if(arr[i] % 2 > 0) {
        sumOddElement += arr[i];
      } else {
        sumEvenElement += arr[i];
      }
    }

    return sumEvenElement - sumOddElement;
  } else {
    return 0;
  }
}

function averageEvenElementsWorker(...arr) {
  if(arr.length > 0) {
    let sumEvenElement = 0;
    let countEvenElement = 0;

    for (let i = 0; i < arr.length; i += 1) {
      if(arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      } 
    }

    return sumEvenElement / countEvenElement;
  } else {
    return 0;
  }
}

function makeWork (arrOfArr, func) {

  let maxWorkerResult = -Infinity; 

  for (let i = 0; i < arrOfArr.length; i += 1) {

    const result = func(...arrOfArr[i]);
    if(result > maxWorkerResult) {
      maxWorkerResult = result;
    } 
  }
  return maxWorkerResult;
}
