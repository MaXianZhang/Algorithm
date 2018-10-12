var arr = [1,2,3,0,6,0,3,0,6,3,6,3,6,6,0,3]
var store = []


function check(arr) {
  var demo = arr.slice(arr.length - 3)
  return demo.sort().join('') == '036'
}

function dele(arr) {
  return arr.splice(0, arr.length - 3)
}




arr.forEach(item => {
  store.push(item)
  if(store.length >= 3) {
    if(check(store)) {
      store = dele(store)
    }
  }
})

console.log(store)

