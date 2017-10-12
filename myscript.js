$(document).ready(function (){

	$("#search").on("click", function(){
		var search= $("#search-term").val();

		var queryURL= "https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=600cc6fe0445408a87dda5085c17d121&q=" + search;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {
            console.log(response);
            console.log(response.response.docs[0]);
            console.log(response.response.docs[0].web_url);
        });
     });
	$("#clear").on("click",function(){
		$("#article").remove();
	});

	});


