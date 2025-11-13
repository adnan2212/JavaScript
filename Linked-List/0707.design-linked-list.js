class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0
  }

  printLength() {
    console.log('Length: ' + this.length)
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    
    return current;
  }

  print() {
    let current = this.head;
    let output = '';
    while (current) {
      output += current.value + ' -> ';
      current = current.next;
    }
    console.log(output + 'null');
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }

  unshift(value) {
    let newNode = new Node(value);

    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter != index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(value, index) {
    let foundNode = this.get(index);
    if ( foundNode === null ) return false;
    foundNode.value = value;
    return true;
  }

  insert(index, value) {
    if (index > this.length || index < 0) return false;
    if (index === this.length) {
      this.push(value);
      return true;
    }
    if(index === 0) {
      this.unshift(value);
      return true;
    }

    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let temp = prevNode.next;

    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) {
      this.pop();
      return true;
    }
    if (index === 0) {
      this.shift();
      return true;
    }

    let prevNode = this.get(index - 1);
    let deleteNode = prevNode.next;

    prevNode.next = deleteNode.next;
    this.length--;
    return deleteNode;
  }

  getMiddle() {
    let slow = this.head;
    let fast = this.head;

    while(fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  isPalindrome() {
    if(!this.head || !this.head.next) return true;

    // 1. Find middle using slow & fast pointer
    let slow = this.head;
    let fast = this.head;

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
    let firstHalf = this.head;
    let secondHalf = prev;

    while (secondHalf) {
      if (firstHalf.value !== secondHalf.value) return false;
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }

    return true;
  }
}


const myLinkedList = new singlyLinkedList();
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(2);
myLinkedList.push(1);
myLinkedList.printLength();
console.log(myLinkedList.isPalindrome());