const todoList = [{
    name: 'mak dinner', 
    duedate: '2023-8-28'},
    { 
    name: 'wash dishes',
    duedate: '2023-8-28'
    }];

rendenderTodoList();

function rendenderTodoList() {
    
let todoListHTML = '';

todoList.forEach(function(todoObject, index) {
   const { name, duedate } = todoObject;
   const html= `
    <div>${name}</div>
    <div>${duedate}</div>
    <button onclick="
      todoList.splice(${i}, 1);
      rendenderTodoList();
    " class="ballessii">Delete</button>
   `;

  todoListHTML += html;  
})

console.log(todoListHTML);

document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    const dateInputElement = document.querySelector('.js-due-date-input');
const duedate = dateInputElement.value;


    todoList.push({
        //name: name,
        //duedate: duedate,
        name,
        duedate
      });
    console.log(todoList);
    
    inputElement.Value = '';

    rendenderTodoList();

}