'use strict';

const url = 'https://talaikis.com/api/quotes/random/';

$('#get-another-quote-button').on('click', function(e) {
  e.preventDefault();
  $.ajax( {
    dataType: 'json',
    type: 'GET',
    url: url,
    success: function(data) {
      console.log(data);
      console.log(data.author);
      $('#quote-author').text(data.author);
      $('#quote-content').html(data.quote);
    }
  });
});

