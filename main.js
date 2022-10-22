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
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">${student.house}</p>
      <a href="#" class="btn btn-primary" id="expel--${student.id}">Expel</a>
    </div>
  </div>`;
  }
  renderToDom("#studentCard", domString);
};


const startApp = () => {
  cardsOnDom(students);
}

startApp();

