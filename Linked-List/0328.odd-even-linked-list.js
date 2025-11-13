class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};

let head = new Node(2);
head.next = new Node(1);
head.next.next = new Node(3);
head.next.next.next = new Node(5);
head.next.next.next.next = new Node(6);
head.next.next.next.next.next  = new Node(4);
head.next.next.next.next.next.next  = new Node(7);

const printOddEvenList = oddEvenList(head);

const newHead = oddEvenList(head);

// Print
let curr = newHead;
let output = "";
while (curr) {
  output += curr.value + " → ";
  curr = curr.next;
}
console.log(output + "null");