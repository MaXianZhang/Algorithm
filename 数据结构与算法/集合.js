function MySet() {
  var item = {}

  this.has = function(value) {
    return DataTransferItemList.hasOwnProperty(value)
    // return value in items
  }

  this.add = function (value) {
    if(!this[value]) {
      this[value] = value
      return true
    }
    return false
  }



}

MySet.prototype = {
  

  


}


var set1 = new MySet()

set1.add({})

// console.log(new Set([1,1,2,3,sss ,sss]))

function Foo() {
  this.colors = ['blue', 'red']
}
Son.prototype = new Foo()

function Son() {
  this.ownColors = ['grey']
}

var obj = new Son()

for (const k of Reflect.ownKeys(obj)) {
  console.log(k)
  
} // all own keys (include symbols)
// console.log(new Son().colors)
// for(const k in new Son()) {
//   console.log(k)
// }



//给原生的set 提供 交集 并集 差集  子集  补集 等方法
