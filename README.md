# JavaScript Number Guessing Game 🎮

A logic-driven console game that challenges users to guess a randomly generated number within a specific range. This project was built to practice complex control flow and user input sanitization in Vanilla JavaScript.



## 🧠 Key Features
- **Dynamic Range:** Easily adjustable `min` and `max` constants.
- **Input Sanitization:** Uses `isNaN()` to catch non-numeric entries and prevents invalid guesses outside the specified range.
- **Attempt Tracking:** Keeps a running tally of user guesses to provide a final score.
- **Graceful Exit:** Handles "Cancel" inputs to break the loop without crashing the browser.

## 🛠️ Technical Concepts Used
- **While Loops:** To maintain the game state until a "win" or "exit" condition is met.
- **Math Object:** Utilizing `Math.random()` and `Math.floor()` for precise integer generation.
- **Conditional Logic:** Nested `if/else` statements for providing real-time feedback (Too High/Too Low).
- **Type Conversion:** Handling the transition from String (prompt) to Number for mathematical comparison.

## 📂 How to Play
1. Clone the repository.
2. Open the `index.html` file in your browser.
3. Follow the pop-up prompts to guess the number!

---
*This project is part of a series of logic exercises focused on mastering JavaScript fundamentals for future GSoC and Open Source contributions.*
