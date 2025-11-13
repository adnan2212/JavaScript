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
var swapPairs = function(head) {
    
  let dummy = new Node(0);
  dummy.next = head;

  let prev = dummy;

  // Traverse in pairs
  while(head && head.next) {

    let first = head;
    let second = head.next;

    // swapping
    prev.next = second;
    first.next = second.next;
    second.next = first;
    
    // move pointers forward
    prev = first;
    head = first.next;

  }

  return dummy.next;

};

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

const result = swapPairs(head);

let current = result;
let output = '';

while(current) {
  output+=current.value + ' -> ';
  current = current.next;
}

console.log(output + 'null');