function evaluate(expression) {
  if (expression != "") {
    answer = [];
    signs = [];
    expression = expression.replace('x', '*');
    expression = expression.replace(division, '/');
    expression = expression.replace('%', '/100');
    expression = expression.replace('&#960', Math.PI);
    expression = expression.replace('<sup>-1</sup>', 'in');
    brackets_start = (expression.match(/[(]/g) || []);
    brackets_end = (expression.match(/[)]/g) || []);
    if (brackets_start.length !== brackets_end.length) {
      for (var i = 0; i < (brackets_start.length - brackets_end.length); i++) {
        expression += ")";
      }
    }
    numbers = expression.split(/[+*\/-]/g);
    operators = expression.match(/[+*\/-]/g);
    if (operators == null) {
      operators = [];
    }
    for (var i = 0; i < numbers.length; i++) {
      signs = numbers[i].match(/[!PC\^\u221A]/);
      if (signs == null) {
        numbers[i] = eval(numbers[i]);
      } else {
        if (signs[0] == "!") {
          numbers[i] = fact(numbers[i].replace("!", ""))
        } else if (signs[0] == "^") {
          numbers[i] = Math.pow(numbers[i].split("^")[0], numbers[i].split("^")[1]);
        } else if (signs[0] == root) {
          if (numbers[i].split(root)[0] == "") {
            numbers[i] = Math.pow(numbers[i].split(root)[1], 1 / 2);
          } else {
            numbers[i] = Math.pow(numbers[i].split(root)[1], 1 / numbers[i].split(root)[0]);
          }
        } else if (signs[0] == "P") {
          numbers[i] = fact(numbers[i].split('P')[0]) / fact((numbers[i].split('P')[0] - numbers[i].split('P')[1]));
        } else if (signs[0] == "C") {
          numbers[i] = fact(numbers[i].split('C')[0]) / (fact((numbers[i].split('C')[0] - numbers[i].split('C')[1])) * fact(numbers[i].split('C')[1]));
        }
      }
    }
    for (var i = 0; i < numbers.length; i++) {
      answer.push(numbers[i]);
      if (operators.length != 0) {
        answer.push(operators[i]);
      }
    }
    answer = answer.join('');
    $('#screen').innerHTML = eval(answer);
    if ($('#screen').innerHTML.indexOf("999999") !== -1) {
      $('#screen').innerHTML = Math.ceil(parseFloat($('#screen').innerHTML) * 10000000000000) / 10000000000000;
    }
    if ($('#screen').innerHTML.indexOf("000000") !== -1) {
      $('#screen').innerHTML = Math.floor(parseFloat($('#screen').innerHTML) * 10000000000000) / 10000000000000;
      console.log(Math.floor(parseFloat($('#screen').innerHTML) * 10000000000000) / 10000000000000);
    }
    if (eval($('#screen').innerHTML) == undefined) {
      $('#screen').innerHTML = "<br>";
    }
    if (eval($('#screen').innerHTML) == $('#screen').innerHTML) {
      $('#screen').innerHTML = "<br>= " + $('#screen').innerHTML;
    }
  }
  $('#delete').innerHTML = "C";
}

function log(num) {
  return Math.log(num)
}

function sin(ang) {
  if ($('#angle').innerHTML == "RAD") {
    return Math.sin(ang);
  } else {
    return Math.sin(ang * Math.PI / 180);
  }
}

function cos(ang) {
  if ($('#angle').innerHTML == "RAD") {
    return Math.cos(ang);
  } else {
    return Math.cos(ang * Math.PI / 180);
  }
}

function tan(ang) {
  if ($('#angle').innerHTML == "RAD") {
    return Math.tan(ang);
  } else {
    return Math.tan(ang * Math.PI / 180);
  }
}

function sinin(num) {
  if ($('#angle').innerHTML == "RAD") {
    return Math.asin(num);
  } else {
    return Math.asin(num) * 180 / Math.PI;
  }
}

function cosin(num) {
  if ($('#angle').innerHTML == "RAD") {
    return Math.acos(num);
  } else {
    return Math.acos(num) * 180 / Math.PI;
  }
}

function tanin(num) {
  if ($('#angle').innerHTML == "RAD") {
    return Math.atan(num);
  } else {
    return Math.atan(num) * 180 / Math.PI;
  }
}

function fact(num) {
  constant = num;
  for (var i = 1; i < constant; i++) {
    num *= i;
  }
  return num;
}

function ripple(parent) {
  var child = document.createElement("span");
  child.setAttribute("id", "ripple")
  parent.appendChild(child);
  setTimeout(function() {
    parent.removeChild(child);
  }, 500);
}
