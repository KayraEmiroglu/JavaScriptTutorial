
const sanalSecimEl= document.getElementById("bilgisayar");
const kullaniciSecimEl= document.getElementById("kullanici");
const sonucEl= document.getElementById("sonuc");
const butonlar= document.querySelectorAll("button");


let kullaniciSecimi;
let sanalSecim;
let sonuc;

butonlar.forEach((buton) => {
    buton.addEventListener("click",(e)=>{
        kullaniciSecimi = e.target.id;
        kullaniciSecimEl.innerHTML = kullaniciSecimi; 
        generateSanalSecim();
        getSonuc();
    })
});

function generateSanalSecim(){
    const randomNumber = Math.floor(Math.random()*3) + 1;


    if(randomNumber==1){
        sanalSecim="tas";
    }
    if(randomNumber==2){
        sanalSecim="makas";
    }
    if(randomNumber==3){
        sanalSecim="kagit";
    }

    sanalSecimEl.innerHTML=sanalSecim;

};

function getSonuc(){

    if(sanalSecim == kullaniciSecimi){
        sonuc = "Berabere";
    }else if(sanalSecim=="tas" && kullaniciSecimi=="kagit"){
        sonuc = "Sen Kazandin";
    }else if(sanalSecim=="tas" && kullaniciSecimi=="makas"){
        sonuc = "Kaybettin";
    }else if(sanalSecim=="kagit" && kullaniciSecimi=="makas"){
        sonuc = "Sen Kazandin";
    }else if(sanalSecim=="kagit" && kullaniciSecimi=="tas"){
        sonuc = "Kaybettin";
    }else if(sanalSecim=="makas" && kullaniciSecimi=="tas"){
        sonuc = "Kazandin";
    }else if(sanalSecim=="makas" && kullaniciSecimi=="kagit"){
        sonuc = "Kaybettin";
    }
    sonucEl.innerHTML = sonuc;

};
