function quickSort(nums, i = 0, j = nums.length - 1) {
  // 采用双索引，一个从前，一个从后
  // 停止条件，头索引大于等于尾索引， 也就是两索引重合的时候
  if (i >= j) return
  let start = i, end = j;
  // 取头索引的值作为中间值
  let mark = nums[i];

  // 相当于双向遍历，收尾相接就停，不想接就继续扫
  while (i < j) {
    // 尾索引停到了一个比中间值小的值上
    while (nums[j] >= mark && i < j) j--
    // 头索引停到了一个比中间值大的值上
    while (nums[i] <= mark && i < j) i++
    // 一大一小，刚刚好，换位置！
    turn(nums, i, j)
  }

  // 此时头索引的值在中间值应该在的位置，而start是中间值，交换他们，完成一次排序
  turn(nums, start, i)
  // 分别排列中间值左右的内容
  quickSort(nums, start, i - 1)
  quickSort(nums, i + 1, end)

  return nums
}


function turn(arr, from, to) {
  [arr[from], arr[to]] = [arr[to], arr[from]]
}

let d = Date.now()
console.log(quickSort([41, 3, 21, 7, 8, 8, 8, 94, 345, 67, 13, 234, 123, 52, 3, 45]))
console.log('用时:%jms', Date.now() - d)


