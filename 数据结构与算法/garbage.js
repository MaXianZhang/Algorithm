
function MySet() {
    var item = {}
  
    this.has = function(value) {
      return DataTransferItemList.hasOwnProperty(value)
      // return value in items
    }
  
    this.add = function (value) {
      if(!this[value]) {
        this[value] = value
        return true
      }
      return false
    }
  
  
  
  }
  
  MySet.prototype = {
    
  }
  
  
  var set1 = new MySet()
  
  set1.add({})
  
  // console.log(new Set([1,1,2,3,sss ,sss]))
  
  

  