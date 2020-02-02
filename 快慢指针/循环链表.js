const lg = console.log

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function has_cycle(head) {
  let slow = fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (fast === slow) {
      return true
    }
  }
  return false
}

// 相似的问题：循环链表的循环长度

function length_of_cycle(head) {
  let slow = fast = head
  let key = true

  while (fast && fast.next && key) {
    slow = slow.next
    fast = fast.next.next
    if (fast === slow) {
      key = false
    }
  }
  if (key) return -1
  let len = 1
  let next = slow.next
  while (slow !== next) {
    len++
    next = next.next
  }
  return len
}

// 相似的问题：循环链表的循环长度

function start_of_cycle(head) {
  let slow = fast = head
  let key = true

  while (fast && fast.next && key) {
    slow = slow.next
    fast = fast.next.next
    if (fast === slow) {
      key = false
    }
  }
  if (key) return -1
  let len = 1
  let next = slow.next
  while (slow !== next) {
    len++
    next = next.next
  }
  while(slow !== head) {
    slow = slow.next
    head = head.next
  }
  return head.value
}

head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
console.log(`LinkedList has cycle: ${has_cycle(head)}`)
console.log(`LinkedList has cycle: ${length_of_cycle(head)}`)
console.log(`LinkedList has cycle: ${start_of_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)
console.log(`LinkedList has cycle: ${length_of_cycle(head)}`)
console.log(`LinkedList has cycle: ${start_of_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)
console.log(`LinkedList has cycle: ${length_of_cycle(head)}`)
console.log(`LinkedList has cycle: ${start_of_cycle(head)}`)