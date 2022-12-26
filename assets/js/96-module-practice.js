import { sSortAsc,sSortDesc,nSortAsc,nSortDesc } from "./modules/sorting.js";

const arr = ["Ali","Veli","Şeyma","Çiçek","Bülent"];
const numArr = [3,2,6,1,8,1,5];


document.getElementById("btn1").addEventListener("click",()=>{
    const newArr = sSortAsc(arr);
    console.log(newArr);
    console.log(arr);
});

document.getElementById("btn2").addEventListener("click",()=>{
    const newArr = sSortDesc(arr);
    console.log(newArr);
});

document.getElementById("btn3").addEventListener("click",()=>{
    const newArr = nSortAsc(numArr);
    console.log(newArr);
});

document.getElementById("btn4").addEventListener("click",()=>{
    const newArr = nSortDesc(numArr);
    console.log(newArr);
});