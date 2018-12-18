$(document).on("click", "#apod-button", function(){
    var titleArray=[];
    var queryURL = 'https://api.nasa.gov/planetary/apod?api_key=zkYUEw7ECaqPeKpeBYjmODSswcVqXlmZ0kNDQppU';
    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
        if (response.media_type == "image")
        {
            $("#apodImage").attr("src", response.hdurl)
        } else {
            $("#apodVideo").attr("src", response.hdurl)
        }
            $("#apod-display").append($("<p>"+response.title + "</p>"))
            $("#apod-display").append ($("<p>"+ response.explanation+ "<p>"))
                titleArray=(response.title.split(" "))
                console.log(titleArray)
                for (var i=0; i<titleArray.length;i++){
                    if (titleArray[i]== ('The'||'a'||'the' ||'by'||'in')){
                        titleArray[i]=' ';
                    }
                }
                trivia(titleArray);
    })
    
//   var words = ['Solar', 'Space', 'planet']

     function trivia (){ 
    var queryURL = 'https://opentdb.com/api.php?amount=50&category=17';
    //  titleArray.push('Solar','Space','planet')
    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var arrayOfWords 
        var questionsArray = []
           for(var i=0; i<50 ; i++){
            arrayOfWords = response.results[i].question.split(" ")
             console.log(arrayOfWords)
             var filteredKeywords = arrayOfWords.filter((word) => titleArray.includes(word));
            console.log(filteredKeywords);
            if (filteredKeywords.length != 0){
                console.log('BINGO ' + i)
                 questionsArray.push(response.results[i].question)
                 var randomNumber = Math.floor((Math.random() * (questionsArray.length -1)) + 0);
                console.log(questionsArray)
                console.log(randomNumber)
                $("#question").text(questionsArray[randomNumber])

            }
           }
        console.log(response.results)
    })
}
})


// $(document).on("click", "#keyword", function(){
//     event.preventDefault();
   
//     var keyword = $("#input").val().trim()
//     var queryURL =  'https://images-api.nasa.gov/search?q=' +keyword+ '%2011...';
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response){
//         console.log(response)

//         // going through every element in the response and checking media type (images/videos)
//         // if type is image, element is pushed into an array, mediaType. Then calling renderImages
//         var mediaType =[];
//         for (var i=0; i<100; i++){
//         if (response.collection.items[i].data[0].media_type == "image")
//         {
//             mediaType.push(i);
//             if (mediaType.length == 3){
//                 renderImages()
//             }
//         } 
//     }
   
//     //rendering images, titles and description from nasa gallery API
//     function renderImages (){

//     //clearing previous search results before rendering new reslut
//         $("#title-div1").empty();
//         $("#title-div2").empty();
//         $("#title-div3").empty();
//         $("#image-div1").empty();
//         $("#image-div2").empty();
//         $("#image-div3").empty();
   
//         var image1 = $("<img>");
//         image1.addClass("image-style")
//         image1.attr("src", response.collection.items[mediaType[0]].links[0].href)
//         $("#image-div1").prepend(image1)
//         $("#title-div1").prepend('<p>'+ response.collection.items[mediaType[0]].data[0].title)

//         var image2 = $("<img>");
//         image2.addClass("image-style")
//         image2.attr("src", response.collection.items[mediaType[1]].links[0].href)
//         $("#image-div2").prepend(image2)
//         $("#title-div2").prepend('<p>'+ response.collection.items[mediaType[1]].data[0].title)

//         var image3 = $("<img>");
//         image3.addClass("image-style")
//         image3.attr("src", response.collection.items[mediaType[2]].links[0].href)
//         $("#image-div3").prepend(image3)
//         $("#title-div3").prepend('<p>'+ response.collection.items[mediaType[2]].data[0].title)
//         }

//     })
// })