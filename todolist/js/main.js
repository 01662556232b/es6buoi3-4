let todo = []
let complete = []
let addtodo = () => {
    let inputtext = document.querySelector("#newTask").value;

    todo.push(inputtext);
    document.querySelector("#newTask").value = "";
    rendertodo(todo);
    setlocalstorage(todo);
}
let rendertodo = () => {


    let content = "";

    todo.map((taskstodo, index) => {

        content += `
            <li>
                <span class="todolist">${taskstodo}</span>
                    <div class ="button">
                        <button class="clear" onclick="clearTasks('${index}')">
                            <i class="fa-sharp fa-solid fa-trash"></i>
                            </button>
                        <button class="work" onclick="checktodo('${index}')"class="check">
                            <i class="fa-sharp fa-solid fa-check"></i>
                            </button>
                    </div>
                
            </li>
            
  
        `
    })
    document.querySelector("#todo").innerHTML = content;
}
document.querySelector("#addItem").onclick = addtodo;

// Hàm đổi chiều
let sortUp = () => {
    todo.sort();
    complete.sort();
    rendertodo()
    rendercomplete()
}
document.getElementById("two").onclick = sortUp;

let sortdowm = () => {
    todo.reverse()
    complete.reverse()
    rendertodo()
    rendercomplete()
}
document.getElementById("three").onclick = sortdowm;


let clearTasks = (index) => {

    todo.splice(index, 1);
    setlocalstorage(todo);
    getlocalstorage();


}
let checktodo = (index) => {
    complete.push(todo[index])
    clearTasks(index)
    getlocalstorage();
}
let rendercomplete = () => {


    let content = "";
    complete.map((complete, index) => {
        content += `
            <li>
                <span>${complete}</span>
                <div class ="button">
                        <button class="clear" onclick="clearlocal('${index}')" >
                            <i class="fa-sharp fa-solid fa-trash"></i>
                            </button>
                        <button class="complete">
                            <i class="fa-sharp fa-solid fa-check-circle"></i>
                            </button>
                </div>
            </li>
        `
    })
    document.querySelector("#completed").innerHTML = content;
}

let clearlocal = (index) => {
    if (confirm('Bạn có muốn xõa không?')) {
        complete.splice(index, 1);
        setlocalstorage(complete);
        getlocalstorage();

    }

}

let setlocalstorage = () => {

    localStorage.setItem("TodoList", JSON.stringify(todo));
    localStorage.setItem("TodoCOMPLETE", JSON.stringify(complete));
}
let getlocalstorage = () => {
    if (localStorage.getItem("TodoList") != undefined) {
        todo = JSON.parse(localStorage.getItem("TodoList"));
    }
    rendertodo(todo);
    if (localStorage.getItem("TodoCOMPLETE") != undefined) {
        complete = JSON.parse(localStorage.getItem("TodoCOMPLETE"));
    }
    rendercomplete(complete);
}
getlocalstorage();