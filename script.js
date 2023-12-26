const container = document.getElementById("container");

// boards
const boards = document.createElement("div");
boards.setAttribute("class", "boards");
container.appendChild(boards);

// board1
const board = document.createElement("div");
board.setAttribute("class", "board");
boards.appendChild(board);

// board1 header
let toDo = 0;
const aHeader = document.createElement("div");
aHeader.setAttribute("class", "board-header");
aHeader.innerText = "To Do";
board.appendChild(aHeader);

// board1 add
const addBtn = document.createElement("div");
addBtn.setAttribute("class", "addBtn");
addBtn.innerText = "+ Add card";
board.appendChild(addBtn);

addBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// board2
const board2 = document.createElement("div");
board2.setAttribute("class", "board");
boards.appendChild(board2);

// board2 header
const bHeader = document.createElement("div");
bHeader.setAttribute("class", "board-header");
bHeader.innerText = "Stuck";
board2.appendChild(bHeader);

// board2 add
const addBtn2 = document.createElement("div");
addBtn2.setAttribute("class", "addBtn");
addBtn2.innerText = "+ Add card";
board2.appendChild(addBtn2);

// board3
const board3 = document.createElement("div");
board3.setAttribute("class", "board");
boards.appendChild(board3);

//
// board3 header
const cHeader = document.createElement("div");
cHeader.setAttribute("class", "board-header");
cHeader.innerText = "In progress";
board3.appendChild(cHeader);

// board3 add
const addBtn3 = document.createElement("div");
addBtn3.setAttribute("class", "addBtn");
addBtn3.innerText = "+ Add card";
board3.appendChild(addBtn3);

// board4
const board4 = document.createElement("div");
board4.setAttribute("class", "board");
boards.appendChild(board4);

// board4 header
const dHeader = document.createElement("div");
dHeader.setAttribute("class", "board-header");
dHeader.innerText = "Done";
board4.appendChild(dHeader);

// board4 add
const addBtn4 = document.createElement("div");
addBtn4.setAttribute("class", "addBtn");
addBtn4.innerText = "+ Add card";
board4.appendChild(addBtn4);

const addTask = document.createElement("div");
addTask.setAttribute("class", "cards");
container.appendChild(addTask);

const header = document.createElement("div");
header.setAttribute("class", "board-header");
header.innerText = "Add Task";
addTask.appendChild(header);

const title = document.createElement("p");
title.setAttribute("class", "smallName");
title.innerText = "Title";
addTask.appendChild(title);

const empty1 = document.createElement("input");
addTask.appendChild(empty1);

const desc = document.createElement("p");
desc.setAttribute("class", "smallName");
desc.innerText = "Description";
addTask.appendChild(desc);

const empty2 = document.createElement("input");
addTask.appendChild(empty2);

const sta = document.createElement("p");
sta.setAttribute("class", "smallName");
sta.innerText = "Status";
addTask.appendChild(sta);

const empty3 = document.createElement("input");
addTask.appendChild(empty3);

const Priority = document.createElement("p");
Priority.setAttribute("class", "smallName");
Priority.innerText = "Status";
addTask.appendChild(Priority);

const empty4 = document.createElement("input");
addTask.appendChild(empty4);

const endBtn = document.createElement("div");
endBtn.setAttribute("class", "endButton");
endBtn.innerText = "Add Task";
addTask.appendChild(endBtn);

const modal = document.createElement("div");
modal.setAttribute("class", "modal");
container.appendChild(modal);

const modalContainer = document.createElement("div");
modalContainer.setAttribute("class", "modal-content");
modal.appendChild(modalContainer);

modalContainer.appendChild(addTask);
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
