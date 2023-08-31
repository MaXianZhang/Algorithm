## 环型链表相关：快乐数字

https://leetcode.cn/problems/happy-number/solutions/224894/kuai-le-shu-by-leetcode-solution/

1、如果用哈希记录，在不断的计算中，遇到重复的数字时就代表出问题了，当然这会支付另外的空间

时间O(log(n)), 空间O(log(n))

2、单纯的看题目不会直接想到环形链表，需要一层思维的转化，才能将问题转化为环形链表问题，，当然还有最大值之类的数学限制

时间O(log(n)), 空间O(1)

