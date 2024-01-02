const root = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "container");
root.appendChild(container);

// boards
const boards = document.createElement("div");
boards.setAttribute("class", "boards");
container.appendChild(boards);

const boardTitle = [
  { title: "Todo", id: "todo" },
  { title: "In Progress", id: "inprogress" },
  { title: "Stuck", id: "stuck" },
  { title: "Done", id: "done" },
];
// board
function boardmake() {
  boardTitle.map((title) => {
    const board = document.createElement("div");
    board.setAttribute("class", "board");
    boards.appendChild(board);

    const head = document.createElement("div");
    head.setAttribute("class", "head");
    head.innerText = title.title;
    board.appendChild(head);

    const cardCount = document.createElement("p");
    cardCount.innerText = 0;
    head.appendChild(cardCount);

    const cards = document.createElement("div");
    cards.setAttribute("class", "cards");
    board.appendChild(cards);

    const addCardBtn = document.createElement("button");
    addCardBtn.setAttribute("class", "addCardBtn");
    addCardBtn.innerText = "+  Add card";
    board.appendChild(addCardBtn);

    // add Card darah bolgond
    addCardBtn.addEventListener("click", () => {
      const addCardDiv = document.createElement("div");
      addCardDiv.setAttribute("class", "addCardDiv");
      root.appendChild(addCardDiv);

      // modal
      const modal = document.createElement("div");
      modal.setAttribute("class", "modal");
      addCardDiv.appendChild(modal);

      // add task header
      const modalHEader = document.createElement("h1");
      modalHEader.innerText = "Add Task";
      modal.appendChild(modalHEader);

      // title
      const title = document.createElement("input");
      title.setAttribute("class", "title");
      modal.appendChild(title);

      // description
      const description = document.createElement("input");
      description.setAttribute("class", "description");
      description.setAttribute("id", "description");
      modal.appendChild(description);

      // status
      const status = document.createElement("select");
      status = document.setAttribute("option");
      
      modal.appendChild(status);

      // priority
      const priority = document.createElement("select");
      const priorityLow = document.createElement("option");
      priorityLow.innerText = "Low";
      priority.appendChild(priorityLow);

      const priorityMedium = document.createElement("option");
      priorityMedium.innerText = "Medium";
      priority.appendChild(priorityMedium);

      const priorityHigh = document.createElement("option");
      priorityHigh.innerText = "High";
      priority.appendChild(priorityHigh);
      modal.appendChild(priority);

      const addTaskBtn = document.createElement("button");
      addTaskBtn.setAttribute("class", "addTaskBtn");
      addTaskBtn.innerText = "Add Task";
      modal.appendChild(addTaskBtn);

      // add task button darah bolgond
      addTaskBtn.addEventListener("click", () => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        cards.appendChild(card);

        const cardTitle = document.createElement("h2");
        cardTitle.innerText = title.value;
        card.appendChild(cardTitle);

        const cardDescription = document.createElement("p");
        cardDescription.innerText = description.value;
        card.appendChild(cardDescription);
      });
    });
  });
}
boardmake();

// function createTask()
// function editTask()
// function deleteTask()

function name(params) {
  
}