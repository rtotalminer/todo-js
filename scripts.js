
// application constants
const TODO_DIV = document.getElementById("todos");

// dynamic variables
var todoCount = 0;

// add a new task to the todo list
function addTodo() {
  // grab the task from the input
  let todoTask = document.getElementById("task_input").value;

  // check if the task
  if (todoTask == "") {
    // return if the input is empty
    return;
  }

  // create our new todo task's div
  let newTodo = document.createElement("div");

  // create a new html 'span' and insert it before the end of the div
  newTodo.insertAdjacentHTML("beforeend", `<span id=task_${todoCount}>${todoTask}</span>`);

  // do the same for our button
  newTodo.insertAdjacentHTML("beforeend", `<button id=button_${todoCount} onClick='finishTask(this.id)'>-</button>`);

  // do the same for a breakpoint
  newTodo.insertAdjacentHTML("beforeend", "<br>");

  // add the new todo to our todo list div
  TODO_DIV.appendChild(newTodo);
  
  // increment the todos to track them
  todoCount++;

}

// finish the task by striking the text   
function finishTask(count) {
  // format the id to grab the number
  let countNumber = count.split("_")[1];

  // grab the task as an HTML element
  let task = document.getElementById(`task_${countNumber}`);

  // grab the elements text
  let taskText = task.innerText;

  // create a new element 'strikethrough'
  let crossTask = document.createElement("s");

  // set the strikethoughs id to the previous tasks id
  crossTask.id = `task_${count}`;

  // set the strikethrough text as task text
  crossTask.textContent = `${taskText}`;

  // replace the paragraph text with the newly created strikethrough text
  task.replaceWith(crossTask);

  // grab the button
  let btn = document.getElementById(`button_${countNumber }`);

  // disable the button
  btn.disabled = true;

}
