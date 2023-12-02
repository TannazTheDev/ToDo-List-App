let inputbox = document.getElementById("inputbox");
let button = document.getElementById("btn");
let input;
function addTask() {
    input = inputbox.value;
    console.log(input);
    let newdiv = document.createElement("div");
    newdiv.innerHTML = input;
    newdiv.classList.add("alert");
    newdiv.classList.add("alert-primary");
    newdiv.classList.add("alert-dismissible");
    newdiv.classList.add("newdiv");
    newdiv.setAttribute("id", "newdiv");
    document.getElementById("list").appendChild(newdiv);
    let closeButton = document.createElement("button");
    closeButton.classList.add("btn-close");
    closeButton.setAttribute("data-bs-dismiss", "alert");
    newdiv.append(closeButton);
}
button.addEventListener("click", addTask);