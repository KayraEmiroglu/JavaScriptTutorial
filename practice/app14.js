
let image = document.querySelector(".resim");


document.querySelector(".on").addEventListener("click",()=>{
    image.src="img/lamba_on.gif";
});

document.querySelector(".off").addEventListener("click",()=>{
    image.src="img/lamba_off.gif";
});

image.addEventListener("mouseover",()=>{
    image.src = "img/lamba_on.gif";
});

image.addEventListener("mouseout",()=>{
    image.src = "img/lamba_off.gif";
});