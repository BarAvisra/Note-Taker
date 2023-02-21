$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

const container = document.querySelector(".container");
const addNote = document.querySelector("#addnotebutton");
const userValue = document.querySelector("#text_area");
const row = document.querySelector(".row");
const modalBody = document.querySelector(".modal-body");
const modalText = document.querySelector(".modal-text");
const closeButton = document.querySelector(".close");
const closeText = document.querySelector("#close_text");
const saveChanges = document.querySelector("#save_changes");

addNote.addEventListener("click", () => {

    const div_1 = document.createElement("div");
    div_1.setAttribute("class", "col-sm-6");

    const div_2 = document.createElement("div");
    div_2.setAttribute("class", "card");

    const div_3 = document.createElement("div");
    div_3.setAttribute("class", "card-body")

    const p1 = document.createElement("p");
    p1.classList.add("card-text");

    let fullText = userValue.value;

    if (fullText.length > 120) {
        p1.innerHTML = fullText.slice(0, 120) + "...";
    } else {
        p1.innerHTML = fullText;
    }


    const button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary");
    button.innerHTML = "View Detail"
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#exampleModalCenter");
    button.style.backgroundColor = "#998B7B"
    button.style.border = "none"

    button.addEventListener("click", () => {
        modalText.innerHTML = fullText;
    });

    closeButton.addEventListener("click", () => {
        modalText.innerHTML = fullText;
        modalBody.replaceChild(modalText, textArea);
    });

    let textArea;

    function textAreaCreation() {
        textArea = document.createElement("textarea");
        textArea.classList.add("textAreaModal");
        modalText.append(textArea);
        textArea.value = fullText;
        modalBody.replaceChild(textArea, modalText);
    }

    modalText.addEventListener("click", () => {
        textAreaCreation();
    });

    saveChanges.addEventListener("click", () => {
        console.log('CLICKED');
        const value = textArea.value;
        modalText.innerHTML = value;
        fullText = value;
        modalBody.replaceChild(modalText, textArea);
        const newp1 = document.createElement("p");
        newp1.classList.add("card-text");

        if (fullText.length > 120) {
            newp1.innerHTML = fullText.slice(0, 120) + "...";
        } else {
            newp1.innerHTML = fullText;
        }
        
        const oldText = div_3.querySelector("p.card-text");
        div_3.removeChild(oldText);
        div_3.append(newp1, button);
        textArea = null;
    });


    div_3.append(p1, button);
    div_2.append(div_3);
    div_1.append(div_2);

    row.append(div_1);
    container.append(row);
})

