// let promise= new Promise((resolve,reject)=>{
//     console.log("i ama a promise");
//     resolve(123);
// });
function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            console.log("data: ", dataId);
            resolve("success ") 
            if(getNextData){
                getNextData();
            }
            
        },3000);
        
    });
    
}



// getData(1,()=>{
//     getData(2,  ()=>{
//         getData(3);
//     });
// });




