
$(document).ready(function() {
	$('.btn-primary').on('click',function(){
		var  search_field = $('.search-field').val();
		$(".right-details").empty();
	   	$.ajax({ 
	            url: 'js/data.json', 
	            type: 'GET'
	        }).success(function(data) { 
	        	var data = JSON.parse(data)
		      	for(var i=0; i<data.length; i++){
		      		console.log(data[i]);
		      		if(data[i].name == search_field){
		      			$(".player-details img").attr("src", data[i].image);
		      			$("<p>" + data[i].name + "</p>").appendTo(".player_name").appendTo("#exampleModalLabel");
		      			$("<p>" + data[i].dob + "</p>").appendTo(".player_dob");
		      			$("<p>" + data[i].place + "</p>").appendTo(".player_place");
		      			console.log(data[i].Category[0]);
		      			for(var j=0;j<data[i].Category.length; j++){
		      				$("<p>" + data[i].Category[j] + "</p>").appendTo(".player_category");
		      			}
		      			for(var j=0;j<data[i].Achievements.length; j++){
		      				$("<p>" + data[i].Achievements[j] + "</p>").appendTo(".player_Achievements");
		      			}
		      			$("<p><a href='" + data[i].wikiLink + "'>Wikipedia Link</a></p>").appendTo(".player_wiki");
		      			for(var j=0;j<data[i].stories.length; j++){
		      				$("<p><a href='" + data[i].stories[j] + "'>Link</a></p>").appendTo(".player_links");
		      			}
		      			break;
		      		}
		      	}
	        }).error(function(error) {
	            console.log("error in json");
	        });
       	});

});
