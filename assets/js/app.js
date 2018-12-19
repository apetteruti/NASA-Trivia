var titleArray=[];
var questionsArray = []
var randomNumber
var correctAnswer
var index =[]
var explanation =[]
var localStorageArray =[]
var score =0;
$(document).on("click", "#apod-button", function(){
    titleArray =[]
     explanation =[]
     index =[]
     questionsArray = []
     randomNumber =0
    var queryURL = 'https://api.nasa.gov/planetary/apod?&api_key=zkYUEw7ECaqPeKpeBYjmODSswcVqXlmZ0kNDQppU';
    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
        if (response.media_type == "image")
        {
            $("#apodImage").attr("src", response.hdurl)
            localStorage.setItem("image url", response.hdurl)
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
                        case 'in':
                        titleArray[i] = ' '
                        break; 
                        case 'Why':
                        titleArray[i] = ' '
                        break; 
                        case 'this':
                        titleArray[i] = ' '
                        break;
                        case 'a':
                        titleArray[i] = ' '
                        break; 
                        case 'was':
                        titleArray[i] = ' '
                        break;
                        case 'would':
                        titleArray[i] = ' '
                        break; 
                        case 'is':
                        titleArray[i] = ' '
                        break; 
                        case 'and':
                        titleArray[i] = ' '
                        break; 
                        default:
                    }
                    
                }
                console.log('APOD Title' +titleArray)
                trivia(titleArray);
    })
    


})

$(document).on("click", "#apod-button2", function(){
    titleArray =[]
     explanation =[]
     index =[]
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

    var queryURL = 'https://api.nasa.gov/planetary/apod?date=' +yesterday+ '&api_key=zkYUEw7ECaqPeKpeBYjmODSswcVqXlmZ0kNDQppU';
    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
        if (response.media_type == "image")
        {
            $("#apodImage").attr("src", response.hdurl)
            var addImage = $("<button>")
            addImage.text('Add to Gallery')
            addImage.addClass("btn waves-effect waves-light, color")
            $("#right-buttons").prepend(addImage)
            localStorage.setItem("image2 url", response.hdurl)
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
                        case 'in':
                        titleArray[i] = ' '
                        break; 
                        case 'Why':
                        titleArray[i] = ' '
                        break; 
                        case 'this':
                        titleArray[i] = ' '
                        break;
                        case 'a':
                        titleArray[i] = ' '
                        break; 
                        case 'was':
                        titleArray[i] = ' '
                        break;
                        case 'would':
                        titleArray[i] = ' '
                        break; 
                        case 'is':
                        titleArray[i] = ' '
                        break; 
                        case 'and':
                        titleArray[i] = ' '
                        break; 
                        default:
                    }   
                }
                console.log('APOD2 Title ' +titleArray)
                trivia(titleArray);
    })
})

function trivia (){ 
    questionsArray =[];
    titleArray =[];
    $("#trivia-display").empty()
   var x= $("<h5>")
   x.addClass("question")
   $("#trivia-display").append(x)
   var y=$("<input>")
   y.addClass("input-answer")
   $("#trivia-display").append(y)
   var z=$("<button>")
   z.text('Submit')
   z.addClass("submit-answer btn waves-effect waves-light, color")
   $("#trivia-display").append(z)

    // var queryURL = 'https://opentdb.com/api.php?amount=50';
     var queryURL = 'https://opentdb.com/api.php?amount=50&category=17';
        titleArray.push('Galaxy','Earth','Mars','Moon','moon')
       console.log("2nd "+ titleArray)
    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
        var arrayOfWords =[]
           for(var i=0; i<50 ; i++){
            arrayOfWords = response.results[i].question.split(" ")
             var filteredKeywords = arrayOfWords.filter((word) => titleArray.includes(word));
            if (filteredKeywords.length != 0){
                console.log(arrayOfWords[i])
                console.log('BINGO ' + i)
                index.push(i)
                 questionsArray.push(response.results[i].question)   
            }
        }
    
                randomNumber = Math.floor((Math.random() * (questionsArray.length -1)) + 0);
                console.log(randomNumber)
                $(".question").text(questionsArray[randomNumber])
               correctAnswer = response.results[index[randomNumber]].correct_answer;
               console.log('answer '+ correctAnswer)
    })
}

$(document).on("click",".submit-answer", function(){
    console.log('Answer is '+ correctAnswer)
   var x = $(".input-answer").val()
   console.log(x)
   if (x==correctAnswer){
       score ++;
       localStorage.setItem("score",score)
       $(".question").text("Your answer is correct. Score is "+ score)
       M.toast({html: "Your answer is correct! Score is " + score})
   } else {
       M.toast({html: "Try again!"});
    //    alert ("Try again")
   }
})

$(document).on("click","#gallery", function(){
  var image = $("<img>")
  image.addClass("image-style")
  var url= localStorage.getItem("image url")
  image.attr("src", url)
  $("#my-gallery").html(image)
})