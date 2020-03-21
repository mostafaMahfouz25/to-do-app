
function populates(){
    if(quiz.isEnded())
    {
        showScore();
    }
    else
    {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        var choices = quiz.getQuestionIndex().choices;

        choices.forEach((item,index)=>{
            document.getElementById("choice"+index).innerText = choices[index];
            guess("btn"+index,choices[index]);
        })

        showProgress();
    }
}


function guess(id,guess)
{
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populates();
    }
}

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    document.getElementById("from").innerText = currentQuestionNumber;
    document.getElementById("to").innerText = quiz.questions.length;
}

function showScore()
{
    var gameOverHtml = `<h1 class="text-center text-info"> Result </h1> <h2 id="score" class="text-danger text-center"> Your Score Is : ${quiz.score}</h2>`;
    document.getElementById("quiz").innerHTML = gameOverHtml;

}




// create questions
var questions = [
    new Question("Which one is not an object oriented programming language?", ["Java", "C#","C++", "C"], "C"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are ____ main components of object oriented programming.", ["1", "6","2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework")
];

var quiz = new Quiz(questions);
populates();