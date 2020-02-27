const lg = console.log
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

/**
 * @param { 给定一个间隔列表，将所有重叠的间隔合并为一个只有互斥间隔的列表。 }
 * @return { 记录start和end，这两个变量是直接产出一个区间的 }
 * @return { 有点双指针的意思，毕竟有可能三个区间环环相扣 }
  */

function merge_mine (intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  const merged = []
  intervals.sort((a, b) => a.start - b.start)
  let cur = intervals[0]
  
  while(intervals.length > 1) {
    cur = intervals[0]
    next = intervals[1]
    if(next.start <= cur.end) {
      // 我的思路这里有问题，以下一个方法为准
      intervals.shift()
      intervals.shift()
      intervals.unshift(new Interval(Math.min(cur.start, next.start), Math.max(cur.end, next.end)))
    } else {
      merged.push(intervals.shift())
    }
  }

  merged.push(intervals.shift())
  return merged;
};

function merge(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  // sort the intervals on the start time
  intervals.sort((a, b) => a.start - b.start);

  const mergedIntervals = [];
  let start = intervals[0].start,
    end = intervals[0].end;
  for (i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval.start <= end) { // overlapping intervals, adjust the 'end'
      end = Math.max(interval.end, end);
    } else { // non-overlapping interval, add the previous interval and reset
      mergedIntervals.push(new Interval(start, end));
      start = interval.start;
      end = interval.end;
    }
  }
  // add the last interval
  mergedIntervals.push(new Interval(start, end));
  return mergedIntervals;
}

merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


