/**
 * @param { 阿里的一道面试题 }
 * @param { 一个黑匣子里面有9个乱序的球，红黄蓝各三个，现在提供两个函数getcolor(i), swap(i,j) 
 * 让黑匣子里面的球按照红黄蓝红黄蓝红黄蓝这样的顺序排序
 * getcolor(i) 可以获取第i个球的颜色
 swap(i,j) 可以交换第i个和第j个球的顺序
 要求时间复杂度On 空间复杂度O1
  }
  */
const lg = console.log
const data = ['黄', '黄', '红', '黄', '蓝', '蓝', '红', '蓝', '红']

function getcolor(i) {
  return data[i]
}

function swap(i, j) {
  [data[i], data[j]] = [data[j], data[i]]
}

function shouldBe(i) {
  const j = i % 3

  switch (j) {
    case 0: {
      return '红'
    }
    case 1: {
      return '黄'
    }
    case 2: {
      return '蓝'
    }
  }
}

function sortBalls(data) {
  let i = 0
  let j = 1
  while (i < data.length - 1) {
    ball = getcolor(i)
    if (ball === shouldBe(i)) {
      i++
      j = i + 1
    } else {
      j++
      swap(i, j)
    }
  }
}

lg(data)

sortBalls(data)

lg(data)