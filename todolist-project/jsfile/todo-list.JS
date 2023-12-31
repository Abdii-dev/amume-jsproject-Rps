const todoList = [{
    name: 'if you are ok!', 
    duedate: '2023-11-28'},
    { 
    name: 'I need work with You',
    duedate: '2023-12-20'
    }, {
      name: 'Please Contact me',
      duedate: '2024-01-01'
    }, {
      name: 'I thankful 4 U',
      duedate: '2024-01-01'
    }
  ];

rendenderTodoList();

function rendenderTodoList() {
    
let todoListHTML = '';

for (let i= 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
   // const name = todoObject.name;
    //const duedate = todoObject.duedate;
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
}
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