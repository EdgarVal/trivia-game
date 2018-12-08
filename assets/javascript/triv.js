$(document).ready(function(){
//--------------------Gobal variables-----------------------
    var trivia = [{
        question: "How old was Ash when he started his Pokemon journey?",
        choices: [12, 10, 5, 8],
        correctAnswer: 1,
    },
    {
        question: "How many evolutions does Eevee have?",
        choices: [5, 10, 8, 6],
        correctAnswer: 2,
    },
    {
        question: "How do you evolve your Haunter in the Gameboy/DS games?",
        choices:["Dark Stone", "Trading", "At level 36", "When Beautiful condition is high enough"],
        correctAnswer: 1,
    },
    {
        question: "Which of these Pokemon did Ash actually catch?",
        choices: ["Primeape", "Squirtle", "Pikachu", "Raticate"],
        correctAnswer: 0,
    },
    {
        question: "How many badges do you need to enter the Pokemon League?",
        choices: [6, 4, 10, 8],
        correctAnswer: 3,
    },
    {
        question: "Which move would be super effective against Bulbasaur?",
        choices: ["Fire punch", "Tackle", "Water gun", "Thunder"],
        correctAnswer: 0,
    },
    {
        question: "Finsh the theme song lyric, 'I wanna be the very best like....'",
        choices: ["my momma said I was", "the champion of the world", "a Pokemon master", "no one ever was"],
        correctAnswer: 3,
    },
    {
        question: "Who also trained to be a Pokemon breeder?",
        choices: ["Ash's mom", "Brock", "Tracey", "Gary"],
        correctAnswer: 1,
    },
    {
        question: "Who helps Ash's mom with the chores at the house?",
        choices: ["Mr. Mime", "Jynx", "Lickitung", "Professor Oak"],
        correctAnswer: 0,
    },
    {
        question: "How do you wake up Snorlax?",
        choices: ["Use double-slap on it", "Throw a rock at it", "Use Pokeflute", "Use an awakening item" ],
        correctAnswer: 2,
    },
    ];
        var currentQ;
        var answered;
        var time;
        var Answer;
        var wrongAnswer;
        var noAnswer;
        var pick;
        var texts = {
            correct: "That was super effective!",
            incorrect: "That was not very effective.",
            timeOut: "Out of time",
        }
//--------------------------------------------------------

//------------------Starting the game---------------------
        $('#currentQuestion').hide();
        $("#finalScore").hide();
        $('#answer').hide();
        //line above are to make the html element hide when page first load before they called upon to appear

        $("#start").on('click', function(){
            $(this).hide();
            $('.title').show();
            $('#card').hide();
            // $("audio#pikaSound")[0].play();
            newGame();
        });
        //function above is a to make click function to start the game & hide the current elements on the page 


        function newGame(){
            $('#currentQuestion').show();
            $("#start").hide();
            $('.title').show();
            
            for (var i = 0; i < trivia.length; i++) {
            //console.log(trivia[i]);
            //for loop above loops through the trivia array    
                var question = $("#theQuestion");
                question.text(trivia[i].question);
            //line above dislplays the question to the id #theQuestion
                var answer1 = $('#list1');
                var answer2 = $('#list2');
                var answer3 = $('#list3');
                var answer4 = $('#list4');
            //variables above use jquery value to select the id's to be placed in the list elements
            // console.log(trivia[i].choices)
                answer1.text(trivia[i].choices[0]);
                answer2.text(trivia[i].choices[1]);
                answer3.text(trivia[i].choices[2]);
                answer4.text(trivia[i].choices[3]);
        }
        //nextQuestion();
        countDown();
    }

        function nextQuestion(){
            $('#start').hide();
            $("#correctAns").empty();
            $("#textAnswer").empty();
            answered = true;

            $("#theQuestion").html('Question #'+(currentQ+1)+'/'+trivia.length);
            for (var i = 0; i < trivia.length; i++) {  
                    var question = $("#theQuestion");
                    question.text(trivia[i].question);
                    
                        var answer1 = $('#list1');
                        var answer2 = $('#list2');
                        var answer3 = $('#list3');
                        var answer4 = $('#list4');
                            answer1.text(trivia[i].choices[0]);
                            answer2.text(trivia[i].choices[1]);
                            answer3.text(trivia[i].choices[2]);
                            answer4.text(trivia[i].choices[3]);
            }
        }
        // countDown();

        $(".userChoice").on('click', function() {
            pick = $('this').data('index');
            clearInterval(time);
            answerPage();
        })


//--------------------------------------------------------------


//---------------------timer-----------------------------------
        function countDown() {
            seconds = 15;
            $('#timer').html("" + seconds);
            answered = true;
            time = setInterval(countShow, 1000);
            //console.log(seconds);
        };  

        function countShow() {
            seconds --;
            if(seconds < 10) {
                $('#timer').html("" + seconds);
                $('#timer').css({"color": "red"});
            } else {
                $('#timer').html("" + seconds);
                $('#timer').css({"color": + "red"});
            } if (seconds < 1) {
                clearInterval(time);
                answered = false;
                answerPage();
            }
            
        }
//-------------------------------------------------------------
        
//--------------------User guess-------------------------------
        $('list-group-item').on('click', function(){
            for(var i = 0; i < trivia[0].choices.length; i++){
                trivia[0].choices[i];
                $("p.list-group-item").addClass('userChoice');
            }
            console.log(this);
        });
    
//-----------------------------------------------------------

//-------------------Answer Page-----------------------------
    function answerPage(){
        // $("#currentQuestion").empty();


        
        // console.log(answerNumber);
        if ((pick == answerNumber) && (answered == true)){
            answer++;
            alert('correct');
            $('#text').html(texts.correct);
        } else if ((pick != answerNumber) && (answered == true)){
            wrongAnswer++;
            $('#text').html(texts.incorrect);
        } else {
            noAnswer++;
            $('#text').html(texts.timeOut);
        }  
    }
    // answerPage();

    
});