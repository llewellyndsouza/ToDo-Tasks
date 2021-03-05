const Project = (function () {
  let todos = [];

  //cacheDOM
  const container = document.querySelector(".container");
  const header_buttonAddTodo = document.querySelector(".header-buttonAddToDo");
  const overlay_addTodoForm = document.querySelector(".overlay-addTodoForm");
  const form_buttonAddTodo = document.getElementById("submitButtonAddTodo");
  const input_title = document.getElementById("inputTodoTitle");
  const input_description = document.getElementById("inputTodoDescription");
  const input_date = document.getElementById("inputTodoDueDate");

  //Add event listeners
  header_buttonAddTodo.addEventListener("click", showFormOverlay);
  form_buttonAddTodo.addEventListener("click", parseAddTodoForm);

  //Render
  function render() {
    viewTodos();
    container.innerText = "";
    todos.forEach((todo) => {
      const todo_item = document.createElement("div");
      todo_item.className = "todo-item";
      const todo_title = document.createElement("div");
      todo_title.className = "todo-title";
      todo_title.innerText = todo.title;
      const todo_description = document.createElement("div");
      todo_description.className = "todo-description";
      todo_description.innerText = todo.description;
      const todo_dueDate = document.createElement("div");
      todo_dueDate.className = "todo-dueDate";
      todo_dueDate.innerText = "31/12/2021";

      todo_item.appendChild(todo_title);
      todo_item.appendChild(todo_description);
      todo_item.appendChild(todo_dueDate);

      container.appendChild(todo_item);
    });
  }

  function showFormOverlay() {
    overlay_addTodoForm.style.display = "block";
  }
  function hideFormOverlay() {
    overlay_addTodoForm.style.display = "none";
  }

  //Private functions
  function parseAddTodoForm() {
    addTodo(input_title.value, input_description.value, input_date.value);
    input_title.value = ""
    input_description.value = ""
    input_date.value = ""
    hideFormOverlay();
  }

  //public functions
  function addTodo(todoTitle, todoDescription, date) {
    const newTodo = {
      title: todoTitle,
      description: todoDescription,
      due: date,
    };
    todos.push(newTodo);
    render();
  }

  function viewTodos() {
    //not required anymore
    console.log(todos);
  }

  return {
    addTodo,
    viewTodos,
  };
})();
