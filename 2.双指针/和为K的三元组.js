
/**
 * @param { 给定一个未排序的数组，找出其中所有加起来等于零的唯一三元组。}
 * @return { 用增加一个指针的方式，来降低遍历的次数 }
 */

function search_triplets(arr) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) { // skip same element to avoid duplicate triplets
      continue;
    }
    search_pair(arr, -arr[i], i + 1, triplets);
  }

  return triplets;
}

function search_pair(arr, target_sum, left, triplets) {
  let right = arr.length - 1;
  while (left < right) {
    const current_sum = arr[left] + arr[right];
    if (current_sum === target_sum) {
      // 找到三元组
      triplets.push([-target_sum, arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while (left < right && arr[left] === arr[left - 1]) {
        // 跳过相同的元素，以避免重复的三元组
        left += 1; 
      }
      while (left < right && arr[right] === arr[right + 1]) {
        // 跳过相同元素避免重复
        right -= 1;
      }
    } else if (target_sum > current_sum) {
      // 左移左指针，让两值和变大
      left += 1;
    } else {
      // 右移右指针，让两值和变大
      right -= 1;
    }
  }
}


// console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
// console.log(search_triplets([-5, 2, -1, -2, 3]));
