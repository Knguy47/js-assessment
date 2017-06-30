exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
    return constructor;
  },

  iterate: function(obj) {
    let result = [];
    
    let keys = Object.keys(obj);
    keys.forEach((key) => {
      result.push(`${key}: ${obj[key]}`);
    });

    return result;
  }
};
