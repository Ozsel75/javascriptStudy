let claz = document.querySelector("#walterwhite");
claz.classList.add("red", "btn", "bold");  // classList ile tanımla add ile ekle
claz.classList.remove("bold"); // remove ile class sil

/* add() : HTML öğesine bir veya daha fazla class ekler. */

/* remove() : HTML öğesinden bir veya daha fazla class'ı siler. */

/* item() : HTML de class'ı verilen index sırasına göre döndürür. Eğer index, class length'inden (sayısından) daha büyük veya length'ine eşit olursa undefined döner. */ 

let item = claz.classList.item(0);
console.log(item);

/* contains() : Element verilen class'ı içeriyorsa true, içermiyorsa false döner. Bu sayede bir işlem yaptırmadan önce kontrol edebiliriz. */

/* Toggle() : classList.add() ve classList.remove() yöntemini aynı anda çağırmak yerine classList.toggle() yöntemini kullanılabilir.
Bu metodu kullanmadan önce contains() metodu ile sınıfın var olup olmadığını manuel olarak kontrol etmek gerekir. */

/* replace() : Bir CSS sınıfını başka bir sınıfla değiştirmek için kullanılır. */

claz.classList.replace("btn", "button");

/* length() : Bir öğede bulunan sınıf sayısını bilmemizi sağlar. */

var change = document.querySelector("#color");
change.addEventListener("click", function(){
    claz.classList.add("mavi");
});

var remove = document.querySelector("#remove");
    removeEventListener("click",function(){
        claz.classList.remove("mavi");

});