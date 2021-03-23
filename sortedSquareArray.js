// T - O(n), S - O(n)

function sortedSquaredArray(array) {
	const sortedArray = new Array(array.length).fill(0);
	let smallIdx = 0;
	let largeIdx = array.length - 1;
	
	for(let idx = array.length - 1; idx >=0; idx--) {
		const smallerValue = array[smallIdx];
		const largerValue = array[largeIdx];
		
		if(Math.abs(smallerValue) > Math.abs(largerValue)) {
			sortedArray[idx] = smallerValue * smallerValue;
			smallIdx++;
		} else {
			sortedArray[idx] = largerValue * largerValue;
			largeIdx--;
		}
	}
  return sortedArray;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;