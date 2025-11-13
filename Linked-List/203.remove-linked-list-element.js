class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
  if (!head) return null;

  // dummy node to handle head deletions
  let dummy = new Node(0);
  dummy.next = head;

  let current = head;
  let prevNode = dummy;
  
  while( current ) {
    if (current.value === val) {
      prevNode.next = current.next;
    } else {
      prevNode = current;
    }
    current = current.next;
  }

  return dummy.next;
};

let headA = new Node(1);
headA.next = new Node(2);
headA.next.next = new Node(3);
headA.next.next.next = new Node(4);
headA.next.next.next.next = new Node(5);
headA.next.next.next.next.next = new Node(6);
headA.next.next.next.next.next.next = new Node(7);
headA.next.next.next.next.next.next.next = new Node(7);
headA.next.next.next.next.next.next.next.next = new Node(8);

const newHead = removeElements(headA, 1);

let curr = newHead;
while (curr) {
  console.log(curr.value);
  curr = curr.next;
}