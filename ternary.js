var money;
var canBuy = 
    (money < 17) ? "Satın alamazsın..":
    (money > 30) ? "Satın alabilirsin..":
    "Para miktarını girmen gerekmektedir..";

console.log(canBuy) 


/*

Ternary Operator
Ternary Operator 3 adet parametre alan tek JavaScript operatörüdür. If kullanarak kontrol etmek istediğimiz koşullarda ternary operator kullanarak satır sayısı olarak avantaj sağlayabiliriz.

Ternary operatörünün aldığı 3 parametre şu şekildedir:

İlk önce bir condition belirtiriz ve sonrasında hemen bir ? koyarız
Sonrasında, eğer yazdığımız condition doğru ise ne yapmak istediğimizi belirtir ve sonuna : koyarız
Ve sıra geldi koşulumuz yanlış ise ne yapmak istediğimize.

*/