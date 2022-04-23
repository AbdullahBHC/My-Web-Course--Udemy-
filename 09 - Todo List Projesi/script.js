//area 1
const firstCardBody = document.querySelectorAll(".card-body")[0]
const form = document.getElementById("todo-form")
const todoInput = document.getElementById("todo")
const addButton = document.getElementById("add-todos")

//area 2
const secondCardBody = document.querySelectorAll(".card-body")[1]
const todoList = document.getElementsByClassName("list-group")[0]
const filter = document.getElementById("filter")
const clearButton = document.getElementById("clear-todos")

eventListeners()

function eventListeners() {
    form.addEventListener("submit", addTodo)
}

function addTodo(e) {
    const newTodo = todoInput.value.trim() // trim -> gereksiz boşlukları siler

    if (newTodo === "") {
        showAlert("danger", "Lütfen bir todo girin")
    } else {
        addTodoToUI(newTodo)
        showAlert("success","Todo başarıyla eklendi")
    }
    

    e.preventDefault()
}

function showAlert(type, message) {
    const alert = document.createElement("div")
    alert.className = `alert alert-${type}`
    alert.textContent = message
    firstCardBody.appendChild(alert)
    setTimeout(function(){alert.remove()},2000)
}

function addTodoToUI(newTodo) {
    // <li class="list-group-item d-flex justify-content-between">
    //                         Todo 1
    //                         <a href = "#" class ="delete-item">
    //                             <i class = "fa fa-remove"></i>
    //                         </a>

    //                     </li>

    // link oluşturma - todo yanındaki çöp kutusu
    const link = document.createElement("a")
    link.href = "#"
    link.className = "delete-item"
    link.innerHTML = "<i class = 'fa fa-remove'></i>"
    // todo oluşturma
    const listItem = document.createElement("li")
    listItem.className = "list-group-item d-flex justify-content-between"
    listItem.appendChild(document.createTextNode(newTodo))
    listItem.appendChild(link)
    // li'yi ul'ye ekleme
    todoList.appendChild(listItem)
    todoInput.value = ""
}