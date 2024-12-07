const styleCheckbox = document.querySelector('#divStyle');
const textFields = document.getElementsByClassName('textfield');
const updateBtn = document.getElementById('updateButton');
const outputElement = document.querySelector('.output-div');

function handleInputChange(e) {
    console.log('Event triggered by:', e.target);

    const inputName = e.target.name;
    
    if (inputName === 'content') {
        outputElement.innerHTML = e.target.value;
    }
}

styleCheckbox.addEventListener('change', () => {
    const colorInput = document.getElementById('color');
    outputElement.style.backgroundColor = colorInput.value;
});

Array.from(textFields).forEach(textField => {
    textField.addEventListener('input', handleInputChange);
    textField.addEventListener('blur', handleInputChange);
});

updateBtn.addEventListener('click', () => {
    outputElement.remove();
});

console.log('Elements loaded:', {
    checkbox: styleCheckbox,
    textFields: textFields,
    button: updateBtn,
    outputDiv: outputElement
});
