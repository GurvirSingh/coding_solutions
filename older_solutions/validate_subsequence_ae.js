function isValidSubsequence(array, sequence) {
	let i = 0;
	let j = 0;

	while(i != array.length || j == sequence.length){
		
		if((j == sequence.length)) {
			return true;
		}
		
		if(sequence[j] == array[i]) {
			j++;
			i++;
		} else {
			i++;
		}
	}
	return false;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;


array = [5, 1, 22, 25, 6, -1, 8, 10];
sequence = [1, 6, -1, 10];


console.log(isValidSubsequence(array, sequence));