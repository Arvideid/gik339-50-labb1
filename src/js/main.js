// Hämtar element med olika DOM-metoder
const styleCheckbox = document.querySelector('#divStyle');        // Flexibel CSS-selektor metod
const textFields = document.getElementsByClassName('textfield');  // Hämtar kollektion av element
const updateBtn = document.getElementById('updateButton');        // Snabbaste metoden för ID
const outputElement = document.querySelector('.output-div');      // Konsekvent med checkbox-metoden

// Funktion som hanterar ändringar i textfält och uppdaterar output
function handleInputChange(e) {
    console.log('Event triggered by:', e.target);    // Loggar vilket element som triggade eventet
    console.log('Input name:', e.target.name);       // Loggar elementets name-attribut

    const inputName = e.target.name;
    
    // Uppdaterar innehållet endast om content-fältet ändras
    if (inputName === 'content') {
        outputElement.innerHTML = e.target.value;
    }
}

// Ändrar bakgrundsfärg när checkbox klickas
styleCheckbox.addEventListener('change', () => {
    const colorInput = document.getElementById('color');  // Hämtar färgfältet
    outputElement.style.backgroundColor = colorInput.value;
});

// Lägger till både input och blur event på textfälten
Array.from(textFields).forEach(textField => {
    textField.addEventListener('input', handleInputChange);  // När användaren skriver
    textField.addEventListener('blur', handleInputChange);   // När fältet lämnas
});

// Tar bort output-diven när knappen klickas
updateBtn.addEventListener('click', () => {
    outputElement.remove();
});

// Loggar alla element för felsökning
console.log('Elements loaded:', {
    checkbox: styleCheckbox,
    textFields: textFields,
    button: updateBtn,
    outputDiv: outputElement
});
