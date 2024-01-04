let taskArr = [
  {
    title: "Task1",
    description: "Task1",
    status: "To Do",
    priority: "Low",
    id: 1,
    button: "Add Task",
  },
  {
    title: "Task2",
    description: "Task2",
    status: "In-progress",
    priority: "Low",
    id: 2,
    button: "Add Task",
  },
  {
    title: "Task3",
    description: "Task3",
    status: "Stuck",
    priority: "Low",
    id: 3,
    button: "Add Task",
  },
  {
    title: "Task4",
    description: "Task4",
    status: "Done",
    priority: "Low",
    id: 4,
    button: "Add Task",
  },
];
// root ee duudan
const root = document.getElementById("root");
boardArr = ["To-Do", "In-progress", "Stuck", "Done"];

// boards hiij bn
let boards = document.createElement("div");
boards.setAttribute("class", "boards");
root.appendChild(boards);

function renderTasks(list) {
  boardArr.map((event) => {
    // board iig hiij bn
    let board = document.createElement("div");
    board.setAttribute("class", "board");
    board.setAttribute("id", `${event}`);
    boards.appendChild(board);

    // board header
    let header = document.createElement("h2");
    header.setAttribute("class", "boardHeader");
    header.setAttribute("id", `${event}`);
    board.appendChild(header);

    // board card
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", `${event}`);
    board.appendChild(card);

    // board button
    let button1 = document.createElement("button");
    button1.setAttribute("class", "button");
    board.appendChild(button1);

    const taskDone = list.filter((todo) => {
      return todo.status == `${event}`;
    });
    const doneStatusDiv = document.createElement("div");
    doneStatusDiv.setAttribute("class", "status_column");

    const statusHeadD = document.createElement("div");
    statusHeadD.setAttribute("class", "status_head");
    statusHeadD.innerHTML = `${event}`;
    doneStatusDiv.appendChild(statusHeadD);

    const heatCountD = document.createElement("span");
    heatCountD.innerHTML = taskTodo.length;
    statusHeadD.appendChild(heatCountD);
  });

  taskDone.map((task) => {
    const newTask = createTask(task);

    doneStatusDiv.appendChild(newTask);
    container.appendChild(doneStatusDiv);
  });

  const addCardButton3 = addCard();
  doneStatusDiv.appendChild(addCardButton3);
}
renderTasks(taskArr);
