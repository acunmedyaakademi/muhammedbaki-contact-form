let messagesent = document.querySelector(".message-sent");
let firstname = document.querySelector(".firstname-input");
let lastname = document.querySelector(".lastname-input");
let email = document.querySelector(".mail-input");
let sorgu1 = document.querySelector("#sorgu1");
let sorgu2 = document.querySelector("#sorgu2");
let sorgu1text = document.querySelector(".sorgu1text");
let sorgu2text = document.querySelector(".sorgu2text");
let textarea = document.querySelector(".textarea");
let checkbox = document.querySelector(".checkbox");
let querytypes1 = document.querySelector(".querytypes-input-1");
let querytypes2 = document.querySelector(".querytypes-input-2");
let querytypes = document.querySelector(".querytypes-inputs");
let querytypesradio = document.querySelectorAll(".querytypes-inputs p input");

let submit = document.querySelector(".submit");

let show = document.querySelector(".show");
let showname = document.querySelector(".show-name");
let showlastname = document.querySelector(".show-lastname");
let showemail = document.querySelector(".show-email");
let showquery = document.querySelector(".show-query");
let showmessage = document.querySelector(".show-message");

let uyarifirstname = document.querySelector(".uyari-firstname");
let uyarilastname = document.querySelector(".uyari-lastname");
let uyariemail = document.querySelector(".uyari-email");
let uyarisorgu = document.querySelector(".uyari-sorgu");
let uyarimessage = document.querySelector(".uyari-message");
let checkboxuyari = document.querySelector(".checkbox-uyari");

function handleFormClick(e) {
  e.preventDefault();

  if (
    (firstname.value !== "",
    lastname.value !== "",
    email.value !== "",
    textarea.value !== "",
    sorgu1.checked !== false,
    sorgu2.checked !== false,
    checkbox.checked !== false)
  ) {
    show.style.display = "flex";
    messagesent.style.display = "flex";
    showname.innerText = firstname.value;
    showlastname.innerText = lastname.value;
    showemail.innerText = email.value;
    showmessage.innerText = textarea.value;

    setTimeout(function () {
      messagesent.style.display = "none";
    }, 1500);
  }

  if (sorgu1.checked === true) {
    showquery.innerText = sorgu1text.innerText;
  } else if (sorgu2.checked === true) {
    showquery.innerText = sorgu2text.innerText;
  } else {
    showquery.innerText = "";
  }

  if (firstname.value === "") {
    uyarifirstname.style.display = "flex";
    firstname.style.border = "1px solid rgba(215, 60, 60, 1)";
  } else {
    uyarifirstname.innerText = "";
    firstname.style.border = "1px solid rgba(134, 162, 165, 1)";
  }

  if (lastname.value === "") {
    uyarilastname.style.display = "flex";
    lastname.style.border = "1px solid rgba(215, 60, 60, 1)";
  } else {
    uyarilastname.innerText = "";
    lastname.style.border = "1px solid rgba(134, 162, 165, 1)";
  }

  if (email.value === "") {
    uyariemail.style.display = "flex";
    email.style.border = "1px solid rgba(215, 60, 60, 1)";
  } else {
    uyariemail.innerText = "";
    email.style.border = "1px solid rgba(134, 162, 165, 1)";
  }

  if (sorgu1.checked === false && sorgu2.checked === false) {
    uyarisorgu.style.display = "flex";
  } else {
    uyarisorgu.innerText = "";
  }

  if (textarea.value === "") {
    uyarimessage.style.display = "flex";
    textarea.style.border = "1px solid rgba(215, 60, 60, 1)";
  } else {
    uyarimessage.innerText = "";
    textarea.style.border = "1px solid rgba(134, 162, 165, 1)";
  }

  if (checkbox.checked === false) {
    checkboxuyari.style.display = "flex";
  } else {
    checkboxuyari.innerText = "";
  }
  
  firstname.value = "";
  lastname.value = "";
  email.value = "";
  textarea.value = "";
  sorgu1.checked = false;
  sorgu2.checked = false;
  checkbox.checked = false;
  querytypes2.style.background = "white";
  querytypes2.style.border = "1px solid rgba(134, 162, 165, 1)";
  querytypes1.style.background = "white";
  querytypes1.style.border = "1px solid rgba(134, 162, 165, 1)";
}

submit.addEventListener("click", handleFormClick);

for (let i = 0; i < querytypesradio.length; i++) {
  querytypesradio[i].onclick = function handleRadioClick() {
    if (sorgu1.checked === true) {
      querytypes1.style.background = "rgba(224, 241, 232, 1)";
      querytypes1.style.border = "1px solid rgba(12, 125, 105, 1)";
    } else {
      querytypes1.style.background = "white";
      querytypes1.style.border = "1px solid rgba(134, 162, 165, 1)";
    }

    if (sorgu2.checked === true) {
      querytypes2.style.background = "rgba(224, 241, 232, 1)";
      querytypes2.style.border = "1px solid rgba(12, 125, 105, 1)";
    } else {
      querytypes2.style.background = "white";
      querytypes2.style.border = "1px solid rgba(134, 162, 165, 1)";
    }
  };
}
