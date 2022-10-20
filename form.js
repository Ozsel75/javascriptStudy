let formDOM = document.querySelector("#userForm");
formDOM.addEventListener("submit", formSubmit );

function formSubmit(event) {
    event.preventDefault(); // default refresh engellendi
    console.log("işlem gerçekleşti");
    let scoreInputDOM = document.querySelector("#score") ; // inputtan veri çekme
    console.log(scoreInputDOM.value);   // inputta name bilgisi olması önemli
    localStorage.setItem("score",scoreInputDOM.value )
}