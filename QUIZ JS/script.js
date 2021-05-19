const quiz=[
    {
        question: "Q1: What is the capital of India?",
        a:"Delhi",
        b:"Noida",
        c:"Kolkata",
        d:"Mumbai",
        ans: "ans1"
    },
    {
        question: "Q2: What is the Currency of India?",
        a:"Dinar",
        b:"Dollar",
        c:"Indian Rupee",
        d:"Yen",
        ans: "ans3"
    },
    {
        question: "Q3: What is the animal of India?",
        a:"bagh",
        b:"tiger",
        c:"lion",
        d:"pigeon",
        ans: "ans1"
    },
    {
        question: "Q4: What is the Currency of India?",
        a:"Dinar",
        b:"Dollar",
        c:"Indian Rupee",
        d:"Yen",
        ans: "ans3"
    }
];

const question=document.querySelector(' .question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submitt=document.querySelector('#submitt');

const answers=document.querySelectorAll('.answer');

const ShowScore=document.querySelectorAll('#ShowScore');

let questionCount=0;
let score=0;


const loadQuestion=()=>{
    //question.innerText=console.log(quiz[0].question);
    const questionList=quiz[questionCount];

    question.innerText=questionList.question;

    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    //option3.innerText = questionList.c;
    option4.innerText=questionList.d;


}

loadQuestion();

const getCheckAnswer=()=>{
    let answer;

    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;

        }
       
    });
    return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}

submitt.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer===quiz[questionCount].ans)
    {
        score++;
    };

    questionCount++;

    

    if(questionCount<quiz.length)
    {
        loadQuestion();
    }else
    {
       ShowScore.innerHTML=`
         <h3>You scored ${score}/${quiz.length}</h3>
         <button class="btn" onclick="location.reload()"> PLAY AGAIN </button>;
        `;
        ShowScore.classList.remove('scoreArea');
       
    }

})