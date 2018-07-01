var root = $('#root').textContent;
var division = $('#division').textContent;

$('button').on('click', function() {
  if ($('#screen').innerHTML.indexOf('=') != -1) {
    $('#screen').innerHTML = $('#screen').innerHTML.replace($('#screen').innerHTML.substring(0, $('#screen').innerHTML.indexOf('=') + 1), '<br>')
  }
  $('#screen').innerHTML = '<br>' + $('#screen').innerHTML.replace("<br>", "") + this.value;
  $('#delete').innerHTML = "&#8592";
  ripple(this);
})

$('#delete').on('click', function() {
  if (this.innerHTML.indexOf("C") !== -1) {
    $('#screen').innerHTML = "<br>";
    this.innerHTML = "&#8592";
    ripple(this);
  } else {
    if ($('#screen').innerHTML.length > 4) {
      $('#screen').innerHTML = $('#screen').innerHTML.substring(0, $('#screen').innerHTML.length - 1);
      if ($('#screen').innerHTML.charAt($('#screen').innerHTML.length - 1) == ("n" || "s" || "g")) {
        $('#screen').innerHTML = $('#screen').innerHTML.substring(0, $('#screen').innerHTML.length - 3);
      } else if ($('#screen').innerHTML.charAt($('#screen').innerHTML.length - 1) == (">")) {
        $('#screen').innerHTML = $('#screen').innerHTML.substring(0, $('#screen').innerHTML.length - 16);
      }
      ripple(this);
    }
  }
})

$('#shift').on('click', function() {
  ripple(this);
  if ($('#shift').getAttribute("num") == "0") {
    $('.functions')[5].innerHTML = "P";
    $('.functions')[5].value = "P";
    $('.functions')[6].innerHTML = "C";
    $('.functions')[6].value = "C";
    $('.functions')[7].innerHTML = "sin" + "<sup>-1</sup>";
    $('.functions')[7].value = $('.functions')[7].innerHTML + "(";
    $('.functions')[8].innerHTML = "cos" + "<sup>-1</sup>";
    $('.functions')[8].value = $('.functions')[8].innerHTML + "(";
    $('.functions')[9].innerHTML = "tan" + "<sup>-1</sup>";
    $('.functions')[9].value = $('.functions')[9].innerHTML + "(";
    $('#shift').setAttribute("num", "1")
  } else {
    $('.functions')[5].innerHTML = "!";
    $('.functions')[5].value = "!";
    $('.functions')[6].innerHTML = "log";
    $('.functions')[6].value = "log(";
    $('.functions')[7].innerHTML = "sin";
    $('.functions')[7].value = $('.functions')[7].innerHTML + "(";
    $('.functions')[8].innerHTML = "cos";
    $('.functions')[8].value = $('.functions')[8].innerHTML + "(";
    $('.functions')[9].innerHTML = "tan";
    $('.functions')[9].value = $('.functions')[9].innerHTML + "(";
    $('#shift').setAttribute("num", "0")
  }
})

$('#angle').on('click', function() {
  if (this.innerHTML == "DEG") {
    this.innerHTML = "RAD";
  } else {
    this.innerHTML = "DEG";
  }
  ripple(this);
})

$('#eval').on('click', function() {
  $('#screen').innerHTML = $('#screen').innerHTML.replace('<br>', '');
  ripple(this);
  evaluate($('#screen').innerHTML.replace('<br>' && "=", ''));
})
