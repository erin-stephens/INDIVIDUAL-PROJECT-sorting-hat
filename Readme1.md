# The Sorting Hat  [![Netlify Status](https://api.netlify.com/api/v1/badges/58bf9006-8dbd-467f-8440-6a24f674e22d/deploy-status)](https://app.netlify.com/sites/stephens-sortinghat/deploys)
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges DONE-->

I have created an app that will sort you and your friends into your Hogwarts houses. You can also expel students who have joined the ranks of Voldemort. 

[View App](https://stephens-sortinghat.netlify.app/)

## Get Started <!-- OPTIONAL, but doesn't hurt -->


## About the User <!-- This is a scaled down user persona -->
 - The ideal user for this application is a Potterhead. 
 - Users are able to feel like the Sorting Hat is real due to the random generation. 

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- A new student is added to the array through the form feature. 
- Students are sorted into houses with correspoding colors. 
- Students can be expelled into a new array. 

## Video Walkthrough of APP NAME <!-- A loom link is sufficient -->
 

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](#https://stephens-sortinghat.netlify.app/)
- [Google Slides Planner](#https://docs.google.com/presentation/d/1ruwTlWLLmZFmCzm6r2bA0mFT_iTkWXhg_RGopDgENcM/edit?usp=sharing)

## Code Snippet <!-- OPTIONAL, but doesn't hurt -->
const createStudent = (e) => {
  e.preventDefault();
  
  const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
  
  const newStudentObj = {
    id: students.length + 1,
    name: document.querySelector("#studentName").value,
    house: houses[Math.floor(Math.random() * houses.length)]
  }

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
<img width="1148" alt="screenshot of sorting" src="images/Screen Shot 2022-10-28 at 9.08.45 PM.png">
<img width="1148" alt="sorted cards" src="images/Screen Shot 2022-10-28 at 9.09.21 PM.png">

## Contributors
- Erin Stephens (https://github.com/erin-stephens)
