## 原理

前缀和是一种转化问题的思路

通过记录数组中前边所有的和，后续就可以通过pre[j] - pre[i - 1]的方式，计算出[i, j]区间内子数组的和

这样无需遍历这个子数组，相当于降低了一层复杂度

TODO

[862. 和至少为 K 的最短子数组](https://leetcode.cn/problems/shortest-subarray-with-sum-at-least-k/description/)