var getGiphy = function(offset) {
  alreadyLoading = true;
  var query = encodeURIComponent($("input").val());
  var url = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC&limit=10&offset=" + offset;
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
  }).done(function(response){
    $.each(response.data, function(key, value) {
      $(".giphy_container").append("<li><img src=" + value.images.fixed_height.url + "></li>")
    })
    alreadyLoading = false;
  }).fail(function(){
    console.log("Ajax request fails!");
  })
}

$(document).ready(function(){
  // Initial query
  $("button").on("click", function(e){
    e.preventDefault();
    getGiphy(0);
  })
})

  // Add 10 more giphys when scrolled to bottom of page
  $(window).scroll(function () {
    var offsetNow = $(".giphy_container").children().length;
    var currentScroll = $(window).height() + $(window).scrollTop();
    var triggerPoint = $(document).height() - 200;
    if ((currentScroll >= triggerPoint) && (alreadyLoading == false)) {
        getGiphy(offsetNow);
    }
  });
