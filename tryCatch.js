/* Try Ve Catch Kullanımı
try...catch ifadesini basitçe ifade edersek; Herhangi bir iş yaparken bir hatayla karşılaşılma durumunun ele alınması anlamına gelmektedir.

try anahtar kelimesi kodları çalışma zamanında test etmek için kullanılırken, catch anahtar kelimesi ise çalışma zamanında hata çıkması durumunda bu hataları yakalamak için kullanılır.

Basit bir try catch bloğu şu şekildedir.
*/
try {
  //Çalıştırılacak kodlar
}catch(hata) {
  //Hata yakalandığında çalışacak kodlar
}finally {
  //try tamamlandıktan sonra hata olsada olmasada çalışacak olan kodlar.
}

/*
catch bloğunda yazılmış olan hata değişkeni oluşacak istisnayı taşıyacak olan değişken adıdır. Buraya herhangi bir isim verilebilir fakat yaygın olarak exceptionın ilk harfi olan e, err gibi ifadelerle isimlendirilir. Bizde örneklerimizde bu yaygın isimlendirmelerden err yi kullanacağız.

Basit bir örnekle daha iyi anlamaya çalışalım.
*/ 

try {
  hello();
}catch (err) {
  console.error(err);
  // beklenen çıktı: ReferenceError: hello is not defined
  // hata mesajları tarayıcıya göre değişiklik gösterecektir
}

/*
Örnekteki kod bloğunda hello() diye bir fonksiyon çalıştırılmak isteniyor ama böyle bir fonksiyon olmadığı için catch bloğu içerisine düşüyor ve cath bloğuna düştükten sonra console.error() fonksiyonu ile konsolda hata gösteriliyor.

Throw İle İstisnalar Oluşturma
Normalde kod çalışırken bir hata oluştuğunda, JavaScript durur ve bir hata mesajı oluşturur. Bu duruma JavaScript bir istisna atar (bir hata atar) olarak adlandırılır.

JavaScript aslında iki özelliğe sahip bir Error nesnesi oluşturacaktır: isim ve mesaj.

throw ifadesi bize özel hatalarımızı oluşturmanıza olanak tanır. Teknik olarak throw ile bir istisna (hata) atılabilir.

throw "Çok büyük";    // Çok büyük hatası at, oluştur
throw 500;            // 500 numarası hatasını at, oluştur
Sonuç olarak throw ile birlikte try...catch ifadesini kullanırsak, program akışını kontrol edebilir ve özel hata mesajları oluşturabiliriz.

Basit bir örnekle daha iyi anlamaya çalışalım.
*/ 
<input type="text" id="dogumTarihi" />
<button onclick="valid()">Gönder</button>

/*
Yukarıdaki gibi ‘dogumTarihi’ adında bir input nesnesi oluşturalım ve butona tıkladığımızda eğer ‘dogumTarihi’ adındaki input nesnemize bir şey girilmediyse throw ifadesiyle kolay bir şekilde exception oluşturabiliriz.
*/ 
function valid(){
    try {
        if (document.querySelector("#dogumTarihi").value == "") {
            throw 'Doğum tarihini boş geçemezsiniz';
        };
    }catch(err) {
        alert(err);
    }
}