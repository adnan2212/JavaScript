class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// TWO PASS APPRAOCH: CALCULATING THE LENGTH AND THEN TRAVERSING TO FIND PREV/TARGET NODE.
var removeNthFromEnd = function(head, n) {
  
  let dummy = new Node(0);
  dummy.next = head;

  // finding the lenght of the list
  let length = 0;
  let current = head;
  while (current) {
    current = current.next;
    length++;
  }

  if (n > length) return null;
  
  // delete position
  let deletePosition = (length - n) + 1;

  let newCurrent = head;
  let deleteNode = null;
  let prevNode = dummy;
  let counter = 1;
  while (newCurrent && counter <= deletePosition) {
    if (counter === deletePosition) {
      deleteNode = newCurrent;
      prevNode.next = deleteNode.next;
    }
    
    if (counter < deletePosition) {
      prevNode = newCurrent;
    }
    newCurrent = newCurrent.next;
    counter++;
  }

  prevNode.next = deleteNode.next;

  return dummy.next;
};

/**
 * one pass: will have two pointers
 * 1st pointer(slow) will starts from dummy node
 * 2nd pointer will start form +n postion
 * Iterate fast and slow one step
*/
var removeNthFromEndOnePass = function(head, n) {
  let dummy = new Node(0);
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  // fast should start from (+n)
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
}
//dummt Node new Node(0);
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

const removeNthNode = removeNthFromEnd(head, 3);

let currHead = removeNthNode;

while (currHead) {
  console.log(currHead.value);
  currHead = currHead.next;
}
