function quickSort(nums, i = 0, j = nums.length - 1) {
  if (i >= j) return 
  let end = j, start = i
  let mark = nums[i];

  while (i !== j) {
    while (nums[j] >= mark && i < j) j--
    while (nums[i] <= mark && i < j) i++
    if (i < j) turn(nums, i, j)
  }

  turn(nums, start, j)
  quickSort(nums, start, i - 1)
  quickSort(nums, i + 1, end)

  return nums
}


function turn(arr, from, to) {
  [arr[from], arr[to]] = [arr[to], arr[from]]
}

let d = Date.now()
console.log(qSort([41,3,21,7,8,94,345,2,13,234,123,52,3,45]))
console.log(Date.now() - d)


