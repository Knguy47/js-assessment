exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
   return new Promise ((resolve) => {
      resolve(value);
    })
  },

  manipulateRemoteData: function(url) {
    return new Promise((resolve) => {
      return $.getJSON(url, (result) => {
        resolve(result.people.map((person) => {
          return person.name;
        }).sort());
      });
    });
  }
};
