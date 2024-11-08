const question = document.getElementById("questions");
const solution1 = document.getElementById("solution-1");
const solution2 = document.getElementById("solution-2");
const solution3 = document.getElementById("solution-3");
const solution4 = document.getElementById("solution-4");
const nxtBtn = document.getElementById("btn");

const listOfquestions = [
    question1:{
        question : "1.Who wrote the novel '1984'?",
        solutiona: "George Orwell",
        solutionb: "J.K. Rowling",
        solutionc: "F. Scott Fitzgerald",
        solutiond: "Ernest Hemingway"
    },
    question2:{
        question : "2.What is the capital city of Australia?",
        solutiona: "Sydney",
        solutionb: "Melbourne",
        solutionc: "Canberra",
        solutiond: "Brisbane"
    },
        question : "3.What is the chemical symbol for Gold?",
        solutiona: "Gd",
        solutionb: "Go",
        solutionc: "Ag",
        solutiond: "Au"
    },
        question : "4.In what year was the first iPhone released?",
        solutions: "2005",
        solution: "2007",
        solution: "2008",
        solution: "2010"
    }
]
function changeQuestion(){
    question.textContent = listOfquestions[i].question;
    solution1.textContent = listOfquestions[i].solutiona;
    solution2.textContent = listOfquestions[i].solutionb;
    solution3.textContent = listOfquestions[i].solutionc;
    solution4.textContent = listOfquestions[i].solutiond;
}

for(i=1; i< listOfquestions.length; i++){
    nxtBtn.addEventListener('click', ()=>{
        changeQuestion();
    })
}