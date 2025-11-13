class ListNode {
  constructor(value) {
    this.value = value ? value : 0;
    this.next = null;
  } 
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {

  // find the length
  let tail = head;
  let length = 1;
  while(tail.next) {
    tail = tail.next;
    length++;
  }

  // Step 2: Make it circular
  tail.next = head;

  // Step 3: Normalize k
  k = k % length; // to avoid unnecessary rotations
  const stepsToNewTail = length - k;

  let newTail = head;
  
  // Step 4: Find new tail position
  for (let i = 1; i < stepsToNewTail; i++) {
    newTail = newTail.next; 
  }

  // Step 5: Define new head and break the circle
  let newHead = newTail.next;
  newTail.next = null;

  return newHead;
};


let head = new ListNode(1);
head.next = new ListNode(2); 
head.next.next = new ListNode(3); 
head.next.next.next = new ListNode(4); 
head.next.next.next.next = new ListNode(5);

const result = rotateRight(head, 8);

let current = result;
let output = '';

while(current) {
  output+=current.value + ' -> ';
  current = current.next;
}

console.log(output + 'null');