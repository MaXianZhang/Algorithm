function cyclic_sort(nums) {
    let i = 0;
    while (i < nums.length) {
        const j = nums[i] - 1;
        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
        } else {
            i += 1;
        }

        console.log(nums.join(','))
    }
    return nums;
}

console.log(cyclic_sort([2, 6, 4, 3, 1, 5]));