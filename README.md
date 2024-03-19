## React Calculator App

This is a basic calculator application built with React. It allows users to perform basic arithmetic operations (+, -, *, /) using a button interface.

### Features

* Enter numbers using number buttons (0-9)
* Perform basic arithmetic operations (+, -, *, /)
* Clear the display (C button)
* Evaluate expressions and display the result (= button)

### Getting Started

1. Clone the repository:

```bash
git clone https://github.com/bustlezach/calculator-app.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm start
```

This will start the development server and open the app in your web browser at `http://localhost:3000` (or the port specified in `package.json`).

### Code Explanation

The application consists of three main React components:

* `Calculator`: This component manages the state of the calculator and handles user interactions. It uses the `useState` hook to store the current number, total value, operator, and a flag indicating if the current input is the first number.
* `CalButton`: This component represents a single button on the calculator. It takes props for the button value, a className (optional), and an onClick handler.
* `App`: This is the main application component that renders the `Calculator` component.

The `Calculator` component handles various functions:

* `handleNumber`: Updates the current number displayed on the screen when a number button is clicked.
* `renderCalc`: Retrieves the current number for display.
* `doCalculation`: Performs the calculation based on the current operator and total value.
* `handleOperator`: Handles operator button clicks. It evaluates the current expression using `doCalculation`, updates the total and current number, and sets the operator for the next calculation.
* `handleClear`: Clears the calculator display and resets the state.
* `handleEquals`: Evaluates the final expression and displays the result.

The `CalButton` component is a reusable component that renders a button with the provided value and class name. It calls the provided onClick handler when clicked.

### Customization

You can customize the application by:

* Adding additional buttons for advanced functions (e.g., %, square root).
* Implementing functionality for handling decimals.
* Changing the visual design of the calculator using CSS.

This is a basic example of a React calculator application. You can extend it with more features and functionalities to create a more comprehensive calculator.
