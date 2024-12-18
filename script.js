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
let rightQuestions = 0;

function init() {
    document.getElementById('allQuestions').innerHTML = questions.length;
 
    showQuestion();
}


function showQuestion() {

    if (currentQuestion >= questions.length) {//show end-screen
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display:none';

        document.getElementById('amountofQuestions').innerHTML = questions.length;
        document.getElementById('amountofRightQuestions').innerHTML = rightQuestions;
        document.getElementById('headerImg').src = './img/trophy.png';
    } else {//show question

        let percent = (currentQuestion + 1) / questions.length ;
        percent = Math.round(percent * 100);
        document.getElementById('progressBar').innerHTML = `${percent} %`;
        document.getElementById('progressBar').style = `width: ${percent}%;`;

        let question = questions[currentQuestion];

        document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer1').innerHTML = question['answer1'];
        document.getElementById('answer2').innerHTML = question['answer2'];
        document.getElementById('answer3').innerHTML = question['answer3'];
        document.getElementById('answer4').innerHTML = question['answer4'];
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('nextButton').disabled = false;
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('nextButton').disabled = true;

    resetAnswerButtons();
    showQuestion();

}


function resetAnswerButtons() {
    document.getElementById('answer1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer1').parentNode.classList.remove('bg-success');
    document.getElementById('answer2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer2').parentNode.classList.remove('bg-success');
    document.getElementById('answer3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer3').parentNode.classList.remove('bg-success');
    document.getElementById('answer4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer4').parentNode.classList.remove('bg-success');
}





