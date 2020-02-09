const lg = console.log

function find_duplicate(nums) {
  let i = 0;
  const n = nums.length;
  while (i < n) {
  lg(nums)

    j = nums[i];
    if (nums[i] < n && nums[i] !== nums[j]) {
      lg(i, j);
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }

  }

  // // find the first number missing from its index, that will be our required number
  // for (i = 0; i < n; i++) {
  //   if (nums[i] !== i) {
  //     return i;
  //   }
  // }

  return nums[nums.length - 1];
}


console.log(find_duplicate([1, 4, 4, 3, 2]));
// console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
// console.log(find_duplicate([2, 4, 1, 4, 4]));