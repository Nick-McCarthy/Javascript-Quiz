// quiz object -------------------------------------
const quiz = [{
    id: 0,
    question: "What is 20 + 5 ?",
    options: [{ text: "23", isCorrect: false },
        { text: "28", isCorrect: false },
        { text: "25", isCorrect: true },
        { text: "0", isCorrect: false }
    ]

},
{
    id: 1,
    question: "What is 10 + 5 ?",
    options: [{ text: "13", isCorrect: false, isSelected: false },
        { text: "18", isCorrect: false },
        { text: "0", isCorrect: false },
        { text: "15", isCorrect: true }
    ]

},
{
    id: 2,
    question: "What is 10 - 5 ?",
    options: [{ text: "0", isCorrect: false },
        { text: "8", isCorrect: false },
        { text: "5", isCorrect: true },
        { text: "3", isCorrect: false }
    ]

}
]

var start = true;

// timer ------------------------------------------------
var count = 90;
setInterval(function () {
    count--
    document.getElementById("timer").innerHTML = count
    // out of time ------------------------------------------
    if (count <= 0) {
        setInterval(window.location.reload(true), 1000);
        alert("You have run out of time!")   
    }}, 3000
 );



//get user initials-----------------------------------
var initials = prompt("what are your initials?", "NM")
localStorage.setItem("userInitials", initials);

// Iterate---------------------------------------------
function iterate(id) {
  
    // Getting the result display section---------------------
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
  
    // Getting the question---------------------
    const question = document.getElementById("question");
  
  
    // Setting the question text---------------------
    question.innerText = quiz[id].question;
  
    // Getting the options---------------------
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
  
  
    // Providing option text ---------------------
    op1.innerText = quiz[id].options[0].text;
    op2.innerText = quiz[id].options[1].text;
    op3.innerText = quiz[id].options[2].text;
    op4.innerText = quiz[id].options[3].text;
  
    // Providing the true or false value to the options
    op1.value = quiz[id].options[0].isCorrect;
    op2.value = quiz[id].options[1].isCorrect;
    op3.value = quiz[id].options[2].isCorrect;
    op4.value = quiz[id].options[3].isCorrect;
  
    var selected = "";
  
    // Show selection for op1---------------------
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })
  
    // Show selection for op2---------------------
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })
  
    // Show selection for op3---------------------
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })
  
    // Show selection for op4---------------------
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })

    // Grabbing the Submit button----------------
    const evaluate = document.getElementsByClassName("evaluate");
    
    // high score vars---------------------------------------
    var correct = 0;
    var wrong = 0;
    // Submit logic-------------------------------------
    evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        correct ++;
        result[0].innerHTML = "You have made " + correct + " correct guesses";
        result[0].style.color = "green";
        if (correct > localStorage.getItem("userRight")){
            localStorage.setItem("userRight", correct);
        }
    } else {
        wrong ++
        count -= 10
        result[0].innerHTML = "You have made " + wrong + " incorrect guesses";
        result[0].style.color = "red";
        if (wrong > localStorage.getItem("userWrong")){
            localStorage.setItem("userWrong", wrong);
        }
    }
    })
};
  
if (start) {
    iterate("0");
};

// High Score Button and Methods--------------------------
const highScoreButton = document.getElementById('highScore');

let getInitials = localStorage.getItem("userInitials");
let getWrong = localStorage.getItem("userWrong");
let getRight = localStorage.getItem("userRight");

highScoreButton.addEventListener("click", () => {
    alert("Player: " + getInitials + "-- Most Correct Answers: " + getRight + "-- Most Incorrect Answers: " + getWrong)
});
  
// Next button and method--------------------------------
const next = document.getElementsByClassName('next')[0];
var id = 0;
  
next.addEventListener("click", () => {
    start = false;
    if (id < 2) {
        id++;
        iterate(id);
        console.log(id);
    } else {
        setInterval(window.location.reload(true), 5000);
        alert("The quiz is finished!");
    }
  
});




