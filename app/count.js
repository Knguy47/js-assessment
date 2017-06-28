exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let helper = {};
    let counter = start
    console.log(start); 
    
    let timer = setInterval(() => {
      if(counter < end) {
        counter++;
        console.log(counter);
      }
    }, 100);

    helper.cancel = () => {
      clearInterval(timer);
    };

    return helper;
  }
};
