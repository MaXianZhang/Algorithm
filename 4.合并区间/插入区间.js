const lg = console.log

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

/**
 * @param { 给定一个按开始时间排序的非重叠区间的列表，在正确的位置插入一个给定的区间，并合并所有必要的区间，以生成一个只有互斥区间的列表。 }
 * @return { 算法展示完美的展示来我们需要的思路，一个索引负责遍历，几个while对应不同遍历到不同地方如何处理 }
  */

function insert(intervals, new_interval) {
  let merged = [],
    i = 0;

  // 所有在new之前的区间，全部跳过
  while (i < intervals.length && intervals[i].end < new_interval.start) {
    merged.push(intervals[i]);
    i += 1;
  }

  // 跳过这些之后，证明开始相交了

  // 在此条件未false之前，相交还没解说结束，所有相交都要合并
  while (i < intervals.length && intervals[i].start <= new_interval.end) {
    new_interval.start = Math.min(intervals[i].start, new_interval.start);
    new_interval.end = Math.max(intervals[i].end, new_interval.end);
    i += 1;
  }

  // 把新的new添加到结果里
  merged.push(new_interval);

  // 剩下的未相交的再填进去
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i += 1;
  }

  return merged;
}


process.stdout.write('Intervals after inserting the new interval: ');
let result = insert([
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
], new Interval(4, 6));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
], new Interval(4, 10));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([new Interval(2, 3),
  new Interval(5, 7),
], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();