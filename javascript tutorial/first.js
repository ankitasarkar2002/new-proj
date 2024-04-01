// let y=Symbol("@34$")
// console.log(y);
// console.log(typeof y);

// let num=prompt("enter no here");
// if (num %5==0) {
//     console.log(num,"is multiple oh 5")
// }else{
//     console.log(num,"is not multi og 5")
// }
// --------------------------------------------------------
// let score=prompt("enter score here");
// if (score>=90 && score<=100){ console.log( score, 'A');
// }
//     else if (score<=89 && score>=70){
//         console.log( score, 'B');
//     }
// function sum(a,b){
//     c=a+b;
//     return c;
// } 

// let val=sum(2,2);
// console.log(val);

// let arr=[1,2,3,4];
// arr.forEach(
//     function printVal(val){
//         console.log(val);
//     });


let arr=[22,33,99,44,55];
// console.log(arr);
let a=arr.map((value,index,array)=>{
    console.log(value,index,array);
    return value+2;
})
console.log(a)


let arr2=[77,88,99,06,55];
const prr= arr2.filter((a)=>{
    return a<88;
});
console.log(prr);
console.log(prr,arr2);



let arr3=[1,2,3,5,2,1]
let arr4=arr3.reduce((h1,h2)=>{
    return h1+h2;
})
console.log(arr4);