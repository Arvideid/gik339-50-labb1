// Get DOM elements
const colorInput = document.getElementById('color');
const colorText = document.getElementById('colorText');
const contentInput = document.getElementById('content');
const addBtn = document.getElementById('addButton');
const updateBtn = document.getElementById('updateButton');
const updateStyleBtn = document.getElementById('updateStyleButton');
const outputContainer = document.getElementById('outputContainer');

// Array to store output divs
let outputDivs = [];

// Update color text input when color picker changes
colorInput.addEventListener('input', (e) => {
    colorText.value = e.target.value;
});

// Update color picker when text input changes
colorText.addEventListener('input', (e) => {
    try {
        // Create a temporary div to test if the color is valid
        const temp = document.createElement('div');
        temp.style.backgroundColor = e.target.value;
        
        // If the color is valid, update the color picker
        if (temp.style.backgroundColor) {
            // Try to convert the color to hex format for the color picker
            const canvas = document.createElement('canvas');
            canvas.width = canvas.height = 1;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = e.target.value;
            ctx.fillRect(0, 0, 1, 1);
            const hexColor = ctx.fillStyle;
            
            // Only update the color picker if it's a valid hex color
            if (hexColor.match(/^#[0-9A-Fa-f]{6}$/)) {
                colorInput.value = hexColor;
            }
        }
    } catch (error) {
        // If there's an error, we don't update the color picker
        console.log('Invalid color value');
    }
});

// Set initial color text
colorText.value = colorInput.value;

// Function to create new output div
function createOutputDiv(color, content) {
    const div = document.createElement('div');
    div.className = 'output-div mb-3';
    div.innerHTML = content;
    div.style.backgroundColor = color;
    return div;
}

// Add Div button event listener
addBtn.addEventListener('click', () => {
    const color = colorText.value; // Use text input value instead of color picker
    const content = contentInput.value;
    const newDiv = createOutputDiv(color, content);
    outputContainer.appendChild(newDiv);
    outputDivs.push(newDiv);
});

// Remove Div button event listener
updateBtn.addEventListener('click', () => {
    if (outputDivs.length > 0) {
        const lastDiv = outputDivs.pop();
        lastDiv.remove();
    }
});

// Update Style button event listener
updateStyleBtn.addEventListener('click', () => {
    if (outputDivs.length > 0) {
        const lastDiv = outputDivs[outputDivs.length - 1];
        lastDiv.style.backgroundColor = colorText.value; // Use text input value
        lastDiv.innerHTML = contentInput.value;
    }
});

// Initialize with empty array
outputDivs = [];
