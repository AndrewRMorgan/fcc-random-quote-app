$(document).ready(function(){

$(window).load(function() {
  $.ajax({
  url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
  type: 'POST',
  dataType: 'json',
  success: function(data) {
      $('#quote').text('“' + data.quote + '”');
      $('#author').text("- " + data.author);
      $('#twitter').click(function(){
        window.open('http://twitter.com/home/?status=' + data.quote + data.author);
      });
    },
  error: function(err) { alert(err); },
  beforeSend: function(xhr) {
  xhr.setRequestHeader("X-Mashape-Key", "/* Add your mashape api key here */");
  }
  });
});

$('#getQuote').click(function() {
  $.ajax({
  url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
  type: 'POST',
  dataType: 'json',
  success: function(data) {
    $('#quote').text('“' + data.quote + '”');
    $('#author').text("- " + data.author);
    $('#twitter').click(function(){
      window.open('http://twitter.com/home/?status=' + data.quote  + data.author);
    });
    },
  error: function(err) { alert(err); },
  beforeSend: function(xhr) {
  xhr.setRequestHeader("X-Mashape-Key", "/* Add your mashape api key here */");
  }
  });
});
});
