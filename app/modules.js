exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    const store = {};
    store.name = str2;
    store.greeting = str1;

    store.sayIt = function() {
      return `${store.greeting}, ${store.name}`;
    };

    return store;
  }
};
