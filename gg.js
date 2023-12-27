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
