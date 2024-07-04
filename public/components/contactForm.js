//Submitting form to Google Sheets
var form = document.getElementById("sheetdb-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then((response) => response.json())
    .then((html) => {
      showModal(); // show Submission modal
      form.reset(); // Reset/Clear the form
    });
});

// *******Modals & Animation*********
let backdrop = document.querySelector(".backdrop");
let modalDone = document.querySelector(".section_modal .done");
let modalContainer = document.querySelector(".modaldrop");

function showModal() {
  setTimeout(showModalDone, 1);
  function showModalDone() {
    addAnimation(modalDone);

    setTimeout(stopModal, 3000);

    function stopModal() {
      removeModal();
      setTimeout(timeOut, 3000);
    }
  }
}

function addAnimation(modalDone) {
  backdrop.classList.add("animIn");
  modalDone.classList.add("animIn");
  modalContainer.classList.add("active");
}

function removeModal() {
  modalDone.classList.add("animOut");
  backdrop.classList.add("animOut");

  setTimeout(timeOut, 500);
}

function timeOut() {
  modalDone.classList.remove("animIn");
  backdrop.classList.remove("animIn");
  modalContainer.classList.remove("active");
  modalDone.classList.remove("animOut");
  backdrop.classList.remove("animOut");
}

