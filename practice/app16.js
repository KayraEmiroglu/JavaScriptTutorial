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

////7- Dizideki notların ortalamasını bulun, ortalamadan yuksek olanların 
//ortalamasını %20, düşük olanların ortalamasını %10 artırarak yeni diziye atalım.

const notlar = [
  { ad: "Ali Can", not: 38 },
  { ad: "Veli Kan", not: 62 },
  { ad: "Oya Tan", not: 74 },
  { ad: "Elif Han", not: 28 },
  { ad: "Mine San", not: 86 },
  { ad: "Mert Er", not: 67 },
  { ad: "Bora Fer", not: 92 },
  { ad: "Ayşe Yılmaz", not: 100,},
  { ad: "İlke Cansız", not: 56,},
  { ad: "Sude Canlı", not: 94 },
  { ad: "Bade Sert", not: 72,},
  ];

let ort = notlar.reduce((x,y)=> x + y.not,0);
ort = (ort/notlar.length).toFixed(2);
console.log(ort);

const yeniNotlar = notlar.map(item=>{

  if(item.not>=ort){
    item.not = (item.not*1.2).toFixed(2);
  }else{
    item.not = (item.not*1.1).toFixed(2);
  }

  return item;
});

console.log(yeniNotlar);
