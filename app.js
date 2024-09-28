let addbtn = document.querySelector(".add-btn");
let input = document.querySelector(".todo-input");
let ul = document.querySelector(".todo-list");

addbtn.addEventListener("click", function () {

    let iteminp = document.createElement("input");
    iteminp.setAttribute("type", "checkbox");

  
    let label = document.createElement("label");

    

    let item = document.createElement("li");

    let delbtn = document.createElement("button");
    delbtn.innerText = "X";
    delbtn.classList.add("delete-btn");

    label.innerText = input.value;

    ul.appendChild(item);
    item.prepend(iteminp);
    item.appendChild(label);
    item.appendChild(delbtn);

    input.value = "";


    delbtn.addEventListener("click", function(){
        ul.removeChild(item);
    })

});