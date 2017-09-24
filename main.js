

function getRandColor()
{
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}

function placeQuote(response) {
  $('#quote').html(JSON.stringify(response.quoteText));
  
  if(JSON.stringify(response.quoteAuthor)=="\"\"")
  {
     $("#author").html("UNKNOWN");
  }
  else{
     $("#author").html("___"+JSON.stringify(response.quoteAuthor));
  }
 
  $("#tweet").attr('href', "https://twitter.com/intent/tweet/?text=" +
    JSON.stringify(response.quoteText) + " ____"+  JSON.stringify(response.quoteAuthor));
  
  var color= getRandColor();
  $("#quote").css("background-color",color );
  $("#author").css("background-color",color );
  $("#request_quote").css("border-color",color );
   $("#t_btn").css("border-color",color );
}

function error(jqxhr, textStatus, err) {
  console.log("Request Failed: " + textStatus + ", " + err);
}

function getquote()
{
   $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
    .done(placeQuote)
    .fail(error);
}

$(document).ready(function(){
    console.log("in ready");
           getquote();

$('#request_quote').click(function() {
  
  getquote();
});

});
