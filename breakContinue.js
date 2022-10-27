/*
Break ve Continue Kullanımı
Break ve continue döngülerde sıklıkla kullandığımız önem arz eden ifadelerimizdendir. Döngüye müdahale etmemizi ve akışı kontrol etmemizi sağlarlar.

Break:

break ifadesi içinde bulunduğu döngüyü sonlandırmak diğer bir deyişle döngüden çıkılması hizmetini sunar. Bu hususta öneminin yeniden vurgulanması gereken nokta "break" ifadesinin sadece kendine en yakın yani içinde bulunduğu döngü içerisinde geçerli oluşudur.----> İç içe döngüler örneğinde daha net anlaşılacaktır.

Etiketli Break:

Etiketli break ifadeleri ise başına konulduğu döngü sistemini sonlandırır.

Continue :

Continue ifadesi ise bulunduğu döngü içinde o anki çalışacak olan devir işlemini pas geçerek bir sonraki devir işlemini başlatır. Yine burada da vurgulanması gereken nokta "continue" ifadesinin sadece kendine en yakın yani içerisinde bulunduğu döngü içinde geçerli oluşudur.

Etiketli Continue:

Etiketli continue ifadeleri ise başına konulduğu döngü sistemini etkiler.

*/

// 1-) break için basit örnek
// normalde 1 den 10 a kadar yazdırması gerekirken 5 te break ile karşılaşıldığı
//için dögüden çıkıldı hemen orda döngü sonlandırıldı
for (var i = 0; i <= 10; i++) {
    if (i == 5) {
      break;
    }
    console.log("i:" + i);
   }
   console.log("Döngüden çıkıldı");
   
   //2-) continue için basit örnek
   // 1 den 10 a kadar yazıldı fakat 5 te continue ile karşılaşıldığı için o anki
   //işlem olan 5 sayısı  pas geçilerek direk 6 ya geçildi
   for (var i = 0; i <= 10; i++) {
    if (i == 5) {
      continue;
    }
    console.log("i:" + i);
   }
   console.log("Döngüden çıkıldı");
   