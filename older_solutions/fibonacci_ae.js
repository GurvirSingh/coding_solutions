function getNthFib(n, memoize = {1:0, 2:1}) {
	// worst case 2^k solution and n space
	// if(n == 2) {
	// 	return 1;
	// } else if(n == 1) {
	// 	return 0;
	// } else {
	// 	return getNthFib(n - 1)  + getNthFib(n - 2); // call stack 
	// } 
	
	// caching solution
	// if(n in memoize) {
	// 	return memoize[n]
	// } else {
	// 	memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
	// 	return memoize[n];
	// }
	
	//iterative most optimal for space solution
	const arr = [0, 1];
	let calls = 3; // if n = 5 then we need 5 - 2 calls or n - 2 calls + 1 call for ans
	
	while(calls <= n) {
		const next = arr[0] + arr[1];
		arr[0] = arr[1];
		arr[1] = next;
		calls++;
	}
	if(n > 1 ){
		return arr[1];
	} else {
		return arr[0];
	}
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
