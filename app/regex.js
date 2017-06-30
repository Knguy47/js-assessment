exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter: function(str) {
    return /([a-z])\1/i.test(str);
  },

  endsWithVowel: function(str) {
    return /[aeiou]$/i.test(str);
  },

  captureThreeNumbers: function(str) {
    let result = str.match(/\d{3}/g) || [];
    return result[0] || false;
  },

  matchesPattern: function(str) {
    return /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/.test(str);
  },

  isUSD: function(str) {
    return /^\$(([1-9]\d{0,2}(,\d{3})*)|(([1-9]\d*)?\d))(\.\d\d)?$/.test(str);
  }
};
