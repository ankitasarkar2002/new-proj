// function validateForm() {
//    let fname = document.myForm.fname.value;
//    let lname = document.myForm.lname.value;
//    let email = document.myForm.email.value;
//    let contact= document.myForm.contact.value;



    
//     if (fname == "") {
//       alert("Name must be filled out");
//       return false;
//     }
    
     
//     else if (lname == "") {
//         alert("LastName must be filled out");
//         return false;
//       }
       
//      else if (email == "") {
//         alert("Email must be filled out");
//         return false;
//       }
       
//     else if (contact == "") {
//         alert("Contact must be filled out");
//         return false;
//       }
//   }

function seterror(id,error){
    let element=document.getElementById(id);
    console.log(element);

    element.getElementsByClassName("formerror")[0].innerHTML=error;


};


function validateForm() {
    // event.preventDefault();
    var returnval=true;
 var firstName = document.myForm.fname.value;
 if(firstName.length<5){
    // alert("error")
    seterror( "name1", "*length is short")
    returnval=false;

 }
 if(firstName.length== 0){
    // alert("error")
    seterror( "name1", "*length must be filled")
    returnval=false;}


 var  lastName = document.myForm.lname.value;
 if(lastName.length<5){
    // alert("error")
    seterror( "name2", "*length is short")
    returnval=false;

 }
 if(lastName.length== 0){
    // alert("error")
    seterror( "name2", "*length must be filled ")
    returnval=false;

 }

 var yourEmail = document.myForm.email.value;
 if(yourEmail.length<5){
    // alert("error")
    seterror( "mailId", "not valid")
    returnval=false;

 }
 var phoneNumber = document.myForm.contact.value;
 if(phoneNumber.length<10 || phoneNumber.length>10 ){
    // alert("error")
    seterror( "contactInfo", "please enter correct number")
    returnval=false;

 }


  return returnval
}