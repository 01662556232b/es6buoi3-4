let text = '';
const aList = [];
function add(){
    const todoList = [];
    var inputList = document.getElementById('newTask').value;
    todoList.push(inputList);
    aList.push(inputList);
    for(let i = 0; i < todoList.length; i++) {
        text += "<li>" + todoList[i]+"<Button>✓</Button>"+"</li>";
    }
    document.getElementById('todo').innerHTML = text;
}

document.getElementById('addItem').onclick = add;

funtion