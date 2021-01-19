//T- O(n), S- O(1)
const isPalindrome = (s) => {
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        if(s[left] == s[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome('racecar'));
console.log(isPalindrome('notaracecar'));