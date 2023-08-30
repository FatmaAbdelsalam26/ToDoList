const form = document.getElementById('form');
const input =document.getElementById('input');
const toDosUl = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if(todos){
    todos.forEach(todo => addToDo(todo));
}

form.addEventListener('submit', e=>{
    e.preventDefault();
    addToDo();
});
function addToDo(todo){
    let todoText = input.value;


    if(todo){
        todoText = todo.text;
    }
    if(todoText){
        const todoEl = document.createElement('li')
        if(todo && todo.completed){
            todoEl.classList.add('completed');
        }
        todoEl.innerText = todoText;

        todoEl.addEventListener('click',()=>{
            todoEl.classList.toggle('completed');
            updateLs();
        });

        todoEl.addEventListener('contextmenu',(e)=>{
            e.preventDefault();
            todoEl.remove();
            updateLs();
        });

        toDosUl.appendChild(todoEl);

        input.value ='';
        updateLs();
    }

}
function updateLs(){
    todoEl =document.querySelectorAll('li');

    const todos=[];
    todoEl.forEach(todosEl => {
        todos.push({
            text: todosEl.innerText,
            completed: todosEl.classList.contains('completed')
    });
    });
    localStorage.setItem('todos',JSON.stringify(todos))
}