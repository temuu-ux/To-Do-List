const container = document.getElementById("container");

// boards
const boards = document.createElement("div");
boards.setAttribute("class", "boards");
container.appendChild(boards);

const boardTitle = [
  { title: "ToDo", id: "Todo" },
  { title: "In progress", id: "Inprogress" },
  { title: "stuck", id: "stuck" },
  { title: "Done", id: "Done" },
];
function makeBoards() {
  // 4 board
  boardTitle.map((title) => {
    const board = document.createElement("div");
    board.setAttribute("class", "board");
    boards.appendChild(board);

    //board header
    let toDo = 0;
    const aHeader = document.createElement("div");
    aHeader.setAttribute("class", "board-header");
    aHeader.innerText = title.title;
    board.appendChild(aHeader);

    // board  +add card
    const addBtn = document.createElement("div");
    addBtn.setAttribute("class", "addBtn");
    addBtn.innerText = "+ Add card";
    board.appendChild(addBtn);
  });
}

makeBoards();

const addTaskTitle = [
  { titleG: "Title", id: "Title" },
  { titleG: "Description", id: "Description" },
  { titleG: "Status", id: "Status" },
  { titleG: "Priority", id: "Priority" },
];

function makeAddTask() {
  addTaskTitle.map((titleG) => {
    const addTask = document.createElement("div");
    addTask.setAttribute("class", "cards");

    const header = document.createElement("div");
    header.setAttribute("class", "board-header");
    header.innerText = "Add Task";
    addTask.appendChild(header);

    // small Title
    const title = document.createElement("p");
    title.setAttribute("class", "titleG");
    title.innerText = titleG.titleG;
    addTask.appendChild(title);

    // hooson input
    const empty1 = document.createElement("input");
    addTask.appendChild(empty1);
    container.appendChild(addTask);
  });
  // end button
  const endBtn = document.createElement("div");
  endBtn.setAttribute("class", "endButton");
  endBtn.innerText = "Add Task";
  addTask.appendChild(endBtn);

  endBtn.addEventListener("click");
}
makeAddTask();
// const desc = document.createElement("p");
// desc.setAttribute("class", "smallName");
// desc.innerText = "Description";
// addTask.appendChild(desc);

// const empty2 = document.createElement("input");
// addTask.appendChild(empty2);

// const sta = document.createElement("p");
// sta.setAttribute("class", "smallName");
// sta.innerText = "Status";
// addTask.appendChild(sta);

// const empty3 = document.createElement("input");
// addTask.appendChild(empty3);

// const Priority = document.createElement("p");
// Priority.setAttribute("class", "smallName");
// Priority.innerText = "Status";
// addTask.appendChild(Priority);

// const empty4 = document.createElement("input");
// addTask.appendChild(empty4);

// modal//////////////////////////////////////////////////////////

const modal = document.createElement("div");
modal.setAttribute("class", "modal");
container.appendChild(modal);

const modalContainer = document.createElement("div");
modalContainer.setAttribute("class", "modal-content");
modal.appendChild(modalContainer);

modalContainer.appendChild(addTask);

addBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let todoArr = [];
