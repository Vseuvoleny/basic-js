
module.exports = class DepthCalculator {
  
  calculateDepth(arr,count = 1) {
    
    let result = arr.find(el => Array.isArray(el));
    if(Array.isArray(result)){
          
        return this.calculateDepth(arr.flat(),count = count + 1)
    }
    else{
        return count;
    }
    
  }
};

