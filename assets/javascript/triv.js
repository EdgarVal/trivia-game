$(document).ready(function(){
    
    var questions = [{
        question: "How old was Ash when he started his Pokemon journey?",
        choices: [12, 10, 5, 8],
        correctAnswer: 10,
    },
    {
        question: "How many evolutions does Eevee have?",
        choices: [5, 10, 8, 6],
        correctAnswer: 8,
    },
    {
        question: "How do you evolve your Haunter in the Gameboy/DS games?",
        choices:["Dark Stone", "Trading", "At level 36", "When Beautiful condition is high enough"],
        correctAnswer: "Trading",
    },
    {
        question: "Which of these Pokemon did Ash actually catch?",
        choices: ["Primeape", "Squirtle", "Pikachu", "Raticate"],
        correctAnswer: "Primeape",
    },
    {
        question: "How many badges do you need to enter the Pokemon League?",
        choices: [6, 4, 10, 8],
        correctAnswer: 8,
    },
    {
        question: "Which move would be super effective against Bulbasaur?",
        choices: ["Fire punch", "Tackle", "Water gun", "Thunder"],
        correctAnswer: "Fire punch",
    },
    {
        question: "Finsh the theme song lyric, 'I wanna be the very best like....'",
        choices: ["my momma said I was", "the champion of the world", "a Pokemon master", "no one ever was"],
        correctAnswer: "no one ever was",
    },
    {
        question: "Who also trained to be a Pokemon breeder?",
        choices: ["Ash's mom", "Brock", "Tracey", "Gary"],
        correctAnswer: "Brock",
    },
    {
        question: "Who helps Ash's mom with the chores at the house?",
        choices: ["Mr. Mime", "Jynx", "Lickitung", "Professor Oak"],
        correctAnswer: "Mr. Mime",
    },
    {
        question: "How do you wake up Snorlax?",
        choices: ["Use double-slap on it", "Throw a rock at it", "Use Pokeflute", "Use an awakening item" ],
        correctAnswer: "Use Pokeflute",
    },
    ];

        //loop through the questions array and display one question at a time
         for (var question in questions){
            console.log(question);   
        }
    
        var texts = {
            correct: "That was super effective!",
            incorrect: "That was not very effective.",
            timeOut: "Out of time",
        }



        $("#start").on('click', function(){
            $(this).hide();
            $('.title').show();
            $('#card').hide();
            $('#currentQuestion').show();
        });
        //function above is a to make click function to start the game & hide the current elements on the page

        
    })