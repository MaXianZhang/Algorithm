// 回调+++++++++++++++++++++++++++++++++++++++++++++++++
function 主线(副任务) {
  副任务()

  //主线任务执行中
}

function 派遣式神() {
  setTimeout(() => {
    console.log('终于TM干完活了')
  }, 2000)
}

// 主线(派遣式神)

// Promise+++++++++++++++++++++++++++++++++++++++++++++++++++++
const getJSON = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('JSON')
  }, 2000)
})

// getJSON().then(() => {
//   console.log('promise')
// })


// await+++++++++++++++++++++++++++++++++++++++++++++++++++++++

const makeRequest = async () => {
  console.log(await getJSON())
  console.log(11)
  return "done"
}

// makeRequest()

// yield

function *getData() {
  yield getJSON()
  yield getJSON()
  yield getJSON()
}

var ddd = getData() 

console.log(ddd.next().value.then(data => console.log(data)))
console.log(ddd.next().value.then(data => console.log(data)))
console.log(ddd.next().value.then(data => console.log(data)))



