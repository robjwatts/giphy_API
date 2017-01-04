// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

//setting our variables..


//every API key is the same with Giphy, so I don't really see the need to use 

//starting list of  pre-loaded gifs
var gifs = ["Star Wars", "Nintendo", "The Office", "Simpsons"];               




  

var gifCounter = 0;

function displayGIFs(){

var searchQuery = $(this).attr("data-name");

var queryURLBase = "http://api.giphy.com/v1/gifs/search?q=" + searchQuery + "&api_key=dc6zaTOxFJmzC&limit=10";


$.ajax({
          url: queryURLBase,
          method: "GET"
        })

       .done(function(response) {

        var gifDiv = $("<div class'gif'>");


      

        // Storing the rating data
          var rating = response.data.rating;

          // Creating an element to have the rating displayed
         var pOne = $("<p>").text("Rating: " + rating);

        // Displaying the rating
       gifDiv.append(pOne);


       //retrieving the url for the image
       var imgUrl = response.data.image_original_url;

       //creating an element to hold the image
       var image = $("<img>").attr("src", imgURL);

       //appending the image
       gifDiv.append(image);


        console.log(queryURLBase);

        console.log(response);

        console.log(response.data.rating);  
       }) 

}
//function for displaying gif data (image and ratings)
function renderButtons() {

 $("#buttons-view").empty();
//looping through the array of gifs

for (var i = 0; i < gifs.length; i++) {

  //now, we dynamically generate buttons for each movie in the array
  //the code $("<button>") is all jQuery needs to create the beginning and end tag

var a = $("<button>");

// Adding a class of gif to our button
a.addClass("gif");
 // Adding a data-attribute
a.attr("data-name", gifs[i]);

// Providing the initial button text
a.text(gifs[i]);


//adding the button to the buttons-view div

$("#buttons-view").append(a);

//providing the initial button text

a.text(gifs[i]);

// Adding the button to the buttons-view div
$("#buttons-view").append(a);


}

}  

//this here function handles events where a movie button is clicked

$("#add-GIF").on("click", function(event) {
  event.preventDefault();

  //this line will grab the input from the textbox

  var movie = $("#GIF-input").val().trim();


    //adding gif from the textbox to array

  gifs.push(movie);

  //calling renderButtons, which handles the processing of our movie array

  renderButtons();
});


//adding a click event listener to all elements with a class of "gif"

$(document).on("click", ".movie", displayGIFs);

//calling the renderButtons function to display the initial buttons

renderButtons();
