// Hämta DOM-element som vi behöver använda
const styleCheckbox = document.querySelector('#divStyle');
const textFields = document.getElementsByClassName('textfield');
const updateBtn = document.getElementById('updateButton');
const outputElement = document.getElementsByClassName('output-div')[0];

// Hantera ändringar i textfälten
function handleInputChange(e) {
    console.log('Event triggered by:', e.target);
    console.log('Input name:', e.target.name);

    const inputName = e.target.name;
    
    // Uppdatera output-divens innehåll när innehållsfältet ändras
    if (inputName === 'content') {
        outputElement.innerHTML = e.target.value;
    }
}

// Lyssna efter ändringar på style-checkboxen
styleCheckbox.addEventListener('change', () => {
    const colorInput = document.getElementById('color');
    outputElement.style.backgroundColor = colorInput.value;
});

// Lägg till event listeners på alla textfält
Array.from(textFields).forEach(textField => {
    textField.addEventListener('input', handleInputChange);
    textField.addEventListener('blur', handleInputChange);
});

// Lyssna efter klick på uppdateringsknappen
updateBtn.addEventListener('click', () => {
    outputElement.remove();
});

// Logga alla viktiga element för felsökning
console.log('Elements loaded:', {
    checkbox: styleCheckbox,
    textFields: textFields,
    button: updateBtn,
    outputDiv: outputElement
});
