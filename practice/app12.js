//Kullanıcının girdiği iki adet sayının OKEK'ini bulup mesaj olarak yazdırın.

let sayi1El = document.querySelector("#sayi1");
let sayi2El = document.querySelector("#sayi2");
let mesaj = document.querySelector("#sonuc");

const okekBul = ()=>{
    let sayi1 = sayi1El.value;
    let sayi2 = sayi2El.value;


    if(sayi1>sayi2){
        let temp = sayi1;
        sayi1 = sayi2;
        sayi2=temp;
    }


    for(let i=sayi2 ; i <= sayi1*sayi2 ;i++){
        if(i%sayi1==0 && i%sayi2==0){
            mesaj.innerHTML = ` <b> ${sayi1} ve ${sayi2} sayilarinin Okek'i ${i} `;
            break;
        }
    }


}

