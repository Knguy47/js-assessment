exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  const result = [];
    
    function searchDir(dir, subDirectory) {
      const targetDirectory = subDirectory || dir.dir;
      const directory = dir.dir;
      const files = dir.files || [];
      
      for (let i = 0; i < files.length; i++) {
        if (targetDirectory === directory) {
          if (typeof files[i] === 'string') {
           result.push(files[i]);
          } else {
            searchDir(files[i], files[i].dir);
          }
        } else {
          if (files[i].dir) {
            searchDir(files[i], subDirectory);
          }
        }
      };
     }
    searchDir(data, dirName);
    return result;
  },

  permute: function(arr) {
    const permutations = [];
    const stack = [];

    function permutate() {
      if (arr.length === 0) {
        permutations.push(stack.slice());
      }

      for (var i = 0; i < arr.length; i++) {
        const element = arr.splice(i, 1);
        stack.push(element);
        permutate();
        stack.pop();
        arr.splice(i, 0, element);
      }
    }

    permutate();

    for (let i = 0; i < permutations.length; i++) {
      permutations[i] = permutations[i].join('').split('');
    }
 
    return permutations;
  },

  fibonacci: function(n) {
    function fib(n) {
      if (n === 1) {
        return 1;
      } else if (n === 0) {
        return 0;
      }
      
      return fib(n - 1) + fib(n - 2);
    }

    return fib(n);
  },

  validParentheses: function(n) {
    const balancedParens = function(input) {
      const key = {
        "(": ")",
        "[": "]",
        "{": "}"
      };

      const reversekey = {
        ")": true,
        "]": true,
        "}": true
      };

      const array = input.split('');
      const store = [];

      for (let i = 0; i < array.length; i++) {
        const char = array[i];
        
        if(key[char]) {
          store.push(char);
        } else if (reversekey[char]) {
          if (key[store.pop()] !== char) {
            return false;
          }
        }
      }
      
      return store.length === 0;
    };

    const openParens = new Array(n).fill('(');
    const closeParens = new Array(n).fill(')');
    
    const parens = [...openParens, ...closeParens];
    const result = this.permute(parens);
    
    const filteredResult = result.filter((element) => {
      return balancedParens(element.join(''));
    }).map((element) => {
      return element.join('');
    });

    return [...new Set(filteredResult)];
  }
};
