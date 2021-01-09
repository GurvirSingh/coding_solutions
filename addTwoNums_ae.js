function twoNumberSum(array, targetSum) {
  const comp = {};
	for(let i = 0; i < array.length; i++) {
		if(comp[array[i]] >= 0) {
		 return [array[i], array[comp[array[i]]]];
		}
		comp[targetSum - array[i]] = i; 
	}
	return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
