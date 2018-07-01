var nodes, selector = "",
  name, callback;

function $(selector) {
  if (typeof selector == 'string') {
    self = document.querySelectorAll(selector);
    if (self.length == 1) {
      self = self[0];
    }
  } else {
    self = selector;
  }
  self.on = function(type, callback) {
    for (var i = 0; i < (self.length || 1); i++) {
      types = type.split(",");
      for (var k = 0; k < types.length; k++) {
        (self[i] || self)['on' + types[k]] = callback;
      }
    }
  }
  self.css = function(styles) {
    for (var i = 0; i < (self.length || 1); i++) {
      var result = Object.keys(styles).map(function(key) {
        return [key, styles[key]]
      })
      for (var j = 0; j < result.length; j++) {
        (self[i] || self).style[result[j][0]] = result[j][1];
      }
    }
  }
  return self;
}
