function find_missing_number_mine(nums) {
  let i = 0;
  let result = 0
  while (i < nums.length) {
    const j = nums[i] - 1;
    if(nums[i] === undefined) {
      result = i + 1
    }
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }
  return result;
}

function find_missing_number(nums) {
  let i = 0;
  const n = nums.length;
  while (i < n) {
    j = nums[i];
    if (nums[i] < n && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }

  // find the first number missing from its index, that will be our required number
  for (i = 0; i < n; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return n;
}


console.log(find_missing_number([4, 0, 3, 1]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));