
let menuTimeOut = null;

document.querySelector("#menu").addEventListener("mouseenter", (e)=>{

    menuTimeOut = setTimeout(()=>
    {e.target.classList.add("opened");
        },300);
    

});


document.querySelector("#menu").addEventListener("mouseleave", (e)=>{
    e.target.classList.remove("opened");

    clearTimeout(menuTimeOut);

});