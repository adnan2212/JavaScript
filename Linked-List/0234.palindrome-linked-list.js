/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) return true;

  // 1. Find middle using slow & fast pointer
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 2. Reverse second half
  let prev = null;
  let current = slow;

  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  // 3. Compare first & second half
  let firstHalf = head;
  let secondHalf = prev;

  while (secondHalf) {
    if (firstHalf.value !== secondHalf.value) return false;
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true;
};