exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    let oldStr = str;
    return function(str){return oldStr + ', ' + str};
  },

  makeClosures: function(arr, fn) {
    let result = function(arr, fn) {
      return arr.map((element) => {  
        let closure = function() {
          return fn(element);
        };

        return closure;
      });
    }

    return result(arr, fn);
  },

  partial: function(fn, str1, str2) {
    let partialFn = fn.bind(this, str1, str2);
    return partialFn;
  },

  useArguments: function() {
    let args = Array.prototype.slice.call(arguments);
    return args.reduce((acc, element) => {
      return acc + element;
    });
  },

  callIt: function(fn) {
    let args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(this, args);
  },

  partialUsingArguments: function(fn) {
    let args = Array.prototype.slice.call(arguments, 1);
    let partialFn = fn.bind(this, ...args);
    
    return partialFn;
  },

  curryIt: function(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return fn(a, b, c);
        }
      }
    }
  }
};
