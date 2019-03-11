async function a1 () {
  console.log('a1 start')
  await a2()
  console.log('a1 end')
}
async function a2 () {
  console.log('a2')
}

console.log('script start')

setTimeout(() => {
  console.log('setTimeout')//1
}, 0)

Promise.resolve().then(() => {
  console.log('promise1')//2
})

a1()

let promise2 = new Promise((resolve) => {
  resolve('promise2.then')
  console.log('promise2')
}).then((res) => {
  console.log(res)//3
  Promise.resolve().then(() => {//4
      console.log('promise3')
  })
})
console.log('script end')

//执行栈1
'script start'
// setTimeout 进入任务队列
// promise1 进入任务队列
'a1 start'
'a2'
// await后的代码（a1 end）进入任务队列
'promise2'
// promise2.then 进入任务队列
'script end'
//执行栈1结束

// 任务队列微任务依次进栈
'promise1'
'a1 end' 
'promise2.then'
// promise3 进入任务队列
'promise3'

// 执行完所有微任务才执行宏任务
'setTimeout'

// 新知识：
// async被await分开了
// 前半部分是同步执行，await后的代码异步执行，并且是微任务