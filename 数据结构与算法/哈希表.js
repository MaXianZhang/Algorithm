const LinkedList = require('./链表.js')

// 散列函数：将字符串转换成一个唯一对应的数字，提高查找的效率
function HashCode(key) {
  let hash = 5831
  for(let i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i)
  }

  return hash % 1013
  // return 1
}

//因为我们要用到链表，所以就要用一个对象来储存信息
function ValuePair(key, value) {
  this.key = key
  this.value = value
  
  this.toString = function() {
    return `[${this.key}-${this.value}]`
  }
}

// 接下来我们要实现put、get、remove，这里的put其实对应了增和改
// 哇，佩佩的键盘用的好爽啊
// 感激佩佩

class HashTable {
  constructor() {
    this.table = []
  }

  put(key, value) {
    const position = HashCode(key)

    if(this.table[position] === undefined) {
      this.table[position] = new LinkedList()
      this.table[position].append(new ValuePair(key, value))
    } else {
      let index = 0
      let current = this.table[position].head
      // 遍历一遍链表，找到相同的key值进行替换
      while(index++ < this.table[position].length) {
        if(current.element.key == key) {
          current.element.value = value
        } else {
          current = current.next
        }
      }

      //遍历完成，没有遇到相同的key，那就在append到尾部一个新值
      this.table[position].append(new ValuePair(key, value))
    }
  }

  get(key) {
    const position = HashCode(key)
    const list = this.table[position]

    if(list === undefined) {
      return undefined
    } else {
      let index = 0
      let current = list.head

      while(index++ < list.length) {
        if(current.element.key == key) {
          return current.element.value
        } else {
          current = current.next
        }
      }

      return undefined
    }
  }

  remove(key) {
    const position = HashCode(key)
    const list = this.table[position]

    if(list === undefined) {
      return false
    } else {
      let index = 0
      let current = list.head

      while(++index < list.length) {
        if(current.element.key == key) {
          list.removeAt(index - 1)
          return true
        } else {
          current = current.next
        }
      }

      return false
    }
  }
}
let demo = new HashTable()

// demo.put('ui', 18)
// demo.put('ii', 18)
// demo.put('name', '张旭')
// demo.put('age', 18)
// demo.remove('name')
// console.log('name', demo.get('name'))

// console.log(demo.table)
