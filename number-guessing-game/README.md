# Number Guessing Game with Leaderboard

## Objective
Create an interactive number guessing game that integrates JavaScript concepts and utilizes HTML and CSS for layout and styling.

---

## Features

### 1. Game Logic
- Generate a random number between 1 and 100 when the page loads.
- Allow users to guess the number through a text input field and a "Submit Guess" button.
- Provide feedback based on the guess:
  - "Too High" or "Too Low" for incorrect guesses.
  - "Correct! You guessed the number!" for a correct guess.

### 2. Attempts Tracker
- Track and display the number of attempts dynamically on the page.

### 3. Leaderboard
- Store the last three results (player name and attempts) in an array.
- Dynamically display the leaderboard in a table format.

### 4. Reset Functionality
- Include a "Reset Game" button to restart the game without refreshing the page.

---

## Page Structure

### 1. Header
- Title: "Number Guessing Game"

### 2. Game Section
- Input field for guessing the number.
- Button to submit the guess.
- Feedback area for results: "Too High," "Too Low," or "Correct."

### 3. Attempts Tracker Section
- Display the number of attempts taken.

### 4. Leaderboard Section
- A table showing the last three players' names and their attempt counts.

### 5. Reset Button
- Button to reset the game.

---

## Styling Requirements (CSS)
- Consistent color scheme.
- Borders, padding, and margins for layout.
- Styled table for an appealing leaderboard.
- Hover effects on buttons.

---

## JavaScript Requirements
1. Use variables and data types to manage the game's state.
2. Compare the guessed number with the random number using operators.
3. Prompt the player for their name at the start of the game.
4. Use alerts to congratulate the player for correct guesses.
5. Implement functions for:
   - Initializing the game.
   - Checking the user's guess.
   - Updating the leaderboard.
6. Use `onclick` events for button actions.
7. Dynamically update content using `document.getElementById`.
8. Store leaderboard data in arrays.
9. Use loops to update the leaderboard table.

---

## Useful Hints
- Generate random numbers using:
  ```javascript
  Math.floor(Math.random() * 100) + 1
  ```
- Attach event listeners programmatically:
  ```javascript
  document.getElementById("button-id").addEventListener("click", functionName);
  ```
- Add new elements to the DOM dynamically:
  ```javascript
  document.createElement("element");
  ```

---

## Submission Guidelines
- Submit the HTML, CSS, and JavaScript files in a zipped folder.
- Ensure the code is clean, well-organized, and commented.

---

## Estimated Duration
1 to 1.5 hours. This task is designed to challenge students while being achievable within the time frame.

