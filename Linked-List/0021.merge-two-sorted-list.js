class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  
  let dummy = new ListNode(0);
  let current = dummy;

  while(list1 && list2) {
    if (list1.value < list2.value) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 ? list1 : list2;

  return dummy.next;
};

let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);
list2.next.next.next = new ListNode(5);
list2.next.next.next.next = new ListNode(6);

const mergedList = mergeTwoLists(list1, list2);

let newHead = mergedList;
let output = '';

while(newHead) {
  output+=newHead.value + ' -> ';
  newHead = newHead.next;
}

console.log(output + 'null');