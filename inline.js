 var Inline = (function() {
 
  (function(){}).constructor.prototype.where = function() {
    return new Inline(this, arguments);
  }
 
  var Inline = function(fn, args){ 
    this.fn = fn;
    this.args = args;
  }
  
  Inline.prototype.shouldEqual = function(expectedVal) {
    var actualVal = this.fn.apply(undefined, this.args);
    if (actualVal != expectedVal) {
      console.error("Expected " + expectedVal + ", got " + actualVal + " for following function:", this.fn);
      console.dir(this.fn);
    }
    return this.fn;
  }
  
  return Inline;
})();