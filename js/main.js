$('#screen').value = '\n';

var root = $('#root').textContent;
var division = $('#division').textContent;

$('button').on('click', function() {
  if ($('#screen').value.indexOf('=') != -1) {
    $('#screen').value = $('#screen').value.replace($('#screen').value.substring(0, $('#screen').value.indexOf('=') + 1), '\n')
  }
  $('#screen').value = '\n' + $('#screen').value.replace("\n", "") + this.value;
  $('#delete').innerHTML = "&#8592";
  ripple(this);
  if ($('#screen').scrollWidth > $('#screen').innerWidth()) {
    $('#screen').style.fontSize = ($('#screen').style.fontSize.replace('vw', '') * 6 / 7) + 'vw';
  }
})

$('#delete').on('click', function() {
  if (this.innerHTML.indexOf("C") !== -1) {
    $('#screen').value = "\n";
    this.innerHTML = "&#8592";
    ripple(this);
  } else {
    if ($('#screen').value.length > 1) {
      $('#screen').value = $('#screen').value.substring(0, $('#screen').value.length - 1);
      if ($('#screen').value.charAt($('#screen').value.length - 1) == ("n" || "s" || "g")) {
        $('#screen').value = $('#screen').value.substring(0, $('#screen').value.length - 3);
      } else if ($('#screen').value.charAt($('#screen').value.length - 1) == (">")) {
        $('#screen').value = $('#screen').value.substring(0, $('#screen').value.length - 16);
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
  $('#screen').value = $('#screen').value.replace('\n', '');
  ripple(this);
  evaluate($('#screen').value.replace('\n' && "=", ''));
})
$('#screen').on('keydown', function(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    evaluate($('#screen').value.replace('\n' && "=", ''));
    $('#screen').value = $('#screen').value;
  }
})
