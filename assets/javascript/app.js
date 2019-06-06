$("#start").on("click", function() {
    game.start();
})

$(document).on("click", "#end", function() {
    game.done();
})

var questions = [{
    question: "In relation to the Subaru Impreza, the 22B name is generally considered to mean what?",
    answers: [" EJ22 Engine Code/Bilstein suspension ", " EJ22 Engine code/Spec B ", " 2.2L Displacement/Bilstein suspension "],
    correctAnswer: " 2.2L Displacement/Bilstein suspension "
}, {
    question: "The Toyota Sera featured butterfly doors",
    answers: [" True ", " False "],
    correctAnswer: " True "
}, {
    question: " Which of the following is a car produced by Honda?",
    answers: [" Life-fun ", " Life-Dunk ", " Lifer "],
    correctAnswer: " Life-Dunk "
}, {
    question: " What JDM car held the record for world's most powerful production 1.0L engine?",
    answers: [" Diahatsu Charade GTTI ", " Suzuki Cappucino ", " Honda Beat "],
    correctAnswer: " Diahatsu Charade GTTI "
}, {
    question: " Tuna, no _____.",
    answers: [" crust", " mayo ", " celery "],
    correctAnswer: " crust "
}, {
    question: "The Mitsubishi Evo IX came with this motor.",
    answers: [" K20A ", " 4G63 ", " 4B11 T"],
    correctAnswer: " 4G63 "
}, {
    question: "The Honda S2K's engine was a...",
    answers: [" B18 ", " K20A ", " F20C "],
    correctAnswer: " F20C "
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function() {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up!");
            clearInterval(timer);
            game.done();
        }
    },
    start: function() {
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").prepend("<h2>Time remaining: <span id='counter'>120</span> Seconds</h2>");
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#subwrapper").append(`<h2>${questions[i].question}</h2>`);
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append(`<input type="radio" name="question-${i}" value="${questions[i].answers[j]}">${questions[i].answers[j]}`);
            }
        }
        $("#subwrapper").append("<br><br><button id='end'>FINISHED</button>");
    },

    done: function() {
        $.each($("input[name='question-0']:checked"), function() {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function() {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function() {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function() {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function() {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function() {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function() {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.results();
    },
    results: function() {
        clearInterval(timer);
        $("#subwrapper h2").remove();
        $("#subwrapper").html("<h2>All done!</h2>");
        $("#subwrapper").append(`<h3>Correct Answers: ${this.correct}</h3>`);
        $("#subwrapper").append(`<h3>Incorrect Answers: ${this.incorrect}</h3>`);
        $("#subwrapper").append(`<h3>Unanswered: ${questions.length - this.incorrect + this.correct}</h3>`)
    }
}