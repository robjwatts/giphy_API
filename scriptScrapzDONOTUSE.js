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
                var p = $("<p class=ratingText>").text("Rating: " + rating);


               $(document).on("click", function(){    


                var gifImage = $("<img class=giphyResult>").attr("src", results[i].images.fixed_height_still.url);
                 gifDiv.prepend(p);
                gifDiv.prepend(gifImage);
                $("#resultsArea").prepend(gifDiv);

                // var gifPlay = $("<img class=giphyResultPlay>").attr("src", results[i].images.fixed_height.url);
                //    gifDiv.prepend(p);
                // gifDiv.prepend(gifImage);
                // $("#resultsArea").prepend(gifDiv);


                }) 


                // $("img").click(function() {

                //     console.log("you are clicking on the image..");




                //     if ($(this).hasClass("giphyResult")) {
                //         // $(this).replaceWith(gifPlay);
                        
                //         console.log("you have removed the giphyResult image");
                //         // $("#resultsArea").empty();
                        
                //         $(this).toggleClass("giphyResultPlay");

                //         $("img").replaceWith(gifPlay);
                //         gifDiv.prepend(gifPlay);
                //         // console.log("the image's class is now giphyResultPlay");
                        

                //         // console.log("you have change the class from giphyResult to giphyResultPlay");

                //         ///
                //         // gifDiv.prepend(p);
                //         // gifDiv.prepend(gifPlay);
                //         // $("#resultsArea").prepend(gifDiv);

                //         // ///


                //     } 




                // })





           

            }

        })

})




//              $("img").on("click", function() {

//                 console.log("you have clicked an image");
//                 var self = $(this);

//                 if($(this).attr('src') === results[i].images.original.url){
//                     $(self).attr('src', results[i].images.original_still.url);
//                 } else {
//                     $(self).attr('src', results[i].images.original.url);
//                 }




// });




// if ($("img").hasClass(".giphyResult")) {
//     $(gifImage).on("click", function() {
//         $(".giphyResult").toggleClass("active");
//         console.log("looks like the class is active, now..")
//     })

// } else {



// }




///as of 11:45 on Saturdaygit push o, following issues:

//having issues getting to gifs to pause/play. tried this plugin but it doesn't seem to play nice with the giphy API

//(http://rubentd.com/gifplayer/)