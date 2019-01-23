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