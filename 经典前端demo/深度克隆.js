function deepClone(elem, memory) {
  var memory = memory || []
  //object or other
  if (typeof elem !== 'object') {
    return elem
  } else {
    memory.push(elem)
    const copy = Array.isArray(elem) ? [] : {}

    Object.keys(elem).forEach(key => {
      if (!(memory.includes(elem[key]))) {
        copy[key] = deepClone(elem[key], memory)
      } else {
        copy[key] = '_' + key
      }
    })

    return copy
  }
}

console.log(deepClone({
  jjj: 'kkkk',
  arr: [1,2]
}))

console.log(deepClone([1,2, {kkk: 'lll'}]))

const arr = []
arr.son = {
  call: arr
}
console.log(deepClone(arr))

//深度对比对象
function demo(A, B) {
  let [Akeys, Bkeys] = [Object.keys(A), Object.keys(B)]
  let [Alen, Blen] = [Akeys.length, Bkeys.length]
  let res = true
  if(Alen != Blen) {
      return false
  } else {
      Akeys.forEach(item => {
        if(typeof A[item] == typeof B[item]) {
            if (
              Object.prototype.toString.call(A[item]) === '[object Array]' ||
              Object.prototype.toString.call(A[item]) === '[object Object]'
            ) {
              if(!demo(A[item], B[item])){
                res = false
              }
            } else {
              if(A[item] !== B[item]) {
                  res = false
              }
            }
        } else res = false
      })
  }
  return res
}
var n = new Date()

console.log(demo(
{
  name: 1, 
  obj: {
    name: 22,
    age: [12,3,3,5,{
      name: n
    },6,7]
  }
}, 
{
  name: 1, 
  obj: {
    name: 22,
    age: [12,3,3,5,{
      name: n
    },6,7]
  }
}))