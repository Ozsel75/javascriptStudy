/* Etkinlik Ekleme ve Özelliklerine Ulaşma
Etkinlikler yani "events"ler uygulanacak eylemlerin ne zaman gerçekleşeceğinin öğrenilmesine ve sonrasında kodun çalıştırılmasına olanak sağlar. Sayfa üzerindeki eylemlere göre bir çok etkinlik eklemek mümkündür.

Event Listener ile Çalışmak
Event oluşumu öncelikle nesnenin seçimi ile başlar. Bir butona tıklandığında tıklandı uyarısı ekrana uyarı(alert) olarak ekrana yazdırabiliriz.

1. Metot
*/
element.addEventListener(event, function);
// id =button olan nesne seçildi
const buton = document.querySelector("id");
// Nesneye bir etkinlik atandı..
const buton = document.querySelector("#button");
//Burada ilk olarak tip ('click') ,ikinci olarak da fonksiyonun kendisi parametre olarak eklenir
buton.addEventListener('click' , function(){
  alert("Buton Tıklandı");
       })
 /*
// Çıktı : Buton Tıklandı

2. Metot
Fonksiyon etkinlik parametresi olarak da çalışabilmektedir. Burada parametre olan "event"i bir değişkene atayıp hedef etkinlik tanımlandıktan sonra butona basıldığında hangi butonun tıklandığı bilgisine ulaşılabilmektedir

Kullanım:

element.addEventListener(event, functionName);
*/
//id =button olan nesne seçildi
const button = document.querySelector("#button");
//nesneye bir etkinlik atandı.Burada ilk olarak tip ('click')
//ikinci olarak da aşağıda fonksiyon tanımlanır ,fonksiyon ismi parametre olarak girilir. 
button.addEventListener('click',btnClicked);
  function btnClicked(){
    alert("Buton Tıklandı!!!")
    }

// Çıktı : Buton Tıklandı!!!

