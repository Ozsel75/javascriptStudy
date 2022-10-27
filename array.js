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

// 2.Soru

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

// 3. Soru

let dizi3 = [2,3,4];

// Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.
function indirgeyici (akumulator, sayi3) {
    return akumulator * sayi3;
}
const sonuc3 = dizi3.reduce(indirgeyici,1);

console.log(sonuc3);

/*
Filter Metodu
Bir Array metodu olan filter(), dizi elemanlarını döngüye alıp, istediğimiz koşula sahip olanlarla yeni bir dizi oluşturmak için kullanılır.
*/
const products = ["Mikrofon","Kablo","Telefon","Bilgisayar","Mouse","Klavye","Ekran"]
// Yukarıda products dizisinden, harf sayısı 5'ten fazla olanları almak istiyorum.

const newProducts = products.filter(eleman => eleman.length > 5)
console.log(newProducts); //["Mikrofon", "Telefon", "Bilgisayar", "Klavye"]
/* Yukardaki örnekte harf sayısı 5'ten fazla olan elemanları filter() metodu ile filtreleyip, newProducts adında oluşturduğum yeni diziye atadım.

Pekiştirmek için bir örnek daha yapalım. */ 

const users = [
	{fullName: "Mehmet Veli", isActive: false},
	{fullName: "Ali Duran", isActive: true},
    {fullName: "Ahmet Yılmaz", isActive: true},
    {fullName: "Oğuz Şahin", isActive: false},
]
// Yukardaki users dizisindeki nesneler içerisinden isActive'i true olanları almak istiyorum.

const activeUsers = users.filter(user => user.isActive === true);
console.log(activeUsers.fullName); //(2)[{...},{...}] (Ali Duran, Ahmet Yılmaz)
//Üst satırdaki sonuç bize, elemanları nesne olan 2 elemanlı bir dizi olduğunu söylüyor.

Sorular:
const person = [{
  name: "Adem",
  age: 25,
  languages: ["JavaScript", "CSS"],
},
{
  name: "Oğuz",
  age: 33,
  languages: ["Java", "HTML"],
  }
];
/* Soru 1: Yukarıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.

Soru 2: Yukarıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.
*/ 

let thirty = person.filter(user => user.age > 30);
console.log(thirty);

let js =person.filter(user2 => user2.languages.includes("JavaScript") );
console.log(js);

/*
Array Map
Array Map metodu, parametre ile kendisine gönderilen dizinin her bir elemanı için ayrı ayrı çalışır ve belirlenen işleme tabi tutup, yeni bir dizi meydana getirir. Örneğin; elimizdeki dizinin tüm elemanlarının iki katını almak istediğimiz zaman kullanabiliriz. Array Map metodu, kendisine parametre olarak gönderilen diziye herhangi bir müdahalede bulunmaz. Mevcuttaki dizinin her elemanını belli bir işleme tabi tutarak yeni bir dizi oluşturur. Bu kısım önemlidir.

Öncelikle Array Map metodunun kullanımına bir göz atalım.

array.map( function(value, index, array), this)
Gönderilen parametreleri inceleyelim;

array : Üzerinde işlem yapılacak olan diziyi belirtir. Bu dizinin her bir elemanı map metotunun içinde belirleyeceğimiz işleme tabi tutulacaktır.
value : Üzerinde işlem yapılan dizi değerini belirtir.
array : Üzerinde işlem yapılan diziye erişimi sağlar
this : Kullanımı zorunlu değildir(opsiyoneldir). this değişkenine iletilecek olan değeri belirtir.
Örnekler
Örnek 1: Bir dizinin tüm elemanlarını 2 ile çarpan fonksiyon;
*/
const sayilar = [2, 3, 4, 5, 10]
const yeniArray = sayilar.map(deger => {
    return deger * 2
})

console.log(sayilar);
//[2, 3, 4, 5, 10]
console.log(yeniArray);
//[4, 6, 8, 10, 20]
Aşağıda codepen ile deneyimleyebilirsiniz.
/*
"sayilar" adında veri tipi const(sabit) bir değişken tanımlandık. Bunu içine statik değerler atadık. Daha sonra "yeniArray" olarak belirlediğimiz yeni değişkenimizde sayılar içerisinde map ile döngü oluşturarak mevcuttaki değeri 2 ile çarparak return ettik. Bu işlemden sonra sayılar array'inde herhangi bir değişiklik olmadığını görebilirsiniz.

Örnek 2: Maaş zam hesaplama; İşçilerin aldıkları maaşlara ait bir dizi olsun. Maaşı 3000 TL'nin üzerinde olanlarınkine %15, altında olanlarınkine de %25 zam yapan bir array map oluşturalım.
*/

const maaslar = [ 1100, 13000, 2500, 4500, 1500, 25000, 2000 ];
const yeniMaaslar = maaslar.map((e)=>{
    if(e > 3000)
        return e * 1.15;
    else
        return e * 1.25;
});

console.log( yeniMaaslar );
//[1210, 13650, 2750, 4725, 1650.0000000000002, 26250, 2200]

/* Maaşlar adında statik verilerden oluşan bir array oluşturduk. Bu array içinde dönerek maaşı 3000 TL'nin üzerinde olanlarınkine %15, altında olanlarınkine de %25 ekleyerek oluşan array'i return ettik. */ 

const USERS = ["AyŞe", "ahmet", "ALİ", "WOrM"];

const userObj = USERS.map( item => (
    {username: item, shortname: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}` }
))

console.log(userObj);