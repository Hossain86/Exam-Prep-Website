
// const MyBtn=document.querySelector(".MyBtn button");
const RulesBox=document.querySelector(".RulesBox");
const exitbutton=document.querySelector(".Buttons .Exitbutton");
const ContinueButton=document.querySelector(".Buttons .ContinueButton");

RulesBox.classList.add("activeInfo");

exitbutton.onclick=()=>{
  window.location.href="welcome.html";
}
ContinueButton.onclick=()=>{
  window.location.href="/QuestionSheet.html"
}
