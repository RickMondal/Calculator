var root = $('#root').textContent;
var division = $('#division').textContent;

$('button').on('click', function() {
  $('#screen').value = $('#screen').value + this.value;
  $('#delete').innerHTML = "&#8592";
  ripple(this);
})

$('#delete').on('click', function() {
  if (this.innerHTML.indexOf("C") !== -1) {
    $('#screen').value = "";
    this.innerHTML = "&#8592";
    ripple(this);
  } else {
    $('#screen').value = $('#screen').value.substring(0, $('#screen').value.length - 1);
    if ($('#screen').value.charAt($('#screen').value.length - 1) == ("n" || "s" || "g")) {
      $('#screen').value = $('#screen').value.substring(0, $('#screen').value.length - 3);
    } else if ($('#screen').value.charAt($('#screen').value.length - 1) == (">")) {
      $('#screen').value = $('#screen').value.substring(0, $('#screen').value.length - 16);
    }
    ripple(this);
  }
})

$('#shift').on('click', function() {
  ripple(this);
  if ($('#shift').getAttribute("num") == "0") {
    $('.functions')[5].innerHTML = "P";
    $('.functions')[5].value = "P";
    $('.functions')[6].innerHTML = "C";
    $('.functions')[6].value = "C";
    $('.functions')[7].innerHTML = "sin&#8315&#185";
    $('.functions')[7].value = $('.functions')[7].innerHTML + "(";
    $('.functions')[8].innerHTML = "cos&#8315&#185";
    $('.functions')[8].value = $('.functions')[8].innerHTML + "(";
    $('.functions')[9].innerHTML = "tan&#8315&#185";
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
  ripple(this);
  evaluate($('#screen').value.replace("=", ''));
  $('#screen').value = $('#screen').value;
})
$('#screen').on('keydown', function(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    evaluate($('#screen').value.replace("=", ''));
    $('#screen').value = $('#screen').value;
  }
})
