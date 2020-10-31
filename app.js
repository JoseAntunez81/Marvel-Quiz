function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Which is not a Marvel Character?", ["Thor", "Magneto","Spiderman", "IronMan"], "Magneto"),
    new Question("Who is Thor brother?", ["Bruce", "James", "Loki", "Superman"], "Loki"),
    new Question("There are ____ IronMan Movies", ["1", "5","3", "4"], "3"),
    new Question("What is Hulk last name?", ["Green", "Banner", "Stark", "Rogers"], "Banner"),
    new Question("What is IronMan's name?", ["Jack", "Steve", "Dave", "Tony"], "Tony"),
    new Question("What is the real name of the Scarlet Witch?",["Wanda", "Alexandra", "Scarlet","Emma"],"Wanda"),
    new Question("Which film did The Aether first appear in?",["The Avengers", "Thor", "Thor:The Dark World","Avengers: Age of Ultron"],"Thor:The Dark World"),
    new Question("Which of the infinity stones is hidden on Vormir?", ["Mind Stone", "Soul Stone", "Reality Stone","SpaceStone"],"Soul Stone"),
    new Question("What is Captain America's shield made of?",["Vibranium", "Iron", "Steal","Tesseract"],"Vibranium"),
    new Question("Which country is Black Panther next in line to be king of?",["Mohannda", "Cannan", "Niganda","Wakanda"],"Wakanda"),
    new Question("What is the real name of Black Widow?",["Aesha Romanoff", "Natasha Romanoff", "Natalya Romanoff","Nadya Romanoff"],"Natasha Romanoff"),
    new Question("What is the name of the axe created for and then used by Thor in Avengers: Infinity War?",["Stormbreaker", "StormAxe", "Stormbreacher","Stormcaller"],"Stormbreaker"),
    new Question("What is Loki's title?",["God of Mischief", "God of Lies", "God of Deceive","God of Terror"],"God of Mischief"),
    new Question("Which former Doctor Who companion plays Gamora's cyborg sister Nebula?",["Karen Gillian", "Amanda Gillian", "Ana Gillian","Emma Gillian"],"Karen Gillian"),
    new Question("What Top Gun character is the cat in Captain Marvel named after?",["Ice Man", "Maverick", "Cougar","Goose"],"Goose"),
    new Question("What is the name of the organisation which is revealed to have infiltrated S.H.I.E.L.D. in Captain America: The Winter Soldier?",["Black Order", "Red Skull", "Crossbones","Hydra"],"Hydra"),
    new Question("In which film do we finally learn the backstory behind how Nick Fury lost his eye?",["Captain Marvel", "Avengers: End Game", "Avengers: Infinity War","Black Panther"],"Captain Marvel"),
    new Question("What does Rocket have Peter Quill try to obtain for him as part of his plan to break out of the Kyln?",["Prosthetic eye", "Prosthetic arm", "Prosthetic leg","Shield"],"Prosthetic leg"),
    new Question("What is Hawkeye's main weapon of choice throughout most of the MCU?",["Bow and arrow", "Sword", "Daggers","Ninja stars"],"Bow and arrow"),
    new Question("What nickname does Captain America know the Winter Solider as?",["Peggy", "Lucky","Bucky","None of the above"],"Bucky"),
    new Question("What is Deadpool's real name?",["Ray Wilson", "Wade Wilson", "Brian Wilson","James Wilson"],"Wade Wilson"),
    
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();