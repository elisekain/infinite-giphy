$(document).ready(function(){
  $("button").on("click", function(e){
    e.preventDefault();
    var query = $("input").val();
    query = encodeURIComponent(query);
    var url = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC";
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(response){
      console.log(response);
      console.log(query);
    }).fail(function(){
      console.log("Ajax request fails!");
    })
  })
})
