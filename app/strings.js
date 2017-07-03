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
    const words = str.split(' ');
    let result = '';
    let currentLine = cols;

    words.forEach((word) => {
      if(currentLine === cols) {
        if(word.length >= cols) {
          result += word + '\n';
          currentLine = cols;
        } else {
          result += word;
          currentLine -= word.length;
        }
      } else if (word.length > currentLine) {
          if(word.length >= cols) {
            result += '\n'+ word + '\n';
            currentLine = cols;
          } else {
            result += '\n' + word;
            currentLine -= word.length;
          }
      } else if (word.length + 1 === currentLine) {
        result += ' ' + word + '\n';
        currentLine = cols;
      } else {
        result += ' ' + word;
        currentLine -= 1 + word.length;
      }
    })

    return result;
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
