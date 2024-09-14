let results = [];
let result;

// Create the initial table with headers similar to the example
document.write("<table>");
document.write("<tr><th>x</th><th>operator</th><th>y</th><th>result</th></tr>");

// Function to prompt for input and perform calculations
while (true) {
    let x = prompt("Enter the first number (or Cancel to exit):");
    if (x === null) break;
    let y = prompt("Enter the second number:");
    if (y === null) break;
    let operator = prompt("Enter an operator (+, -, *, /, %):");
    if (operator === null) break;

    x = parseFloat(x);
    y = parseFloat(y);

    // Check for invalid input
    if (isNaN(x) || isNaN(y)) {
        result = "Error: Invalid number";
    } else {
        switch (operator) {
            case "+":
                result = x + y;
                break;
            case "-":
                result = x - y;
                break;
            case "*":
                result = x * y;
                break;
            case "/":
                result = y !== 0 ? x / y : "Error: Division by zero";
                break;
            case "%":
                result = x % y;
                break;
            default:
                result = "Error: Invalid operator";
        }
    }

    // Store valid results for summary later
    if (typeof result === "number") {
        results.push(result);
    }

    // Add a row to the table, applying the operator-specific background only to the data cells under 'Operator'
    document.write(`<tr><td>${x}</td><td class="operator-data">${operator}</td><td>${y}</td><td>${result}</td></tr>`);
}

// Close the first table after all calculations are done
document.write("</table>");

// Calculate summary statistics (min, max, total, average) if there are valid results
if (results.length > 0) {
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((a, b) => a + b, 0);
    let avg = total / results.length;

    // Create the summary table similar to the example
    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write(`<tr><td>${min}</td><td>${max}</td><td>${avg.toFixed(2)}</td><td>${total}</td></tr>`);
    document.write("</table>");
}
