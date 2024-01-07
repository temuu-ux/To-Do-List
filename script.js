// asuultiin nohtsoloos hamaarch ali function we gedgiig shiidne. (edit hiih uyd add task darhad)

// root ee duudan
let root = document.getElementById("root");
let boardsArr = ["To-Do", "In-progress", "Stuck", "Done"];
taskArr = [];
let idNum = 1;

// boards hiij bn
let boards = document.createElement("div");
boards.setAttribute("class", "boards");
root.appendChild(boards);

boardsArr.map((event) => {
  // board iig hiij bn
  let board = document.createElement("div");
  board.setAttribute("class", "board");
  // -------------------------------------------------
  board.setAttribute("id", event);
  boards.appendChild(board);

  // board header
  let header = document.createElement("h2");
  header.setAttribute("class", "boardHeader");
  header.setAttribute("id", `${event}`);
  header.innerText = `${event}`;
  board.appendChild(header);

  // count number
  let countNum = document.createElement("p");
  countNum.setAttribute("id", `count${event}`);
  board.appendChild(countNum);
  // -------------------------------------
  boards.appendChild(board);

  // board card
  let cards = document.createElement("div");
  cards.setAttribute("class", "cards");
  cards.setAttribute("id", `cards${event}`);
  board.appendChild(cards);

  // board button
  let button1 = document.createElement("button");
  button1.setAttribute("class", "button");
  button1.innerText = "+ add card";
  board.appendChild(button1);
  button1.addEventListener("click", showPopup);
});

// add task screen hiij bgaa heseg
let taskProperties = ["Title", "Description", "Status", "Priority"];
let popUp = document.createElement("div");
popUp.setAttribute("class", "popUp");
root.appendChild(popUp);

const popupHeader = document.createElement("h1");
popupHeader.setAttribute("class", "popUpHeader");
popupHeader.setAttribute("id", "popupHeader");
popupHeader.innerText = "Add Task";
popUp.appendChild(popupHeader);

// popUp -iin div -iig hiij bn
taskProperties.map((event) => {
  if (event == "Title" || event == "Description") {
    // div -iin hiij bn
    let property = document.createElement("div");
    property.setAttribute("class", "property");
    property.setAttribute("id", `${event}`);
    popUp.appendChild(property);

    // label-property dororh contentuudiig hiij bn
    let label = document.createElement("label");
    label.setAttribute("class", "label");
    label.innerText = `${event}`;
    property.appendChild(label);

    // input-property dororh contentuudiig hiij bn
    let input = document.createElement("input");
    input.setAttribute("class", "input");
    input.setAttribute("id", `input${event}`);
    property.appendChild(input);
  } else if (event == "Status") {
    //div-uudiig hiilee
    let property = document.createElement("div");
    property.setAttribute("class", "property");
    property.setAttribute("id", `${event}`);
    popUp.appendChild(property);

    //property dotorhi content-uudiig hiij baigaa
    let label = document.createElement("label");
    label.setAttribute("class", "label");
    label.innerText = `${event}`;
    property.appendChild(label);

    //property dotorhi content-uudiig hiij baigaa
    let input = document.createElement("select");
    input.setAttribute("class", "input");
    input.setAttribute("id", `input${event}`);

    // option1
    let option1 = document.createElement("option");
    option1.value = `To do`;
    option1.innerText = `To do`;
    input.appendChild(option1);

    // option2
    let option2 = document.createElement("option");
    option2.value = `In progress`;
    option2.innerText = `In progress`;
    input.appendChild(option2);

    // option3
    let option3 = document.createElement("option");
    option3.value = `Stuck`;
    option3.innerText = `Stuck`;
    input.appendChild(option3);
    // option4
    let option4 = document.createElement("option");
    option4.value = `Done`;
    option4.innerText = `Done`;
    input.appendChild(option4);
    //
    property.appendChild(input);
  } else if (event == "Priority") {
    //div-uudiig hiilee
    let property = document.createElement("div");
    property.setAttribute("class", "property");
    property.setAttribute("id", `${event}`);
    popUp.appendChild(property);

    //property dotorhi content-uudiig hiij baigaa
    let label = document.createElement("label");
    label.setAttribute("class", "label");
    label.innerText = `${event}`;
    property.appendChild(label);

    let input = document.createElement("select");
    input.setAttribute("class", "input");
    input.setAttribute("id", `input${event}`);

    // op1
    let option1 = document.createElement("option");
    option1.value = "High";
    option1.innerText = `High`;
    input.appendChild(option1);

    // op2
    let option2 = document.createElement("option");
    option2.value = "Medium";
    option2.innerText = `Medium`;
    input.appendChild(option2);

    // op3
    let option3 = document.createElement("option");
    option3.value = "Low";
    option3.innerText = `Low`;
    input.appendChild(option3);
    property.appendChild(input);
  }
});

// poUp button
const popupButton = document.createElement("button");
popupButton.setAttribute("class", "popUpBtn");
popupButton.setAttribute("id", "popupButton");
popupButton.innerText = "Add Task";

