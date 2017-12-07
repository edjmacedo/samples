
function loadData() {

  var $body = $('body');
  var $wikiElem = $('#wikipedia-links');
  var $nytHeaderElem = $('#nytimes-header');
  var $nytElem = $('#nytimes-articles');
  var $greeting = $('#greeting');

  // clear out old data before new request
  $wikiElem.text("");
  $nytElem.text("");

  // load streetview
  var streetStr = $("#street").val();
  var cityStr = $("#city").val();
  var address = streetStr + ', ' + cityStr;
  // YOUR CODE GOES HERE!
  $greeting.text("So, you want to live at " + address + '?');
  
  var streetViewURL = "http://maps.googleapis.com/maps/api/streetview?size=600x400&location=" + address + '';
  $body.append('<img class="bgimg" src="' + streetViewURL + '">');
  
  //NY Time request
  var nytimesURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + cityStr + '&sort=newest&api-key=e1e5f035dbf04500876171dad06b11b4';
  $.getJSON(nytimesURL, function(data) {
    $nytHeaderElem.text('New York Times Articles About ' + cityStr);
    
    articles = data.response.docs;
    for (var i = 0; i < articles.length; i++) {
      var article = articles[i];
      $nytElem.append('<li class="articles">' +
                        '<a href="' + article.web_url + '">' + article.headline.main + '</a>' +
                        '<p>' + article.snippet + '</p>' +
                      '</li>'
                     );
    }
  }).error(function(e) {
    $nytHeaderElem.text('New York Times Articles Could not be Loaded');
  });

  return false;
};

$('#form-container').submit(loadData);
