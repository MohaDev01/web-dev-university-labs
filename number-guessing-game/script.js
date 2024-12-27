/* Generate a random number between 1 and 100*/
let randomNum = Math.floor(Math.random()*100) + 1;
let attempts = 0;
let leaderboard = [];
/* Comparing the guessed number with the randomly
 generated number and provide feedback*/
function submitFunc () {
  let userGuess = document.getElementById('guess');
  let feedback = document.getElementById('feedback');
  let numOfAttempts = document.getElementById('numOfAttempts');
  console.log(Number(userGuess.value) === randomNum);
  console.log("Random Num: " + randomNum);

  if(Number(userGuess.value) === randomNum) {
    attempts += 1;
    alert("Correct! You guessed the number :D");
    let name = prompt("Enter your name: ");

    leaderboard.push({name: name, attempts: attempts});
    addToTable();
    attempts = 0;
    randomNum = Math.floor(Math.random()*100) + 1;
  } else if (Number(userGuess.value) > randomNum) {
    attempts += 1;
    feedback.textContent = 'Too High';
    console.log(feedback);
  } else {
    attempts += 1;
    feedback.textContent = 'Too Low';
    console.log(feedback);
  }

  console.log("Actual Number of Attempts: " + attempts);
  console.log("Num of Attempts: " + numOfAttempts);
  numOfAttempts.innerText = attempts;
  console.log(leaderboard);
}

/* Attempts Tracker */

/* Leaderboard */
function addToTable() {
  let tableRef = document.getElementById('tableBody');
  tableRef.innerHTML = '';

  leaderboard.forEach(user => {
    let row = document.createElement('tr');

    let nameCell = document.createElement('td');
    let attemptsCell = document.createElement('td');

    nameCell.textContent = user.name;
    attemptsCell.textContent = user.attempts;

    row.appendChild(nameCell);
    row.appendChild(attemptsCell);

    tableRef.appendChild(row);
  })
}

/* Reset */
function resetFunc () {
  randomNum = Math.floor(Math.random()*100) + 1;
  attempts = 0;
  leaderboard = [];

  let feedback = document.getElementById('feedback');
  feedback.innerText = '';

  let tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';

  let numOfAttempts = document.getElementById('numOfAttempts');
  numOfAttempts.innerText = '';

  alert("Game Reset!");
}