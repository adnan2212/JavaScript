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
var deleteDuplicates = function(head) {
    let current = head;

    while (current && current.next) {
      if (current.value === current.next.value) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
    
    return head;
};


let head = new Node(1);
head.next = new Node(1);
head.next.next = new Node(2);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(3);
head.next.next.next.next.next  = new Node(3);

const removeNthNode = deleteDuplicates(head);

let currHead = removeNthNode;

while (currHead) {
  console.log(currHead.value);
  currHead = currHead.next;
}
