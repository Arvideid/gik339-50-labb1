// 1. Checkbox - using querySelector
const styleCheckbox = document.querySelector('#divStyle');

// 2. Text fields - using getElementsByClassName
const textFields = document.getElementsByClassName('textfield');

// 3. Button - using getElementById
const updateBtn = document.getElementById('updateButton');

// 4. Output div - using querySelector with class
const outputElement = document.querySelector('.output-div');

// Function declaration for input field event listener (Task 5)
function handleInputChange(e) {
    // Log the target element that triggered the event
    console.log('Event triggered by:', e.target);
    
    // Get the name attribute of the input field
    const inputName = e.target.name;
    
    // If the input field is the content field, update the div
    if (inputName === 'content') {
        outputElement.innerHTML = e.target.value;
    }
}

// Task 6 - Add event listeners

// 1. Checkbox event listener
styleCheckbox.addEventListener('change', () => {
    // Get the color value from the color input field
    const colorInput = document.getElementById('color');
    // Update the div's background color
    outputElement.style.backgroundColor = colorInput.value;
});

// 2. Text fields event listeners
// Convert HTMLCollection to Array to use forEach
Array.from(textFields).forEach(textField => {
    textField.addEventListener('input', handleInputChange);
    textField.addEventListener('blur', handleInputChange);
});

// 3. Button event listener
updateBtn.addEventListener('click', () => {
    // Remove the output div from its parent
    outputElement.remove();
});

// Verify that all elements are correctly selected
console.log('Elements loaded:', {
    checkbox: styleCheckbox,
    textFields: textFields,
    button: updateBtn,
    outputDiv: outputElement
});
