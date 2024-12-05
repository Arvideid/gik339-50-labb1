// 1. Checkbox - using querySelector
const styleCheckbox = document.querySelector('#divStyle');

// 2. Text fields - using getElementsByClassName
const textFields = document.getElementsByClassName('textfield');

// 3. Button - using getElementById
const updateBtn = document.getElementById('updateButton');

// 4. Output div - using querySelector with class
const outputElement = document.querySelector('.output-div');

// Verify that all elements are correctly selected
console.log('Elements loaded:', {
    checkbox: styleCheckbox,
    textFields: textFields,
    button: updateBtn,
    outputDiv: outputElement
});
