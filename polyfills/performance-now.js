(function () {
  if (!window.performance || !window.performance.now) {
    Date.now || (Date.now = function () {
      return new this().getTime()
    });

    (window.performance ||
      (window.performance = {})).now = function () {
      return Date.now() - offset
    }

    var offset = (window.performance.timing ||
      (window.performance.timing = {})).navigatorStart ||
        (window.performance.timing.navigatorStart = Date.now())
  }
})()
