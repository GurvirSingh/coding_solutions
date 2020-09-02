function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function addTwoNumbers(l1 , l2) {
    let node = null;
    const carry = arguments[2];

    if(l1 || l2) {
        const l1Val = l1 ? l1.val : 0;
        const l2Val = l2 ? l2.val : 0;
        const l1next = l1 ? l1.next : null;
        const l2next = l2 ? l2.next : null;

        const val = carry ? l1Val + l2Val + 1 : l1Val + l2Val;
        node = new ListNode(val % 10); 
        node.next = addTwoNumbers(l1next, l2next, val >= 10);
    } else if(carry) {
        node = new ListNode(1);
        node.next = null;
    }
    return node;
}