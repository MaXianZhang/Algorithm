const lg = console.log

function cyclic_sort(nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if(nums[i] === undefined) {
      lg(nums[i], i)
    }
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
    lg(nums)
  }
  return nums;
}

console.log(cyclic_sort([1, 1, 4, 3, 2]));
// console.log(cyclic_sort([2, 6, 4, 3, 1, 5]));
// console.log(cyclic_sort([1, 5, 6, 4, 3, 2]));