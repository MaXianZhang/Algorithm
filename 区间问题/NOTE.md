## 区间问题

### 思路

把一个大问题先转化为两个区间之间的问题
两个区间有六种情况

1、A包B
2、B包A
3、不相交（A左或B左）
4、A和B右相交
5、A和B左相交

如果适当排序的话，可进一步简化问题

#### 合并区间

有点类似于双指针的思路，先排序，记录上一个区间的start、end，找下一个节点的start判断是否重叠，然后按情况重制start和end



