// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

//setting our variables..


//every API key is the same with Giphy, so I don't really see the need to use 

//starting list of  pre-loaded gifs
var starterGifs = ["Star Wars", "Nintendo", "The Office", "Simpsons"];               

//hopefully, our display gif Info Function re-renders the HTML to display the appropriate content
var searchWord;


var queryURLBase = "http://api.giphy.com/v1/gifs/search?q=" + searchWord + "&api_key=dc6zaTOxFJmzC&limit=10";   

var gifCounter = 0;

function runQuery(){

$.ajax({
          url: queryURLBase,
          method: "GET"
        })

       .done(function(response) {
       	console.log(queryURLBase);

       	console.log(response);
       }) 

}

 $('#searchButton').on('click', function(event) {

 	

    console.log("im looking for data rn..");

    $("#resultsArea").empty();

    searchWord = $('#searchTerm').val().trim();  


console.log(queryURLBase); 
   

    })   

 console.log(queryURLBase); 

