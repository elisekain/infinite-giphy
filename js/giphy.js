$(document).ready(function(){

  $("button").on("click", function(e){
    e.preventDefault();
    var query = $("input").val();
    query = encodeURIComponent(query);
    var url = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(response){
      console.log(response)
      $.each(response.data, function(key, value) {
        $(".giphy_container").append("<li><img src=" + value.images.fixed_height.url + "></li>")
      })
    }).fail(function(){
      console.log("Ajax request fails!");
    })
  })
})

  var alreadyLoading = false;

  $(window).scroll(function () {
    var offset = $(".giphy_container").children().length;
    if ($(window).height() + $(window).scrollTop() >= $(document).height() - 200) {
      if (alreadyLoading == false) {
        alreadyLoading = true;
        var query = $("input").val();
        query = encodeURIComponent(query);
        var url = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC&limit=10&offset=" + offset;
        $.ajax({
          url: url,
          type: "get",
          dataType: "json"
        }).done(function(response){
          console.log(response)
          $.each(response.data, function(key, value) {
            $(".giphy_container").append("<li><img src=" + value.images.fixed_height.url + "></li>")
            alreadyLoading = false;
          })
        }).fail(function(){
          console.log("Ajax request fails!");
        })
      }
    }
  });
