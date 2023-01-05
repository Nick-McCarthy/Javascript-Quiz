var questions = [
	{
		question: "What is 10 - 5?",
		answers: {
			a: '3',
			b: '5',
			c: '8'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 10 + 5?",
		answers: {
			a: '18',
			b: '13',
			c: '15'
		},
		correctAnswer: 'c'
	}
];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
        var output = [];
        var answers
        // for each question
        for(var i=0; i<questions.length; i++){
            // first reset the list of answers
            answers = [];
            // for each available answer to this question
            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
	}

	function showResults(questions, quizContainer, resultsContainer){
		//answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        var userAnswer = '';
        var numCorrect = 0;
        
        for(var i=0; i<questions.length; i++){
            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                answerContainers[i].style.color = 'red';
            }
	}

	// show number of correct answers
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(questions, quizContainer, resultsContainer, submitButton);