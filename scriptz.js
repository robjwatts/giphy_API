// A $( document ).ready() block.
$(document).ready(function() {
    console.log("ready!");
});

//setting our variables..


//every API key is the same with Giphy, so I don't really see the need to use 

//starting list of  pre-loaded gifs
var gifs = ["Star Wars", "Nintendo", "The Office", "Simpsons"];

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

        


    }

}
renderButtons();


//this here function handles events where a movie button is clicked

$("#add-gif").on("click", function(event) {
    event.preventDefault();

    //this line will grab the input from the textbox

    var buttonItem = $("#GIF-input").val().trim();

    console.log(gifs);




    //adding gif from the textbox to array

    gifs.push(buttonItem);

    //calling renderButtons, which handles the processing of our movie array

    renderButtons();
});


$(document).on("click", ".gif", function(event) {
    $("#resultsArea").empty()

    var gifData = $(this).data("name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifData + "&api_key=dc6zaTOxFJmzC&limit=20";


    $.ajax({
        url: queryURL,
        method: "GET"

    })

    .done(function(response) {
        console.log(response)
        var results = response.data;


        for (var i = 0; i < results.length ; i++) {
            var gifDiv = $("<div class='item'>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);

            var gifImage = $("<img>");
            gifImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(gifImage);
            $("#resultsArea").prepend(gifDiv);
        }
    });


})











///as of 7:55 on tuesday night, following issues:

//out default buttons are generating on page load, but produce no gifs or ratings when clicked. 
//furthermore when text is intered into the search bar, once the "gif it up" button is clicked, the term dissapears but no content is displayed. 
//plans to fix after break: console log, debugging, and scouring errors.