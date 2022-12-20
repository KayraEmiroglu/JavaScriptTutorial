//Kullanıcıya ürün ve fiyat bilgisi girdirelim,
//1500 TL ile bu üründen kaç adet
//alabileceğini ekrana yazdıralım.(Do While kullanarak yapalım)

let urunLi = document.querySelector("#urun");
let fiyatLi = document.querySelector("#fiyat");
let mesaj = document.querySelector("#sonuc");

document.querySelector("#hesapla").addEventListener("click",()=>{

    let urun=urunLi.value;
    let fiyat=fiyatLi.value;

    let sayac = 0;
    let toplam = 0;

    do{
        if(fiyat>1500){
            break;
        }
        toplam = sayac * fiyat ;
        if(toplam>1500){
            toplam-=fiyat;
            sayac--;
            break;
        }
        sayac++;

    }while(toplam<=1500);

    mesaj.innerText = `${urun} adli üründen ${toplam}TL ödiyerek ${sayac} tane alabilirsiniz.`

});
