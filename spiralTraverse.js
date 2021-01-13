//T-O(n), where n is the number of elements in the 2D array S-O(1) as we are not storing the elements anywhere 

//iterative version
function spiralTraverse(array) {
	const result = [];
	let startRow = 0;
	let endRow = array.length - 1;
	let startCol = 0;
	let endCol = array[0].length - 1;
	
	while(startRow <= endRow && startCol <= endCol) {
		for(let i = startCol; i <= endCol; i++) {
			result.push(array[startCol][i]);
		}
		for(let i = startRow + 1; i <= endRow; i++) {
			result.push(array[i][endCol]);
		}
		for(let i = endCol - 1; i >= startCol; i--) {
			if(startRow == endRow) break;
			result.push(array[endRow][i])
		}
		for(let i = endRow - 1; i > startRow; i--) {
			if(startCol == endCol) break;
			result.push(array[i][startCol]);
		}
		
		startRow++;
		startCol++;
		endRow--;
		endCol--;
	}
	return result;
}