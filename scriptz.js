
var gifs = ["Star Wars", "Nintendo", "The Office", "Simpsons"];


$(document).ready(function() {
     $("#buttons-view").empty();

     renderButtons();

     $('#add-gif').click(function(event) {
        console.log("you done clicked the add-gif button..");
        event.preventDefault();
        var addBtnVal = $("#GIF-input").val().trim();
        gifs.push(addBtnVal);
        $("#GIF-input").val(" ");
        $("#buttons-view").empty();
        renderButtons();
        renderGifs(addBtnVal);
     });


});



function renderButtons() {

    for (var index = 0; index < gifs.length; index++) {
        var newButton = $("<button>");
        newButton.addClass("btn");
        newButton.addClass("gif_btn");
        newButton.attr("data-name", gifs[index]);
        newButton.text(gifs[index]);
        $("#buttons-view").append(newButton);

    }   

    $(".gif_btn").click(function() {
        var data = $(this).attr('data-name');
        console.log("Clicked button with data..." + data)
        data = data.replace(" ", '+');
        renderGifs(data);

    });

}

function renderGifs(searchData) {
    // var api_key = "dc6zaTOxFJmzC";
    // var limit = 9;
    console.log(searchData);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchData + "&api_key=dc6zaTOxFJmzC&limit=20";




    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        console.log(response);
        var results = response.data;

        $("#resultsArea").empty();

        for (var i = 0; i<results.length; i++) {

        var gifDiv = $("<div class='gif-div'>");
        var rating = results[i].rating;
        var stillGif = results[i].images.fixed_height_still.url;
        var animatedGif = results[i].images.fixed_height.url;

        var p = $("<p class='gif-rating'>").text(rating);

        var charImage = $("<img class='gif-img'>");
        charImage.attr('data-gifnum', i);
        charImage.attr("data-still-" + i, stillGif);
        charImage.attr("data-anime-" + i, animatedGif);
        charImage.attr("data-toggle-" + i, 'OFF');
        charImage.attr("src", stillGif);

        gifDiv.append(p);
        gifDiv.append(charImage);

        $("#resultsArea").prepend(gifDiv);

    }

        $(".gif-div img").click(function() {
            var gif_num = $(this).data('gifnum');
            var gif_anim = $(this).data('anime-' + gif_num);
            var gif_still = $(this).data('still-' + gif_num);
            var gif_toggle = $(this).data('toggle-' + gif_num);

            if(gif_toggle === "OFF") {
                $(this).attr('src', gif_anim);
                $(this).data('toggle-' + gif_num, 'ON');
            } else if (gif_toggle === "ON") {
                $(this).attr('src', gif_still);
                $(this).data('toggle-' + gif_num, 'OFF');
            }









                    });



    });
}











//     $("#buttons-view").empty();
//     //looping through the array of gifs

//     for (var i = 0; i < gifs.length; i++) {

//         //now, we dynamically generate buttons for each movie in the array
//         //the code $("<button>") is all jQuery needs to create the beginning and end tag

//         var a = $("<button>");

//         // Adding a class of gif to our button
//         a.addClass("gif");
//         // Adding a data-attribute
//         a.attr("data-name", gifs[i]);

//         // Providing the initial button text
//         a.text(gifs[i]);


//         //adding the button to the buttons-view div

//         $("#buttons-view").append(a);




//     }


// renderButtons();


// //this here function handles events where a movie button is clicked

// $("#add-gif").on("click", function(event) {
//     event.preventDefault();

//     //this line will grab the input from the textbox

//     var buttonItem = $("#GIF-input").val().trim();

//     console.log(gifs);




//     //adding gif from the textbox to array

//     gifs.push(buttonItem);

//     //calling renderButtons, which handles the processing of our movie array

//     renderButtons();
// });


// $(document).on("click", ".gif", function(event, queryStr) {


//     var gifData = $(this).data("name");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifData + "&api_key=dc6zaTOxFJmzC&limit=20";


//     $.ajax({
//             url: queryURL,
//             method: "GET"

//         })



//         .done(function(response) {
//             console.log(response)
//             // console.log(gifs, gifs.indexOf(queryStr))
//             // gifs.splice(gifs.indexOf(queryStr), 1);
//             var results = response.data;
//             $("#resultsArea").empty();








//             for (var i = 0; i < results.length; i++) {
//                 var gifDiv = $("<div class='item'>");
//                 var rating = results[i].rating;
//                 var p = $("<p class=ratingText>").text("Rating: " + rating);


//                $(document).on("click", function(){    


//                 var gifImage = $("<img class=giphyResult>").attr("src", results[i].images.fixed_height_still.url);
//                  gifDiv.prepend(p);
//                 gifDiv.prepend(gifImage);
//                 $("#resultsArea").prepend(gifDiv);

//                 var gifPlay = $("<img class=giphyResultPlay>").attr("src", results[i].images.fixed_height.url);
//                    gifDiv.prepend(p);
//                 gifDiv.prepend(gifImage);
//                 $("#resultsArea").prepend(gifDiv);


//                 }) 


//                 // $("img").click(function() {

//                 //     console.log("you are clicking on the image..");




//                 //     if ($(this).hasClass("giphyResult")) {
//                 //         // $(this).replaceWith(gifPlay);
                        
//                 //         console.log("you have removed the giphyResult image");
//                 //         // $("#resultsArea").empty();
                        
//                 //         $(this).toggleClass("giphyResultPlay");

//                 //         $("img").replaceWith(gifPlay);
//                 //         gifDiv.prepend(gifPlay);
//                 //         // console.log("the image's class is now giphyResultPlay");
                        

//                 //         // console.log("you have change the class from giphyResult to giphyResultPlay");

//                 //         ///
//                 //         // gifDiv.prepend(p);
//                 //         // gifDiv.prepend(gifPlay);
//                 //         // $("#resultsArea").prepend(gifDiv);

//                 //         // ///


//                 //     } 




//                 // })





           

//             }

//         })

// })




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