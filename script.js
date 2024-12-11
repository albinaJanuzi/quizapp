let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer1": "Robbie Eilliams",
        "answer2": "Lady Gaga",
        "answer3": "Tim Berners-Lee",
        "answer4": "Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "Wann wurde HTML entwickelt?",
        "answer1": "1992",
        "answer2": "1995",
        "answer3": "1993",
        "answer4": "2001",
        "right_answer": 1
    }
];

let currentQuestion = 0;

function init(){
    document.getElementById('allQuestions').innerHTML = questions.length;

    showQuestion();
}


function showQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];
}


