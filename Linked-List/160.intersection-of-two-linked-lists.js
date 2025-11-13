class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA, headB) {
    // 1. Find lengths
    const getLength = (head) => {
      let length = 0;
      while (head) {
        length++;
        head = head.next;
      }
      return length;
    }

    let lenA = getLength(headA);
    let lenB = getLength(headB);

    // 2. Align both lists
    while (lenA > lenB) {
      headA = headA.next;
      lenA--;
    }

    while (lenB > lenA) {
      headB = headB.next;
      lenB--;
    }

    // 3. Traverse both together
    while (headA && headB) {
      if (headA === headB) return headA;
      headA = headA.next;
      headB = headB.next;
    }

    return null;
};

// -------------------------- Using Set -------------------------- 

const getIntersectionNodeSet = function(headA, headB) {
  let store = new Set();
  while(headB) {
    store.add(headB);
    headB = headB.next;
  }

  while (headA) {
    if (store.has(headA)) return headA;
    headA = headA.next;
  }

  return null;
}

// Shared nodes
let common = new Node(7);
common.next = new Node(8);
common.next.next = new Node(9);

let headA = new Node(1);
headA.next = new Node(2);
headA.next.next = new Node(5);
headA.next.next.next = common; // connects to intersection

let headB = new Node(4);
headB.next = new Node(5);
headB.next.next = common; // connects to same intersection

console.log(getIntersectionNode(headA, headB));