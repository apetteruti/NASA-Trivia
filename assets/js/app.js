var titleArray = [];
var questionsArray = []
var randomNumber
var correctAnswer
var index = []
var explanation = []
var score = 0;
$(document).on("click", "#apod-button", function () {
    titleArray = []
    explanation = []
    index = []
    questionsArray = []
    randomNumber = 0
    $("#apod-display").empty()
    var queryURL = 'https://api.nasa.gov/planetary/apod?&api_key=zkYUEw7ECaqPeKpeBYjmODSswcVqXlmZ0kNDQppU';
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        if (response.media_type == "image") {
            $("#apodImage").attr("src", response.hdurl)
            var addImage = $("<a>")
            addImage.addClass("btn-floating btn-large waves-effect waves-light red add-apod")
            var f = $("<i>")
            f.text('+')
            f.addClass("material-icons")
            addImage.html(f)
            $("#apod-display").append(addImage)
            localStorage.setItem("image url", response.hdurl)
            localStorage.setItem("title", response.title)
        } else {
            $("#apodVideo").attr("src", response.hdurl)
        }
        $("#apod-title").text(response.title)
        $("#apod-des").text(response.explanation)
        titleArray = (response.title.split(" "))
        console.log(titleArray)
        for (var i = 0; i < titleArray.length; i++) {
            switch (titleArray[i]) {
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
                case 'this':
                    titleArray[i] = ' '
                    break;
                case 'a':
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
        console.log('APOD Title' + titleArray)
        trivia(titleArray);
    })
})

$(document).on("click", "#apod-button2", function () {
    titleArray = []
    explanation = []
    index = []
    questionsArray = []
    randomNumber = 0
    $("#apod-display").empty()
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var yesterday;
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    today = yyyy + '-' + mm + '-' + dd;
    yesterday = yyyy + '-' + mm + '-' + (dd - 1);

    var queryURL = 'https://api.nasa.gov/planetary/apod?date=' + yesterday + '&api_key=zkYUEw7ECaqPeKpeBYjmODSswcVqXlmZ0kNDQppU';
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        if (response.media_type == "image") {
            $("#apodImage").attr("src", response.hdurl)
            var addImage = $("<a>")
            addImage.addClass("btn-floating btn-large waves-effect waves-light color add-apod")
            var f = $("<i>")
            f.text('+')
            f.addClass("material-icons")
            addImage.html(f)
            $("#apod-display").append(addImage)
            localStorage.setItem("image url", response.hdurl)
            localStorage.setItem("title", response.title)
        } else {
            $("#apodVideo").attr("src", response.hdurl)
        }
        $("#apod-title").text(response.title)
        $("#apod-des").text(response.explanation)
        titleArray = (response.title.split(" "))
        console.log(titleArray)
        for (var i = 0; i < titleArray.length; i++) {
            switch (titleArray[i]) {
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
                case 'this':
                    titleArray[i] = ' '
                    break;
                case 'a':
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
        console.log('APOD2 Title ' + titleArray)
        trivia(titleArray);
    })
})

function trivia() {
    questionsArray = [];
    titleArray = [];
    $("#trivia-display").empty()
    var x = $("<h5>")
    x.addClass("question")
    $("#trivia-display").append(x)
    var y = $("<input>")
    y.addClass("input-answer")
    $("#trivia-display").append(y)
    var z = $("<button>")
    z.text('Submit')
    z.addClass("submit-answer btn waves-effect waves-light, color")
    $("#trivia-display").append(z)

    var queryURL = 'https://opentdb.com/api.php?amount=50&category=17';
    titleArray.push('Galaxy', 'Earth', 'Mars', 'Moon', 'moon')
    console.log("2nd " + titleArray)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var arrayOfWords = []
        for (var i = 0; i < 50; i++) {
            arrayOfWords = response.results[i].question.split(" ")
            var filteredKeywords = arrayOfWords.filter((word) => titleArray.includes(word));
            if (filteredKeywords.length != 0) {
                console.log(arrayOfWords[i])
                console.log('BINGO ' + i)
                index.push(i)
                questionsArray.push(response.results[i].question)
            }
        }
        randomNumber = Math.floor((Math.random() * (questionsArray.length - 1)) + 0);
        console.log(randomNumber)
        $(".question").text(questionsArray[randomNumber])
        correctAnswer = response.results[index[randomNumber]].correct_answer;
        console.log('answer ' + correctAnswer)
    })
}

$(document).on("click", ".submit-answer", function () {
    console.log('Answer is ' + correctAnswer)
    var x = $(".input-answer").val()
    console.log(x)

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    //Canvas dimensions
    var W = 1500;
    var H = 1500;
    
    // var pBar = document.getElementById('p');
    // var updateProgress = function (score) {
    //     pBar.value = score;
    //     pBar.getElementsByTagName('value')[0].innerHTML = score;
    
    if (x == correctAnswer) {
        score++;
        localStorage.setItem("score", score)
        M.toast({
            html: "Your answer is correct! Score is " + score
        })
        $("#p").val(score);
        
        // updateProgress;
    } else {
        M.toast({
            html: "Try again!"
        });
    }
     console.log(score);
})

$(document).on("click", ".add-apod", function () {
    M.toast({
        html: "added to favorites"
    });
    var galleryArray = []
    var currentUrl = localStorage.getItem('image url')
    if (localStorage.getItem('gallery')) {
        galleryArray = localStorage.getItem('gallery').split(" ")
        galleryArray.push(currentUrl)
        localStorage.setItem('gallery', galleryArray)
    } else {
        galleryArray.push(currentUrl)
        localStorage.setItem('gallery', galleryArray)
    }
})

$(document).on("click", "#gallery", function () {
    $("#my-gallery").empty()
    $('html,body').animate({
        scrollTop: $("#my-gallery").offset().top},
        'slow');
    galleryArray = []
    if (localStorage.getItem('gallery')) {
        galleryArray = localStorage.getItem('gallery').split(",")
        for (var i = 0; i < galleryArray.length; i++) {
            var image = $("<img>")
            image.addClass("gallery-style")
            image.attr("src", galleryArray[i])
            $("#my-gallery").append(image)
        }
    }
})