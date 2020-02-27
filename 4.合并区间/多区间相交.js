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
 * @param { 给定两个区间列表，找出这两个列表的交集。 每个列表由根据开始时间排序的不相交的间隔组成。 }
 * @return { 可以用某一个变量代表一种情况，以便于多条件逻辑判断 }
  */

function merge_mine(intervals_a, intervals_b) {
  const result = []
  let aI = 0
  let bI = 0

  while (aI < intervals_a.length && bI < intervals_b.length) {
    lg()
    lg(aI, bI)
    lg(intervals_a[aI])
    lg(intervals_b[bI])
    if (intervals_a[aI].end < intervals_b[bI].start) {
      lg(1)
      // result.push(intervals_a[aI])
      aI++
    } else if (intervals_b[bI].end < intervals_a[aI].start) {
      lg(2)
      // result.push(intervals_b[bI])
      bI++
    } else {
      lg(3)
      result.push(new Interval(
        Math.max(intervals_a[aI].start, intervals_b[bI].start),
        Math.min(intervals_a[aI].end, intervals_b[bI].end)
      ))
      if (intervals_a[aI].start <= intervals_b[bI].start) {
        aI++
      } else {
        bI++
      }
    }
  }

  return result;
}

function merge(intervals_a, intervals_b) {
  let result = [],
    i = 0,
    j = 0;

  while (i < intervals_a.length && j < intervals_b.length) {
    // check if intervals overlap and intervals_a[i]'s start time lies within the other intervals_b[j]
    a_overlaps_b = intervals_a[i].start >= intervals_b[j].start && intervals_a[i].start <= intervals_b[j].end;

    // check if intervals overlap and intervals_a[j]'s start time lies within the other intervals_b[i]
    b_overlaps_a = intervals_b[j].start >= intervals_a[i].start && intervals_b[j].start <= intervals_a[i].end;

    // store the the intersection part
    if (a_overlaps_b || b_overlaps_a) {
      result.push(new Interval(Math.max(intervals_a[i].start, intervals_b[j].start),
        Math.min(intervals_a[i].end, intervals_b[j].end)));
    }
    // move next from the interval which is finishing first
    if (intervals_a[i].end < intervals_b[j].end) {
      i += 1;
    } else {
      j += 1;
    }
  }

  return result;
}

process.stdout.write('Intervals Intersection: ');
let result = merge([new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)], [new Interval(2, 3), new Interval(5, 7)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals Intersection: ');
result = merge([new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)], [new Interval(5, 10)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();



