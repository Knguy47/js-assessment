exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    const oldStr = str;
    return function(str){return oldStr + ', ' + str};
  },

  makeClosures: function(arr, fn) {
    const result = function(arr, fn) {
      return arr.map((element) => {  
        const closure = function() {
          return fn(element);
        };

        return closure;
      });
    }

    return result(arr, fn);
  },

  partial: function(fn, str1, str2) {
    const partialFn = fn.bind(this, str1, str2);
    return partialFn;
  },

  useArguments: function() {
    const args = Array.prototype.slice.call(arguments);
    return args.reduce((acc, element) => {
      return acc + element;
    });
  },

  callIt: function(fn) {
    const args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(this, args);
  },

  partialUsingArguments: function(fn) {
    const args = Array.prototype.slice.call(arguments, 1);
    const partialFn = fn.bind(this, ...args);
    
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
