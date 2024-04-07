// let a=document.getElementsByTagName("div")[0];
// a.innerHTML=a.innerHTML + `<h1>hello world</h1>`;



let a=document.getElementsByTagName("div")[0]; //get   //a is a node.
let div= document.createElement("div")  //create
div.innerHTML=`hello world`
// a.appendChild(div);
a.append(div);
// a.prepend(div);
// a.after(div);
// a.before(div);
// a.replaceWith(div);

