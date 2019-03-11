function fangdou(f, timeLimit) {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    timer = setTimeout(() => {
      f.call(this, ...arguments)
    }, timeLimit)
  }
}

function back(i = 2) {
  console.log(i)
}
// setInterval(
//   fangdou(back, 500)
// , 1000) 


function jieliu(f, CD) {
  let lastTime = null
  return function () {
    if(new Date() - lastTime > CD || !lastTime) {
      lastTime = new Date()
      f(...arguments)
    } else {
      console.log('缓冲中')
    }
  }
}

function Q() {
  console.log('释放成功')
}

setInterval(jieliu(Q, 2000), 200)