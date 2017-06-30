exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    let hex = (num).to
    return this.base10(hex)
  },

  multiply: function(a, b) {
    return (a * b).toFixed();
  }
};
