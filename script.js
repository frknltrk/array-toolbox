function calculateLength() {
    const input = document.getElementById('arrayInput').value;
    
    // Replace single quotes with double quotes, and parentheses with square brackets
    const correctedInput = input.replace(/'/g, "\"").replace(/\(/g, "[").replace(/\)/g, "]");

    try {
        const array = JSON.parse(correctedInput);
        const length = len(array);
        displayResult(length);
    } catch (error) {
        displayResult("Invalid array format. Please use proper JSON format.");
    }
}

function getElementByIndex() {
    const input = document.getElementById('arrayInput').value;
    const index = parseInt(prompt("Enter the index:"));

    // Replace single quotes with double quotes, and parentheses with square brackets
    const correctedInput = input.replace(/'/g, "\"").replace(/\(/g, "[").replace(/\)/g, "]");

    try {
        const array = JSON.parse(correctedInput);
        const element = getByIndex(array, index);
        displayResult(element);
    } catch (error) {
        displayResult("Invalid array format. Please use proper JSON format.");
    }
}

function len(array) {
    return array.length;
}

function getByIndex(array, index) {
    if (index < 0 || index >= array.length) {
        return "Index out of range";
    }
    return array[index];
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Result: ${result}`;
}