// popupButton.setAttribute("click", addTask);
popupButton.addEventListener("click", addTaskButtF);
popUp.appendChild(popupButton);
// alga bolgoh
popUp.style.display = "none";

//add card darhad popUp garchirh
function showPopup() {
  popUp.style.display = "block";
}

function addTaskButtF() {
  let tempObj = {
    id: idNum,
    Title: document.getElementsByClassName("input")[0].value,
    Description: document.getElementsByClassName("input")[1].value,
    Status: document.getElementsByClassName("input")[2].value,
    Priority: document.getElementsByClassName("input")[3].value,
  };

  if (document.getElementsByClassName("input")[3].value == "High") {
    tempObj.PriorNum = 3;
  } else if (document.getElementsByClassName("input")[3].value == "Medium") {
    tempObj.PriorNum = 2;
  } else if (document.getElementsByClassName("input")[3].value == "Low") {
    tempObj.PriorNum = 1;
  }

  // let tempPri = document.getElementsByClassName("input")[3].value;
  taskArr.push(tempObj);
  console.log(taskArr);

  //task-iin input-iig hoosloj baigaaa
  document.getElementsByClassName("input")[0].value = "";
  document.getElementsByClassName("input")[1].value = "";
  document.getElementsByClassName("input")[2].value = "";
  document.getElementsByClassName("input")[3].value = "";

  popUp.style.display = "none";
  idNum++;
  arrangeAndRender;
}
//arrange and render fn:
//  cards dotor card bolhoj hiine
function arrangeAndRender() {
  //shine card nemhiin omno huuchin card-uudiig ustgaj baigaa
  for (let i = 0; i < 4; i++) {
    document.getElementById(`cards${boardsArr[i]}`).innerHTML = "";
  }
  //  tom array-g filterdeed 4 jijig array bolgono
  let todoArr = [];
  for (let i = 0; i < 4; i++) {
    todoArr[i] = taskArr.filter((event) => {
      return event.Status == boardsArr[i];
    });

    todoArr[i].sort((a, b) => {
      return b.PriorNum - a.PriorNum;
    });
  }

  // count number ajiluulj hiij baigaa heseg
  todoArr.map((event, index) => {
    let countNum = document.getElementById(`count${boardsArr[index]}`);
    if (event.length == 0) {
      countNum.innerText = `0`;
    } else {
      countNum.innerText = `${event.length}`;
    }
  });

  //  card-iin div uusgeed
  //  dotor ni content-uudaa hiij ogj baigaa heseg
  //  cards-ruu hiij baigaa
  for (let i = 0; i < 4; i++) {
    todoArr[i].map((event) => {
      let card = document.createElement("div");
      card.setAttribute("class", "card");

      let tick = document.createElement("button");
      tick.innerText = `Done`;
      card.appendChild(tick);

      let head = document.createElement("h3");
      head.innerText = `${event.Title}`;
      card.appendChild(head);

      let desc = document.createElement("p");
      desc.innerText = `${event.Description}`;
      card.appendChild(desc);

      let prio = document.createElement("button");
      prio.innerText = `${event.Priority}`;
      card.appendChild(prio);

      // edit
      let edit = document.createElement("button");
      edit.setAttribute("id", `${event.id}`);
      edit.addEventListener("click", (event) => {
        let id = event.target.id;
        editF(id);
      });
      edit.innerText = `Edit`;
      card.appendChild(edit);

      // delete
      let dele = document.createElement("button");
      dele.innerText = `Delete`;
      dele.setAttribute("id", `${event.id}`);
      dele.addEventListener("click", (event) => {
        let id = event.target.id;
        deleteF(id);
      });
      card.appendChild(dele);

      //zow cards-ruu zow array-iig ni oruulj ogj baigaa heseg
      document.getElementById(`cards${boardsArr[i]}`).appendChild(card);
    });
  }
  document.getElementById("popupButton").innerText = "Add task";
  document.getElementsByClassName("popupHeader").innerText = "Add task";
}
function editF(id) {
  let tempObj = taskArr.filter((event) => {
    return event.id == id;
  });

  for (let i = 0; i < 4; i++) {
    if (i == 0) {
      document.getElementById(`input${taskProperties[i]}`).value =
        tempObj[0].Title;
    } else if (i == 1) {
      document.getElementById(`input${taskProperties[i]}`).value =
        tempObj[0].Description;
    } else if (i == 2) {
      document.getElementById(`input${taskProperties[i]}`).value =
        tempObj[0].Status;
    } else if (i == 3) {
      document.getElementById(`input${taskProperties[i]}`).value =
        tempObj[0].Priority;
    }
  }

  taskArr = taskArr.filter((event) => {
    return event.id != id;
  });
  document.getElementById("popupButton").innerText = "Confirm Edit";
  document.getElementById("popupHeader").innerText = "Edit task";

  showPopup();
}

function deleteF(id) {
  taskArr = taskArr.filter((event) => {
    return event.id != id;
  });
  arrangeAndRender();
}
