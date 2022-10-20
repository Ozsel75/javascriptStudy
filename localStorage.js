/* 
Veri Ekleme
localStorage built-in fonksiyonları ile veriler üzerinde işlem yapmak oldukça kolaydır. setItem metodu kayıt eklemek için kullanılmaktadır. Bu metot iki parametre almaktadır. Bunların ilki ‘key’ yani anahtar adı ikincisi ise ‘value’ yani o anahtara karşılık gelen değeri ifade etmektedir.

	window.localStorage.setItem("key","value");

Veri Okuma
localStorage üzerinde kayıtlı olan anahtarları okumak için getItem metodu kullanılır. getItem metodu anahtar adını kendisine parametre olarak alıp geriye değeri döndürmektedir.

	window.localStorage.getItem("key");


Veri Silme
Verileri silmek için iki tane metot kullanılmaktadır. Tüm verileri silmek istiyorsak clear() metodunu kullanmamız gerekir. Şayet istediğimiz bir anahtarı silmek istiyorsak removeItem() metodunu kullanmamız gerekmektedir. removeItem metodu kendisine silinecek anahtarı parametre olarak almaktadır.

	localStorage.removeItem("key");
	localStorage.clear();
Veri silindikten sonra değeri null olarak gözükmektedir.


-- object vb varsa  JSON-- 

let userStatus = {userName: 'kodluyoruz', isActive: true}
localStorage.setItem('user', JSON.stringify(userStatus))

LocalStorage'den Veri Alma
LocalStorage'da değişkenler string olarak tutulduğundan, localStorage'tan user objesini almak istediğimizde userName ve isActive değerlerine erişemeyiz. Stringify işlemini geri almak için parse() metodu kullanılabilir.

localStorage.getItem('user', JSON.parse(userStatus))

