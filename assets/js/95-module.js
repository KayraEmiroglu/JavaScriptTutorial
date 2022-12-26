import showAlert,{ showConfirm} from "./modules/message.js";
//default exportlar süslü parantezin dışında yazilir
//default olmayanlar içeride yazilir
document.getElementById("btn1").addEventListener("click",()=>{
    showAlert("Hello Js");
});

document.getElementById("btn2").addEventListener("click",()=>{
    showConfirm("Are you sure");
});