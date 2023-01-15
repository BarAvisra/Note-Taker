$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

const container = document.querySelector(".container");
const addNote = document.querySelector("#addnotebutton");
const userValue = document.querySelector("#text_area");
const row = document.querySelector(".row");


addNote.addEventListener("click", () => {

    const div_1 = document.createElement("div");
    div_1.setAttribute("class", "col-sm-6");

    const div_2 = document.createElement("div");
    div_2.setAttribute("class", "card");

    const div_3 = document.createElement("div");
    div_3.setAttribute("class", "card-body")

    const p1 = document.createElement("p");
    p1.classList.add("card-text");

    if (userValue.value.length > 120) {
        p1.innerHTML = userValue.value.slice(0, 120) + "...";
    } else {
        p1.innerHTML = userValue.value;
    }

    const button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary");
    button.innerHTML = "View Detail"

    div_3.append(p1, button);
    div_2.append(div_3);
    div_1.append(div_2);

    row.append(div_1);
    container.append(row);
})