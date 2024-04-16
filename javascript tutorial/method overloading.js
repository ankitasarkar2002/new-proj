class Employee{
    constructor(name){
        console.log(`${name}-employee constructor is here`)
        this.name=name
    }
    login(){

        console.log("employee has logged in")
    }
    logout(){
        console.log("employee has logged out")

    }
    requestLeave(leave){
        console.log(`employee has requested for ${leave} leave`)

    }
}

class Programmer extends Employee{

    constructor(name){
        super(name)
        console.log( "this is newly written constructor")
    }
    //  if there is no constructor   in the child class, it is created automatically

    // constructor(..arg){ 
    //     super(...arg)
    // }

    requestCoffee(x){
        console.log(`employee has requested for ${x} coffee`) 
    }
    requestLeave(leave){
          super.requestLeave(6)
          console.log("one extra is granted")
    }

} 


let emp=new Programmer("Ankita")
emp.login()
emp.logout()
emp.requestLeave(5
)
emp.requestCoffee(100)
