   // 1- Bir dizideki pozitif ve çift sayıların toplamını ve adedini bulun.
   const dizi = [-5,6,3,-5,-7,4,12,-58,72];
   let adet = 0;
   let toplam=0;
/*    for(let i = 0;i<dizi.length;i++){
       let sart = dizi[i]>0 && dizi[i]%2==0;
       if(sart){
           toplam+=dizi[i];
           adet++;
       }
   } */
   for(let item of dizi){
    let sart = item>0 && item%2==0;
      if(sart){
        toplam+=item;
        adet++;
      } 
   }

   console.log(`${adet} adet sayının toplamı = ${toplam}`);


// 2- Ülke ve başkentlerin yazılı olduğu dizilerinde eşleşen indis elemanlarını birleştirerek ayrı bir diziye atın.
const ulkeler =["Türkiye","Almanya","Fransa","Hollanda","İtalya","İspanya","Portekiz"];
const baskentler = ["Ankara","Berlin","Paris","Amsterdam","Roma","Madrid","Lizbon"]; 

const birlesikDizi = [];

for(let i in ulkeler){
    birlesikDizi[i] = ulkeler[i] + "-" + baskentler[i];
}
console.log(birlesikDizi);


//3- Dizinin herbir elemanını ilk 3 karakterini büyük harfli olarak değiştirip alfabetik hale getirip yazdırın.
let ulkeler1 =["Türkiye","Almanya","Fransa","Hollanda","İtalya","İspanya","Portekiz"];

let yeniDizi = [] ;