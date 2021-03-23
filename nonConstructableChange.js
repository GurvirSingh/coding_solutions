// T - O(nlogn), S - O(1) if inplace sorting if not O(n)

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
	
	let currentChange = 0
	
	for(const coin of coins) {
		if(coin > currentChange + 1) return currentChange + 1;
		
		currentChange += coin;
	}
  return currentChange + 1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
