// let a=document.getElementsByClassName("container")[0];
// a.onclick=()=>{
//     let b=document.getElementsByClassName("container")[0];
//     b.innerHTML="hekkooooo gyyyzzz"
// }

let x= function(e){                       // here e is event
        alert('hello world1')
};
let y=function(e){
    alert('hello world2')
};


btn.addEventListener('click',x);
btn.addEventListener('click',y);
let a= prompt("enter  fav no.");
if (a=="2"){
    btn.removeEventListener('click',x)
};