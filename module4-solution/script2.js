(function (window) {
  var SanjiGreeter = {};
  SanjiGreeter.name = "Sanji";
  var greeting = "Salute ";
  SanjiGreeter.sayHi = function () {
    console.log(greeting + SanjiGreeter.name);
  }

  window.SanjiGreeter = SanjiGreeter;

})(window);



