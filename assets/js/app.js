var titleArray=[];
var questionsArray = []
var randomNumber
var correctAnswer
$(document).on("click", "#apod-button", function(){
    var queryURL = 'https://api.nasa.gov/planetary/apod?date=2018-11-06&api_key=zkYUEw7ECaqPeKpeBYjmODSswcVqXlmZ0kNDQppU';
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
            $("#apod-title").text(response.title)
            $("#apod-des").text(response.explanation)
                titleArray=(response.title.split(" "))
                console.log(titleArray)
                for (var i=0; i<titleArray.length;i++){
                    switch (titleArray[i]){
                        case 'the':
                        titleArray[i] = ' '
                        break;
                        case 'by':
                        titleArray[i] = ' '
                        break;
                        case 'of':
                        titleArray[i] = ' '
                        break; 
                        case 'The':
                        titleArray[i] = ' '
                        break; 
                        default:
                    }
                    
                }
                console.log('new' +titleArray)
                trivia(titleArray);
    })
    


})
function trivia (){ 
    $("#trivia-display").empty()
   var x= $("<h3>")
   x.addClass("question")
   $("#trivia-display").append(x)
   var y=$("<input>")
   y.addClass("input-answer")
   $("#trivia-display").append(y)
   var z=$("<button>")
   z.text('Go')
   z.addClass("submit-answer")
   $("#trivia-display").append(z)

    var queryURL = 'https://opentdb.com/api.php?amount=50&category=17';
     titleArray.push('Space','planet')
    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
        var arrayOfWords 
        var searchQs=[]
           for(var i=0; i<50 ; i++){
            arrayOfWords = response.results[i].question.split(" ")
             var filteredKeywords = arrayOfWords.filter((word) => titleArray.includes(word));
            if (filteredKeywords.length != 0){
                console.log(arrayOfWords[i])
                console.log('BINGO ' + i)
                 questionsArray.push(response.results[i].question)
                 randomNumber = Math.floor((Math.random() * (questionsArray.length -1)) + 0);
                console.log(questionsArray)
                console.log(randomNumber)
                $(".question").text(questionsArray[randomNumber])
            }
            if (response.results[i].question==questionsArray[randomNumber]){
               correctAnswer = response.results[i].correct_answer;
            }
           }   
        console.log(response.results)
    })
}

$(document).on("click",".submit-answer", function(){
    console.log('Answer is '+ correctAnswer)
   var x = $(".input-answer").val()
   console.log(x)
   if (x==correctAnswer){
       alert("Correct")
   } else {
       alert ("Try again")
   }


})

$(document).on("click", "#apod-button2", function(){

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    var yesterday;
    if(dd<10) {
        dd = '0'+dd
    } 
    if(mm<10) {
        mm = '0'+mm
    } 
    today = yyyy + '-' + mm + '-' + dd;
    yesterday = yyyy + '-' + mm + '-' + (dd-1);
    console.log(today);
    console.log(yesterday);

    var queryURL = 'https://api.nasa.gov/planetary/apod?date=' + yesterday+ '&api_key=zkYUEw7ECaqPeKpeBYjmODSswcVqXlmZ0kNDQppU';
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
            $("#apod-title").text(response.title)
            $("#apod-des").text(response.explanation)
                titleArray=(response.title.split(" "))
                console.log(titleArray)
                for (var i=0; i<titleArray.length;i++){
                    switch (titleArray[i]){
                        case 'the':
                        titleArray[i] = ' '
                        break;
                        case 'by':
                        titleArray[i] = ' '
                        break;
                        case 'of':
                        titleArray[i] = ' '
                        break; 
                        case 'The':
                        titleArray[i] = ' '
                        break; 
                        default:
                    }
                    
                }
                console.log('new' +titleArray)
                trivia(titleArray);
    })

})
