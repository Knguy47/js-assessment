exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    let result = -1;
    arr.forEach((element, index) => {
      if(element === item) {
        result = index;
      }
    });

    return result;
  },

  sum: function(arr) {
    const result = arr.reduce((acc, val) => {
      return acc + val;
    }, 0);

    return result;
  },

  remove: function(arr, item) {
    const result = arr.filter((element) => {
      return item !== element;
    });

    return result;
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i -= 1;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    const result = [...arr1, ...arr2];
    return result;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    const count = arr.reduce((acc, element) => {
      if (element === item) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);

    return count;
  },

  duplicates: function(arr) {
    const store = {};
    const result = [];
    
    arr.forEach((element) => {
      if (!store[element]) {
        store[element] = 1;
      } else {
        store[element] += 1;
      }
    });
    
    for (let key in store) {
      if (store[key] > 1) {
        result.push(parseInt(key));
      }
    }

    return result;
  },

  square: function(arr) {
    const result = arr.map((element) => {
      return element * element;
    });

    return result;
  },

  findAllOccurrences: function(arr, target) {
    const result = [];
    arr.forEach((element, index) => {
      if (element === target) {
        result.push(index);
      }
    });

    return result;
  }
};
