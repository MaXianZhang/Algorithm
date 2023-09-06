/** 77.组合
 * 元素无重不可复选
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(n, k) {
    const nums = [];
    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }
    const res = [];
    const path = [];

    const combineHelper = start => {
        // 长度相等，就不必继续递归了
        if (path.length === k) {
            res.push([...path]);
            return;
        }
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            combineHelper(i + 1);
            path.pop();
        }
    }

    combineHelper(0);
    return res;
};

console.log(combine(3, 2));


/** 90 子集 II
 * 元素可重不可复选
 * TODO 剪枝逻辑 45
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    nums = nums.sort((a, b) => a - b);
    const res = [];
    const helper = (path, start) => {
        res.push([...path]);
        
        for (let i = start; i < nums.length; i++) {
            // ???
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }
            path.push(nums[i]);
            
            helper(path, i + 1);
            
            path.pop();
        }
    };
    
    helper([], 0);
    return res;
};

console.log(subsetsWithDup([1,2,2]));

/** 40. 组合总和 II
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function(candidates, target) {
    const res = [];
    const path = [];
    let pathSum = 0;
    candidates = candidates.sort((a, b) => a - b);

    const combinationSum2Helper = start => {
        if (pathSum === target) {
            res.push([...path]);
            return;
        }
        if (pathSum > target) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // ???
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            path.push(candidates[i]);
            pathSum += candidates[i];

            combinationSum2Helper(i + 1);

            path.pop();
            pathSum -= candidates[i];
        }
    };
    combinationSum2Helper(0);

    return res;
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8));


/** 39.组合总和
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    const path = [];
    const res = [];
    let sum = 0;
    const helper = start => {
        if (sum > target) {
            return;
        }
        
        if (sum === target) {
            res.push([...path]);
        }
        
        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            sum += candidates[i];
            
            helper(i);
            
            path.pop();
            sum -= candidates[i];
        }
    };
    helper(0);
    
    return res;
};