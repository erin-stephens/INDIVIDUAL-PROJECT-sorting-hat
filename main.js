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
  form.innerHTML += `<form id="studentForm">
    <div class="mb-3">
      <label for="name" class="form-label"></label>
      <input type="text" class="form-control" id="studentName" placeholder="Your Name" required>
    </div>
    </div>
    <button type="submit" class="btn btn-primary" id="sortMe">Sort Me!</button>
  </form>`;
  sortStartBtn.remove("#sortingHat");
}); 

 const cardsOnDom = (array) => {
  let domString = ""; 
  for (const student of array) {
    domString += `<div class="card ${student.house}" style="width: 18rem;" id="studentCard">
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">${student.house}</p>
      <button class="btn btn-light" id="expel--${student.id}">Expel</button>
    </div>
  </div>`;
  }
  renderToDom("#hogwartsCard", domString);
};


const createStudent = (e) => {
  e.preventDefault();
 
  const createId = (array) => {
    if (array.length) {
      const idArray = [];
      for (const el of array) {
        idArray.push(el.id);
      }
      return Math.max(...idArray) + 1;
    } else {
      return 0;
    }
  }
  
  const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
  
  const newStudentObj = {
    id: createId(students),
    name: document.querySelector("#studentName").value,
    house: houses[Math.floor(Math.random() * houses.length)]
  }

  students.push(newStudentObj);
  console.log(students);
  students.sort((a, b) => a.name.localeCompare(b.name));
  cardsOnDom(students);
  studentForm.reset();  
};


form.addEventListener('submit', createStudent);

const cardsOnVol = (array) => {
  let domString = "";
  for (const removed of array) {
    domString += `<div class="card" style="width: 18rem;" id="voldemortCard">
    <img src="https://qph.cf2.quoracdn.net/main-qimg-5368047526091638b47abdb26002482e-lq" class="card-img-top" alt="Voldemort's Army">
    <div class="card-body">
      <h5 class="card-title">${removed.name}</h5>
    </div>
  </div>`;
  }
  renderToDom("#voldemortCard", domString);
};

const volStudent = [];

const expelBtn = document.querySelector("#hogwartsCard");

expelBtn.addEventListener('click', (e) => {
  console.log("this clicks")


  if (e.target.id.includes("expel")) {
    const [, id] = e.target.id.split("--");
    const index = students.findIndex(e => e.id === Number(id));
    const removed = students.splice(index, 1); 
    console.log(removed);
    volStudent.push(removed[0]);
    cardsOnDom(students);
    cardsOnVol(volStudent);
  }
});

const filter = (array, houseType) => {
  const houseArray = [];
  for (const house of array) {
    if (house.house === houseType) {
      houseArray.push(house);
    }
  }
  return houseArray;
}

const showAllBtn = document.querySelector("#allStudentsBtn");
const showGryffindorBtn = document.querySelector("#gryffindorBtn");
const showSlytherinBtn = document.querySelector("#slytherinBtn");
const showHufflepuffBtn = document.querySelector("#hufflepuffBtn");
const showRavenclawBtn = document.querySelector("#ravenclawBtn");

showAllBtn.addEventListener('click', () => {
  console.log("this button clicks");
  cardsOnDom(students);
}); 

showGryffindorBtn.addEventListener('click', () => {
  console.log("this button clicks");
  const houseType = filter(students, 'Gryffindor');
  cardsOnDom(houseType);
});

showSlytherinBtn.addEventListener('click', () => {
  console.log("this button clicks");
  const houseType = filter(students, 'Slytherin');
  cardsOnDom(houseType);
});

showHufflepuffBtn.addEventListener('click', () => {
  console.log("this button clicks");
  const houseType = filter(students, 'Hufflepuff');
  cardsOnDom(houseType);
});

showRavenclawBtn.addEventListener('click', () => {
  console.log("this button clicks");
  const houseType = filter(students, 'Ravenclaw');
  cardsOnDom(houseType);
});

const startApp = () => {
  cardsOnDom(students);
}

startApp();
