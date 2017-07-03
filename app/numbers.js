exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    const binary = this.convertToBinary(num);
    return parseInt(binary[binary.length - bit], 10);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function convertToBinary(num) {
    let binary = num.toString(2);
    const numZeros = 8 - binary.length;
    for (let i = 0; i < numZeros; i++) {
      binary = `0${binary}`;
    }

    return binary;
  },

  multiply: function(a, b) {
    // I was unable to solve this without looking at the answer, 
    // but I spent time to understand the solution.
    
    a = adjust(a);
    b = adjust(b);

    function adjust(num) {
      let exponent, multiplier;

      if (num < 1) {
        exponent = Math.floor( Math.log(num) * -1 );
        multiplier = Math.pow(10, exponent);

        return {adjusted: num * multiplier, multiplier: multiplier};
      }

      return {adjusted: num, multiplier: 1};
    }

    let result = (a.adjusted * b.adjusted) / (a.multiplier * b.multiplier);

    return result;

  }
};
