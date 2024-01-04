// function helper(element, divName, calssName, idName, append) {
//   let element = document.createElement(divName);
//   element.setAttribute("class", calssName);
//   element.setAttribute("class", idName);
//   append.appendChild(element);
// }
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

const root = document.getElementById("root");
boardArr = ["To-Do", "In-progress", "Stuck", "Done"];

let boards = document.createElement("div");
boards.setAttribute("class", "boards");
root.appendChild(boards);

boardArr.map((event)=>{
    let board=
})

let render = boardArr.map((event) => {});
