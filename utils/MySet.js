class MySet extends Set {  
    // 并集  
    union(otherSet) {  
        let unionSet = new MySet();  
        for (let item of this) {  
            unionSet.add(item);  
        }  
        for (let item of otherSet) {  
            unionSet.add(item);  
        }  
        return unionSet;  
    }  
  
    // 交集  
    intersection(otherSet) {  
        let intersectionSet = new MySet();  
        for (let item of this) {  
            if (otherSet.has(item)) {  
                intersectionSet.add(item);  
            }  
        }  
        return intersectionSet;  
    }  
  
    // 子集  
    isSubset(otherSet) {  
        for (let item of this) {  
            if (!otherSet.has(item)) {  
                return false;  
            }  
        }  
        return true;  
    }  
  
    // 差集  
    difference(otherSet) {  
        let differenceSet = new MySet();  
        for (let item of this) {  
            if (!otherSet.has(item)) {  
                differenceSet.add(item);  
            }  
        }  
        return differenceSet;  
    }  
}