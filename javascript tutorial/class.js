// //CLASS
// class RailwayReservation{
//     submit(){
//         alert(this.name+"form is submitted for train number"+ this.trainno);
//     }
//     cancel(){
//         alert(this.name+"form is canceled for train no. "+this.trainno);
//     }
//     fill(givenname,trainno){
//         this.name=givenname
//         this.trainno=trainno

//     }

// }

// //create a form for harry
// let harryForm= new RailwayReservation()
// //fill the form with  harry's details
// harryForm.fill("harry",222420)
// harryForm.submit()
// harryForm.cancel()



//CONSTRUCTOR
class RailwayReservation{
    constructor(givenname,trainno){
        console.log("CONSTRUCTOR CALLED..." + givenname + trainno)
        this.name=givenname
        this.trainno=trainno

    }
    
    submit(){
        alert(this.name+"form is submitted for train number"+ this.trainno);
    }
    cancel(){
        alert(this.name+"form is canceled for train no. "+this.trainno);
    }
}

//create and fill a form for harry
let harryForm= new RailwayReservation("harry", 17236)
//no need to fill the form with  harry's details
//harryForm.fill("harry",222420)
harryForm.submit()
harryForm.cancel()
