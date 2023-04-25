(function (window) {
  var LuffyGreeter = {};
  LuffyGreeter.name = "Luffy";
  var greeting = "Hello ";
  LuffyGreeter.sayHello = function () {
    console.log(greeting + LuffyGreeter.name);
  }

  window.LuffyGreeter = LuffyGreeter;

})(window);
