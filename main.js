console.log("does this work");
const students = [
  {
    id: 1,
    name: "Harry Potter",
    house: "Gryffindor"
  }
];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const sortStartBtn = document.querySelector("#sortStart");
sortStartBtn.addEventListener('click', () => {
  console.log("this works");
  const form = document.querySelector("#form");
  form.innerHTML += `<form>
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="studentName">
    </div>
    </div>
    <button type="submit" class="btn btn-primary" id="sortMe">Sort Me!</button>
  </form>`
}); 

const cardsOnDom = (array) => {
  let domString = "";
  for (const student of array) {
    domString += `<div class="card" style="width: 18rem;" id="studentCard">
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">${student.house}</p>
      <button class="btn btn-primary" id="expel--${student.id}">Expel</button>
    </div>
  </div>`;
  }
  renderToDom("#hogwartsCard", domString);
};

//const formShow = document.querySelector("#form");
const createStudent = (e) => {
  e.preventDefault();
  
  const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
  
  const newStudentObj = {
    id: students.length + 1,
    name: document.querySelector("#studentName").value,
    house: houses[Math.floor(Math.random() * houses.length)]
  }

  students.push(newStudentObj);
  cardsOnDom(students);
  // form.reset();   This line is not working
};

form.addEventListener('submit', createStudent);

const expelBtn = document.querySelector("#hogwartsCard");

expelBtn.addEventListener('click', (e) => {
  console.log("this clicks")

  if (e.target.id.includes("expel")) {
    const [, id] = e.target.id.split("--");
    const index = students.findIndex(e => e.id === Number(id));
    students.splice(index, 1); 
    cardsOnDom(students);
  }
});

const startApp = () => {
  cardsOnDom(students);
}

startApp();
