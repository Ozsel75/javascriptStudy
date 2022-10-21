let userFormDom = document.querySelector("#userForm");
userFormDom.addEventListener("submit", formHandler);
let alertDOM = document.querySelector("#alert")

const alertFunction = (title, message, className="warning") => `
<div class="alert alert-warning ${className}alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault(); 
    const USER_NAME = document.querySelector("#userName");
    const SCORE = document.querySelector("#score");
    if (USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value, SCORE.value);
        USER_NAME.value = "";     // gönderdikten sonra alanları sıfırladık
        SCORE.value ="";
    } else {
        alertDOM.innerHTML = alertFunction("Başlık Bilgisi", "Eksik bilgi girdiniz", "danger");
    }
     
}

let userListDOM = document.querySelector("#userList");

const addItem = (userName, score) => {
    let liDOM = document.createElement('li');
    liDOM.innerHTML = `${userName} <span class="badge bg-primary rounded-pill">${score}</span> `;
    liDOM.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-start")
    userListDOM.append(liDOM);
}