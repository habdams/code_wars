function positiveSum(arr) {
    let result = arr.reduce(function(sum,current){
      if(current>=0)
          return sum+=current
      else if(current <0)
        return sum += 0
               
      }, 0)
    return result
  }