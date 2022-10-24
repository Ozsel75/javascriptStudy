let items = [10 ,20, 30, 40];

items.push(50); // sona öğe eklemek
items.unshift(9); // başa öğe eklemek
items.pop(); // sondaki öğeyi silmek -silineni  döndürür atanırsa
items.shift(); // baştaki öğeyi silmek -silineni  döndürür atanırsa

/*
splice() metot
splice() metot diziye hem eleman eklemek için hem de eleman silmek için kullanılabileceğini yukarda belirtmiştik. Metodun ilk parametresi işlemin yapılacağı index numarasını, ikinci parametre ise kaç elemanın silineceğini belirtir.   -silineni  döndürür atanırsa 

.includes()
Includes metodu bir elemanın dizi içerisinde bulunup bulunmadığını kontrol eder. Boolean (true/false) olarak çıktı alınır.

.slice()
Slice (dilimleme) metodu bir dizinin bir kısmının kopyasıyla yeni bir dizi oluşturmamıza olanak sağlıyor.
Parantez içerisine ise kopyalamak istediğimiz elemanların aralığını başlangıç ve bitiş indeksleri olacak şekilde iki parametre olarak giriyoruz. Bitiş indeksindeki değerin aralığa dahil olmadığını unutmayalım.
Bu metot uygulandığı dizinin orijinal halini değiştirmiyor bu yüzden yeni oluşacak diziyi farklı bir değişkende saklıyoruz.

/* ES6 KOPYALAMA 

let es6items = [...items]    ... ile
let es6merge = [...items, ...items]   birden fazla array i birleştirmek

join()
Bazen Dizi içerisinde topladığınız verileri, string (sözdizimi) olarak yazdırmak isteyebilirsiniz. Join metodu bu konuda yardıma yetişiyor.
Parantez içerisine dizi elemanları arasına koymak istediğimiz string'i parametre olarak girebiliriz. Eğer bir parametre vermezsek virgül bastırır.

concat()
Bu metot farklı dizileri birleştirip tek bir diziye çevirmemizi sağlıyor.
Örneğin:

const yiyecekler = ["pasta", "baklava", "puding"];
const icecekler = ["su", "kahve"];

const menu = yiyecekler.concat(icecekler);

forEach()
 dizi.forEach(function(diziElemanınınKendisi, diziElemanınınIndeksi, dizininKendisi) {
// Bir şeyler yap.
}); 
İhtiyacımıza göre bu parametrelerden hepsini veya aralarından birkaçını kullanabiliriz.
Örneğin:

// Malzemeler dizisindeki her bir malzemeyi ve onun indeksini konsola yazdıran bir kod yazalım:

const malzemeler = ["yumurta", "un", "süt"];

malzemeler.forEach(function(malzeme, malzemeIndeksi) {
    console.log(malzeme, malzemeIndeksi);
});


map()
Map metodu da forEach gibi kendisine verilen fonksiyonu dizinin her elemanı için uygular fakat forEach'ten farklı olarak sonucu yeni bir dizide tutar. Orijinal dizi olduğu gibi kalır.

every()
every metodu belirtilen bir koşulun dizideki tüm elemanlara uyup uymadığını kontrol ederiz.
some metodunda olduğu gibi, Boolean yani true veya false olarak döner.
True dönebilmesi için dizideki tüm elemanların fonksiyondaki koşula uyması gerekir.

filter()
filter metodu bir dizi içerisindeki belirli bir koşulu sağlayan elemanlar ile yeni bir dizi oluşturmamıza dolayısıyla dizi elemanlarını filtrelememize yarıyor.
Yeni oluşacak diziyi bir değişkende saklıyoruz.
Orijinal dizi bozulmuyor.
Örneğin:

const sayilar = [1,2,3,4,5];

const filtrelenmisSayilar = sayilar.filter(function(sayi) {
    return sayi >3;
});

console.log(filtrelenmisSayilar);
// Orijinal diziyi 3'ten büyük olan sayılar için filtrelediğimizde yeni oluşacak dizi [4,5] olacaktır.

find()
Bu metot belirtilen koşula uyum sağlayan dizi elemanını bulmamızı sağlar.
Diğer metotların aksine find metodu elemanın kendisini döner.
Koşulu sağlayan birden fazla eleman varsa, bulduğu ilk elemanı döner.
Koşulu sağlayan bir eleman bulamazsa undefined döner.

sort()
Bu metot, dizi içerisindeki elemanları sıralamaya yarar.
Orijinal dizi sıralanmış şekilde döner. (Yani dizi mutate eder.)
Eğer parametre olarak bir fonksiyon verilmezse dizi elemanları string'e çevrilir ve UTF-16 değerlerine göre sıralanır.
Artan veya azalan olarak sıralamak için farklı bir yol izlenmelidir.

reduce()
Bu metot dizimizi yalnızca bir değere indirger.
Parantez içerisine parametre olarak bir fonksiyon ve accumulator'ün (toplayıcının) başlangıç değeri girilir.
Bu metot orijinal diziyi değiştirmez. (Mutate etmez.)
Tam olarak ne yaptığını anlamak için örnekleri inceleyelim.

*/ 

//Pekiştirme Soruları
//1.Soru

let dizi = [2,5,8,11,15,17];

// Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)
let diziOn = dizi.filter( sayi => sayi > 10); 
let diziOnV = diziOn.map(sayi => sayi*5);

console.log(diziOnv);

2.Soru

let dizi = [3,6,9,14,16];

// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

function myFunction (dizi){
// Kodunuzu buraya yazın.
let soruiki = dizi.find(sayiİki => sayiİki > 5);
if (soruiki){
    console.log("Beşten büyük bir eleman mevcut");
} else {
    console.log("5'ten büyük eleman mevcut değil.");
}
}

3. Soru

let dizi3 = [2,3,4];

// Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.
function indirgeyici (akumulator, sayi3) {
    return akumulator * sayi3;
}
const sonuc3 = dizi3.reduce(indirgeyici,1);

console.log(sonuc3);