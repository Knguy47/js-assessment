exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    oldStr = str;
    return function(str){return oldStr + ', ' + str};
  },

  makeClosures: function(arr, fn) {
    let close = function(arr, fn) {
      return arr.map((element) => {  
        return fn(element);
      });
    }

    let result = close(arr, fn);
    return result;
  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {
    let args = Array.prototype.slice.call(arguments);
    console.log(args);
  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
