const isValidSubsequence = (array, sequence) => {
    let idxOne = 0;
      let idxTwo = 0;
      
      while(idxOne < array.length && idxTwo < sequence.length) {
          if(array[idxOne] == sequence[idxTwo]) {
              idxOne++;
              idxTwo++;
          } else {
              idxOne++;
          }
      }
      return idxTwo == sequence.length ? true: false;
  }
  
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10]));
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 6, -1, 8, 10]));