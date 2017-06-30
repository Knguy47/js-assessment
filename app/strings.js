exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let stringArray = str.split('');
    let storage = {};
    stringArray.reduce((acc, letter) => {
    
    })
  },

  wordWrap: function(str, cols) {
    let result = '';
    
    for(var i = 1; i < str.length; i++) {
      result += str.slice(i, i+cols+1) + '\n';
    }
    
    return result;
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
