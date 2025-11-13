class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  
  let dummy = new Node(0);
  let current = dummy;
  let carry = 0;

  while(l1 || l2 || carry > 0) {
    let val1 = l1 ? l1.value : 0;
    let val2 = l2 ? l2.value : 0;
    let sum = val1 + val2 + carry;

    carry = Math.floor(sum / 10);
    const newNode = new Node(sum % 10);
    current.next = newNode;
    current = current.next;
    
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
};

// let l1 = new Node(3);
// l1.next = new Node(4);
// l1.next.next = new Node(9);

// let l2 = new Node(4);
// l2.next = new Node(8);
// l2.next.next = new Node(1);
// l2.next.next.next = new Node(9);

let l1 = new Node(7);
l1.next = new Node(2);
l1.next.next = new Node(4);
l1.next.next.next = new Node(3);

let l2 = new Node(5);
l2.next = new Node(6);
l2.next.next = new Node(4);

const result = addTwoNumbers(l1, l2);

let curr = result;
let output = "";
while (curr) {
  output += curr.value + " → ";
  curr = curr.next;
}
console.log(output + "null");


