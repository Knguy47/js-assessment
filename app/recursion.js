exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  let result = [];
    
    function searchDir(dir, subDirectory) {
      let targetDirectory = subDirectory || dir.dir;
      let directory = dir.dir;
      let files = dir.files || [];
      
      for(let i = 0; i < files.length; i++) {
        if(targetDirectory === directory) {
          if(typeof files[i] === 'string') {
           result.push(files[i]);
          } else {
            searchDir(files[i], files[i].dir);
          }
        } else {
          if(files[i].dir) {
            searchDir(files[i], subDirectory);
          }
        }
      };
     }
    searchDir(data, dirName);
    return result;
  },

  permute: function(arr) {
    let permutations = [];
    let stack = [];

    function permutate() {
      if(arr.length === 0) {
        permutations.push(stack.slice());
      }

      for(var i = 0; i < arr.length; i++) {
        let element = arr.splice(i, 1);
        stack.push(element);
        permutate();
        stack.pop();
        arr.splice(i, 0, element);
      }
    }

    permutate();
    for (var i = 0; i < permutations.length; i++) {
      permutations[i] = permutations[i].join('').split('');
    }
 
    return permutations;
  },

  fibonacci: function(n) {
    function fib(n) {
      if(n === 1) {
        return 1;
      } else if (n === 0) {
        return 0;
      }
      
      return fib(n - 1) + fib(n - 2);
    }

    return fib(n);
  },

  validParentheses: function(n) {
    let balancedParens = function(input) {
      let key = {
        "(": ")",
        "[": "]",
        "{": "}"
      };

      let reversekey = {
        ")": true,
        "]": true,
        "}": true
      };

      let array = input.split('');
      let store = [];

      for (let i = 0; i < array.length; i++) {
        let char = array[i];
        
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

    let openParens = new Array(n);
    let closeParens = new Array(n);
    openParens.fill('(');
    closeParens.fill(')');
    let parens = openParens.concat(closeParens);
    let result = this.permute(parens);
    // console.log(result)
    let filteredResult = result.filter((element) => {
      // console.log(balancedParens(element.join('')))
      return balancedParens(element.join(''));
    });
    // console.log(filteredResult)
    return filteredResult;
  }
};
