exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let counter = 0;
    let result = '';

    for(let i = 0; i < str.length; i++) {
      if(str[i] !== str[i - 1]) {
        counter = 0;
      }

      if(counter < amount) {
        result += str[i]
        counter++;
      }
    }

    return result;
  },

  wordWrap: function(str, cols) {
    let words = str.split(' ');
    let result = '';
    
    for(var i = 1; i < words.length; i++) {
      result += words[i] + '\n';
    }
    
    return result;
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
