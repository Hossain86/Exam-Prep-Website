const allquestions=document.querySelector(".allquestions")
const submit=document.querySelector("#submit")
const result=document.querySelector(".result")
const timecount=document.querySelector(".timecount")
window.onload=()=> loadQuestion()

const loadQuestion=(index=0)=>{
  startTimer(10);
  for(index=0;index<questions.length;index++){
    const Question=document.createElement("div")
    Question.classList.add("Question")
    Question.innerHTML=`
    <p class="eachquestion">${questions[index].numb}. ${questions[index].question}</p>
      <div class="options">
        <input type="radio" name="ques${questions[index].numb}" id="${questions[index].numb}1">
        <label for="${questions[index].numb}1">${questions[index].options[0]}</label><br>
        <input type="radio" name="ques${questions[index].numb}" id="${questions[index].numb}2">
        <label for="${questions[index].numb}2">${questions[index].options[1]}</label><br>
        <input type="radio" name="ques${questions[index].numb}" id="${questions[index].numb}3">
        <label for="${questions[index].numb}3">${questions[index].options[2]}</label><br>
        <input type="radio" name="ques${questions[index].numb}" id="${questions[index].numb}4">
        <label for="${questions[index].numb}4">${questions[index].options[3]}</label><br>
      </div>
    `
    allquestions.appendChild(Question)
  }
  
}


let totalcorrect=0;
submit.addEventListener(
  "click",

  totalCorrect=()=>{
  for(index=0;index<questions.length;index++){
    let x=checkCorrect(index);
    if(x==1){
      totalcorrect++;
    }
    console.log("total=", totalcorrect)
  }
  console.log(totalcorrect)

  localStorage.setItem("totalcorrect", totalcorrect);
  localStorage.setItem("totalquestions",questions.length)
  
  // result.textContent=`Total Score= ${totalcorrect} out of ${questions.length}`
  // showresult.textContent=`Total Score= ${totalcorrect} out of ${questions.length}`
  window.location.href="ResultPage.html"
  totalcorrect=0;
}
)


console.log(allquestions)

function checkCorrect(index){
  let iscorrect=0,selected,i=0;
  const options=document.getElementsByName(`ques${questions[index].numb}`)

  for(i=0;i<options.length;i++){
    if(options[i].checked){
      selected=options[i].nextElementSibling.textContent;
      console.log(i+1);
      console.log(selected)
      if(i+1!=questions[index].answerNum){
        console.log("incorrect")
        iscorrect=0
        return 0;
      }else{
        console.log("correct")
        iscorrect=1; 
        return 1;
      }
      break;
    }
  }
}


function startTimer(time){
  let min=time-1,second=60;
  counter=setInterval(timer,1000)
  function timer(){
    timecount.textContent="Remaining Time: "+min+" min "+second+" seconds";
    second--;
    if(second<=0 && min>=0){
      min--;
      second=60;
    }
    if(min<0){
      clearInterval(counter)
      totalCorrect()
    }
  }
}