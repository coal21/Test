class Question {
    constructor(prompt, option1, option2, option3, option4, answer) {
        this.prompt = prompt
        this.option1 = option1
        this.option2 = option2
        this.option3 = option3
        this.option4 = option4
        this.answer = answer
    }
}
/////Object array + storing questions
let arr = [];
arr.push(new Question("What is Walter White's alias?", "The Chicken Man", "Werner Ziegler", "Heisenberg", "Gale Boetticher", "Heisenberg"));
arr.push(new Question("Who created Microsoft Word?", "Steve Jobs", "Bill Gates", "Randy Jackson", "Mark Zuckerberg", "Bill Gates"));
arr.push(new Question("What year did Michael Jackson die?", "2009", "2012", "2008", "2015", "2009"));
arr.push(new Question("True or False: Kissimmee is the capital of Florida.", "True", "False", "Both", "Neither", "False"));
arr.push(new Question("When did Spider-Man Homecoming release?", "2020", "2016", "2012", "2017", "2017"));
arr.push(new Question("What is Saul Goodman's birth name?", "James McGill", "Howard Hamlin", "Huell Babineaux", "Drew Sharp", "James McGill"));
arr.push(new Question("Who was the president is 1921?", "Warren G. Harding", "Abraham Lincoln", "Millard Fillmore", "Ulysses S. Grant", "Warren G. Harding"));
arr.push(new Question("21 * 5?", "205", "105", "180", "-115", "105"));
arr.push(new Question("Did OJ do it?", "Yes", "Yes", "Yes", "Yes", "Yes"));
arr.push(new Question("How many Earths can fit inside the sun?", "900,000", "1.5 million", "40,000", "1.3 million", "1.3 million"));
////////Question Updater
let count = 0
function nextQuestion() {
    for (i=1; i<=4; i++) {
        document.getElementById(`radio${i}`).checked = false
    }
    document.getElementById("prompt").innerHTML = arr[count].prompt;
    ((document.getElementById("radio1")).nextElementSibling).innerHTML = arr[count].option1;
    ((document.getElementById("radio2")).nextElementSibling).innerHTML = arr[count].option2;
    ((document.getElementById("radio3")).nextElementSibling).innerHTML = arr[count].option3;
    ((document.getElementById("radio4")).nextElementSibling).innerHTML = arr[count].option4;
    count = count+1;
}
/////Submit onclick function
let score = 0
let userChoice
function submit(){
    userChoice = undefined
    for (i=1; i<=4; i++){
        if (document.getElementById(`radio${i}`).checked === true){
            userChoice = document.getElementById(`radio${i}`).nextElementSibling.innerHTML;
        } 
    } if (userChoice == undefined) {
        return 
    }

    if (userChoice == arr[count-1].answer){
        score = score + 1;
    } 
    if(count == 10){
        ((document.getElementById("radio1")).nextElementSibling).classList.add("hide");
        ((document.getElementById("radio2")).nextElementSibling).classList.add("hide");
        ((document.getElementById("radio3")).nextElementSibling).classList.add("hide");
        ((document.getElementById("radio4")).nextElementSibling).classList.add("hide");
        
        (document.getElementById("radio1")).classList.add("hide");
        (document.getElementById("radio2")).classList.add("hide");
        (document.getElementById("radio3")).classList.add("hide");
        (document.getElementById("radio4")).classList.add("hide");

        document.getElementById("prompt").innerHTML = "Score was: " +score
        document.getElementById("submit").onclick = function() {refresh()} 
        document.getElementById("submit").innerHTML = "Refresh?"
    } else {
        nextQuestion();
    }
}
function refresh(){
    count = 0;
    score = 0;
    (document.getElementById("radio1")).classList.remove("hide");
    (document.getElementById("radio2")).classList.remove("hide");
    (document.getElementById("radio3")).classList.remove("hide");
    (document.getElementById("radio4")).classList.remove("hide");

    ((document.getElementById("radio1")).nextElementSibling).classList.remove("hide");
    ((document.getElementById("radio2")).nextElementSibling).classList.remove("hide");
    ((document.getElementById("radio3")).nextElementSibling).classList.remove("hide");
    ((document.getElementById("radio4")).nextElementSibling).classList.remove("hide");

    document.getElementById("submit").onclick = function() {submit()}
    document.getElementById("submit").innerHTML = "Submit"

    nextQuestion()
}

nextQuestion();