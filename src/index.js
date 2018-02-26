module.exports = function getZerosCount(number) {
  var res = 0;
    
    for (var i = 5; i<number; i=i*5){
      res=res+Math.floor(number/i);
    }
    return(res);

    
}
