class Calculator {
    constructor() {
        // Select DOM elements
        this.num1Input = document.getElementById('num1');
        this.num2Input = document.getElementById('num2');
        this.operationSelect = document.getElementById('operation');
        this.calculateBtn = document.getElementById('calculateBtn');
        this.resultDisplay = document.getElementById('result');

        // Bind event listener to calculate button
        this.calculateBtn.addEventListener('click', () => this.compute());
    }

    // Method to add two numbers
    add(num1, num2) {
        return num1 + num2;
    }

    // Method to subtract two numbers
    subtract(num1, num2) {
        return num1 - num2;
    }

    // Method to multiply two numbers
    multiply(num1, num2) {
        return num1 * num2;
    }

    // Method to divide two numbers
    divide(num1, num2) {
        if (num2 === 0) {
            throw new Error('Division by zero is not allowed.');
        }
        return num1 / num2;
    }

    // Main compute method
    compute() {
        try {
            // Parse input values
            const num1 = parseFloat(this.num1Input.value);
            const num2 = parseFloat(this.num2Input.value);
            const operation = this.operationSelect.value;

            if (isNaN(num1) || isNaN(num2)) {
                this.resultDisplay.textContent = 'Invalid input';
                return;
            }

            let result;

            // Perform the selected operation
            switch (operation) {
                case 'add':
                    result = this.add(num1, num2);
                    break;
                case 'subtract':
                    result = this.subtract(num1, num2);
                    break;
                case 'multiply':
                    result = this.multiply(num1, num2);
                    break;
                case 'divide':
                    result = this.divide(num1, num2);
                    break;
                default:
                    result = 'Unknown operation';
            }

            // Display the result
            this.resultDisplay.textContent = result;
        } catch (error) {
            this.resultDisplay.textContent = error.message;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});
