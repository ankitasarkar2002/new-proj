const accordians=document.querySelectorAll(".accordian");
accordians.forEach((accordian)=>{
// console.log(accordian)
const icon=accordian.querySelector(".icon")
// console.log(icon);
 const answer=accordian.querySelector(".answer")
 accordian.addEventListener("click",()=>{

icon.classList.toggle("active");
answer.classList.toggle("active")
 })
})
