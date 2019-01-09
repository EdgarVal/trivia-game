$(document).ready(function(){
//--------------------Gobal variables-----------------------
    var trivia = [{
        question: "? #1-10 : How old was Ash when he started his Pokemon journey?",
        choices: [12, 10, 5, 8],
        correctAnswer: 1,
    },
    {
        question: "? #2-10 : How many evolutions does Eevee have?",
        choices: [5, 10, 8, 6],
        correctAnswer: 2,
    },
    {
        question: "? #3-10 : How do you evolve your Haunter in the Gameboy/DS games?",
        choices:["Dark Stone", "Trading", "At level 36", "When beautiful condition is high enough"],
        correctAnswer: 1,
    },
    {
        question: "? #4-10 : Which of these Pokemon did Ash actually catch?",
        choices: ["Primeape", "Squirtle", "Pikachu", "Raticate"],
        correctAnswer: 0,
    },
    {
        question: "? #5-10 : How many badges do you need to enter the Pokemon League?",
        choices: [6, 4, 10, 8],
        correctAnswer: 3,
    },
    {
        question: "? #6-10 : Which move would be super effective against Bulbasaur?",
        choices: ["Fire punch", "Tackle", "Water gun", "Thunder"],
        correctAnswer: 0,
    },
    {
        question: "? #7-10 : Finsh the theme song lyric, 'I wanna be the very best like....'",
        choices: ["my momma said I was", "the champion of the world", "a Pokemon master", "no one ever was"],
        correctAnswer: 3,
    },
    {
        question: "? #8-10 : Who trained to be a Pokemon breeder?",
        choices: ["Ash's mom", "Brock", "Tracey", "Gary"],
        correctAnswer: 1,
    },
    {
        question: "? #9-10 : Who helps Ash's mom with the chores at the house?",
        choices: ["Mr. Mime", "Jynx", "Lickitung", "Professor Oak"],
        correctAnswer: 0,
    },
    {
        question: "? #10-10 : How do you wake up Snorlax?",
        choices: ["Use double-slap on it", "Throw a rock at it", "Use Pokeflute", "Use an awakening item" ],
        correctAnswer: 2,
    },
    ];

    var currentQ;
    var time;
    var seconds;
    var rightChoice = 0;
    var wrongChoice = 0;
    var userChoice; //tracks what the user choose as their answer
    var counter = 0; //counter how many questions have passed so far

//--------------------------------------------------------

//------------------Homepage------------------------------
    $('#currentQuestion').hide();
    $("#finalScore").hide();
    $('#answer-card').hide();
    //lines above are to make the html elements hide when page first load before they called upon to appear

    $("#start").on('click', function(){
        $(this).hide();
        $('.title').show();
        $('#card').hide();
        newGame();
    });
    //function above is a to make click function to start the game & hide the current elements on the page 
//--------------------------------------------------------

//------------------Starting The Game---------------------
    function newGame(){
        $('#currentQuestion').show();
        $("#start").hide();
        $('.title').show();
        var question = $("#theQuestion");
        question.text(trivia[0].question);
        $("#list").css({"opacity": "0.9", "font-weight": "bold"});
        //line above displays the question to the id #theQuestion
        var answer1 = $('#list1');
        var answer2 = $('#list2');
        var answer3 = $('#list3');
        var answer4 = $('#list4');
        //variables above use jquery value to select the id's to be placed in the list elements

        answer1.text(trivia[0].choices[0]);
        answer2.text(trivia[0].choices[1]);
        answer3.text(trivia[0].choices[2]);
        answer4.text(trivia[0].choices[3]);
        countDown();
    }
//--------------------------------------------------------

//------------------Moving to next question---------------
    function nextQuestion(){
        $('#start').hide();
        $("#correctAns").empty();
        $("#textAnswer").empty();
        answered = true;

        $("#theQuestion").html('Question #' + (currentQ + 1) + '/' + trivia.length);
        $("#list").css({"opacity": "0.9", "font-weight": "bold"});
        var question = $("#theQuestion");
        question.text(trivia[counter].question);
        console.log(counter);

        var answer1 = $('#list1');
        var answer2 = $('#list2');
        var answer3 = $('#list3');
        var answer4 = $('#list4');

        answer1.text(trivia[counter].choices[0]);
        answer2.text(trivia[counter].choices[1]);
        answer3.text(trivia[counter].choices[2]);
        answer4.text(trivia[counter].choices[3]);
        clearInterval(time);
        countDown();
    }   

//----------------------------------------------------------

//---------------------timer--------------------------------
    function countDown() {
        seconds = 15;
        $("#timer").html("" + seconds);
        $("#timer").css({"opacity": "0.9"});
        answered = true;
        time = setInterval(countShow, 1000);
     
    };  


    function countShow() {
        seconds --;
        if(seconds < 10) {
            $('#timer').html("" + seconds);
            $('#timer').css({"color": "red"});
        } else {
            $('#timer').html("" + seconds);
        } if (seconds < 1) {
            console.log("you're at this " + counter);
            if (counter == 9) {
            clearInterval(time);
            wrongChoice++;
            answered = false;
            counter++;
            answerPage();
            } else {
                    clearInterval(time);
                    answered = false;
                    wrongChoice++;
                    counter++;
                    nextQuestion();
                    console.log("?'s wrong/not answered: " + wrongChoice);
                }
        } if (seconds > 10) {
            $("#timer").css({"color": "black"});
        }
    }

//-------------------------------------------------------------
        
//--------------------User guess-------------------------------
    $('.list-group-item').on('click', function(){
        for(var i = 0; i < trivia[0].choices.length; i++){
            trivia[0].choices[i];
            $("p.list-group-item").addClass('userChoice');
        }
        
        userChoice = $(this).text();
        console.log(userChoice);
        var rightAnswer = trivia[counter].correctAnswer;
        var answer = trivia[counter].choices[rightAnswer]; //variable rightAnswer is a number so we can use inside of the []
        counter++;  //line makes the counter switch to next question & keep track of how many have been answered 
        
        if(userChoice == answer) {
            rightChoice++;
            console.log("?'s correct: " + rightChoice);
        } else {
            wrongChoice++;
            console.log("?'s wrong/not answered: " + wrongChoice);
        } if (counter === trivia.length) {
            answerPage();
        } else {
            nextQuestion(5000);
        }
    });

//-----------------------------------------------------------

//-------------------Answer Page-----------------------------
    function answerPage(){
        $('#currentQuestion').hide();
        $("#start").hide();
        $("#timer").hide();
        $(".title").show();
        $("#finalScore").show();
        clearInterval(time);
        $("#rightAnswers").html("Correct Answers: " + rightChoice);
        $("#wrongAnswers").html("Wrong or Unanswered: " + wrongChoice);
        $("#restart").show();

        if (rightChoice > 7) {
            $("#endGame").html("You're a Pokemon master!");
        } else {
            $("#endGame").html("You could use more training");
        }
    };
//-----------------------------------------------------------

//-------------------Restart Button--------------------------
    $("#restart").on('click', function(restart){
        $(this).hide();
        $("#finalScore").hide();
        counter = 0;
        rightChoice = 0;
        wrongChoice = 0;
        newGame();
        $("#timer").show();
    });

//-----------------------------------------------------------
});