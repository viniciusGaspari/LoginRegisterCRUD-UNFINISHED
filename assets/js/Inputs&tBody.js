// valores
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputCity = document.getElementById("city");
const inputPhone = document.getElementById("phone");
const btnSubmit = document.getElementById("submit");



// função
const addNewTable = (text) => {

    const tbody = document.createElement("tbody");
    tbody.classList.add("tableBody");

    const tableContainer = document.querySelector(".tableContainer");
    tableContainer.appendChild(tbody);

    const tr = document.createElement("tr");
    tr.classList.add("trTable");

    tbody.appendChild(tr);

    const tbodyName = document.createElement("td");
    tbodyName.classList.add("name");
    tbodyName.innerText = text[0];
    tr.appendChild(tbodyName);
    tbodyName

    const tbodyEmail = document.createElement("td");
    tbodyEmail.classList.add("email");
    tbodyEmail.innerHTML = text[1];
    tr.appendChild(tbodyEmail);

    const tbodyCity = document.createElement("td");
    tbodyCity.classList.add("city");
    tbodyCity.innerText = text[2];
    tr.appendChild(tbodyCity);


    const tbodyPhone = document.createElement("td");
    tbodyPhone.classList.add("phone");
    tbodyPhone.innerText = text[3];
    tr.appendChild(tbodyPhone)

    const btnTd = document.createElement("td");

    const btnRemove = document.createElement("button")
    btnTd.appendChild(btnRemove)
    btnRemove.classList.add("btnRemove");
    btnRemove.innerHTML = "Remover"
    tr.appendChild(btnTd)


    const btnEdit = document.createElement("button");
    btnTd.appendChild(btnEdit);
    btnEdit.classList.add("btnEdit")
    btnEdit.innerHTML = "Editar";
    tr.appendChild(btnTd)
    console.log(tbody)

    inputName.value = '';
    inputEmail.value = '';
    inputPhone.value = '';
    inputCity.value = '';
}

// botões em funcionamento

btnSubmit.addEventListener("click", (e) => {

    e.preventDefault();

    let arrayInputValues = [inputName.value, inputEmail.value, inputCity.value, inputPhone.value];

    if(arrayInputValues){
        addNewTable(arrayInputValues);
    }

    console.log(arrayInputValues);

    console.log(btnSubmit);
});

document.addEventListener("click", (e) => {

    const targetEl = e.target;
    const parentEl = targetEl.closest("tbody")

    if(targetEl.classList.contains("btnRemove")){
        parentEl.remove();
    }

});

