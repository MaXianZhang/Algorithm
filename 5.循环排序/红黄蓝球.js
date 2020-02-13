/**
 * @param { 阿里的一道面试题 }
 * @return { 一个黑匣子里面有9个乱序的球，红黄蓝各三个，现在提供两个函数getcolor(i), swap(i,j) 
 * 让黑匣子里面的球按照红黄蓝红黄蓝红黄蓝这样的顺序排序 }
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

function demo(data) {
  let i = 0
  let j = 1
  while (i < data.length - 1) {
    ball = data[i]
    if (ball === shouldBe(i)) {
      j = i
      i++
    } else {
      j++
      swap(i, j)
    }
  }
}

lg(data)

demo(data)

lg(data)