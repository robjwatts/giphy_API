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


$(document).on("click", ".gif", function(event, queryStr) {


    var gifData = $(this).data("name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifData + "&api_key=dc6zaTOxFJmzC&limit=20";


    $.ajax({
            url: queryURL,
            method: "GET"

        })



        .done(function(response) {
            console.log(response)
            // console.log(gifs, gifs.indexOf(queryStr))
            // gifs.splice(gifs.indexOf(queryStr), 1);
            var results = response.data;
            $("#resultsArea").empty();

           


            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div class='item'>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);

                var gifImage = $("<img class=giphyResult>").attr("src",results[i].images.fixed_height_still.url);




                gifDiv.prepend(p);
                gifDiv.prepend(gifImage);
                $("#resultsArea").prepend(gifDiv);



                // if ($("img").hasClass(".giphyResult")) {
                //     $(gifImage).on("click", function() {
                //         $(".giphyResult").toggleClass("active");
                //         console.log("looks like the class is active, now..")
                //     })

                // } else {

                    

                // }

   
             $(".giphyResult").on("click", function() {

                console.log("you have clicked an image");
                $(this).toggleClass('active');
                if($(this).hasClass('active')){
                    $(this).attr("src",results[i].images.fixed_height.url);
                } else {
                    $(this).attr("src",results[i].images.fixed_height_still.url);
                }

})





            }

            

           

       


                     
                })




                
                
                
            })

       


               


                    




                    







///as of 11:45 on Saturdaygit push o, following issues:

//having issues getting to gifs to pause/play. tried this plugin but it doesn't seem to play nice with the giphy API

//(http://rubentd.com/gifplayer/)