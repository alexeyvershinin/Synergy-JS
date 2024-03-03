const contentSection = document.getElementById('content');

function createH1Element(parentElement, text) {
    const h1Div = document.createElement('div');
    const h1Element = document.createElement('h1');

    h1Element.innerText = text;

    parentElement.append(h1Div);
    h1Div.append(h1Element);
}

function createOlElement(parentElement) {
    const olDiv = document.createElement('div');
    const olElement = document.createElement('ol');

    const employees = createEmployeeArray();

    for (const employee of employees) {
        const liElement = document.createElement('li');
        liElement.innerText = `${employee.firstName} ${employee.lastName}`;
        olElement.append(liElement);
    }

    parentElement.append(olDiv);
    olDiv.append(olElement);
}

function createEmployeeArray() {
    const employees = [
        { firstName: 'Иван', lastName: 'Иванов' },
        { firstName: 'Петр', lastName: 'Петров' },
        { firstName: 'Анна', lastName: 'Сидорова' },
        { firstName: 'Мария', lastName: 'Козлова' },
        { firstName: 'Александр', lastName: 'Смирнов' },
        { firstName: 'Елена', lastName: 'Морозова' }
    ];

    return employees;
}

function createSquareDiv(parentElement, size, color) {
    const squareDiv = document.createElement('div');
    
    setSquareDivStyle(squareDiv, size, color);

    squareDiv.addEventListener('click', function() {
        squareDiv.classList.toggle('circle');
    })

    parentElement.append(squareDiv);
}

function setSquareDivStyle(squareDiv, size, color) {
    squareDiv.style.width = size + 'px';
    squareDiv.style.height = size + 'px';
    squareDiv.style.backgroundColor = color;

    squareDiv.classList.add('square');
}

function createCalculatorObject() {
    const calculator = {
        add: function(a, b) {
            return a + b;
        },
        subtract: function(a, b) {
            return a - b;
        },
        multiply: function(a, b) {
            return a * b;
        },
        divide: function(a, b) {
            if (b === 0) {
                return "На ноль делить нельзя";
            }
            return a / b;
        }
    };
    
    console.log(calculator.add(5, 3));
    console.log(calculator.subtract(10, 4));
    console.log(calculator.multiply(2, 6));
    console.log(calculator.divide(8, 2));
    console.log(calculator.divide(6, 0));
    
}

function createInputDiv(parentElement) {
    const inputDiv = document.createElement('div');
    const input = document.createElement('input');
    const saveButton = document.createElement('button');

    saveButton.innerText = 'Сохранить';

    setInputDivStyle(inputDiv, input, saveButton);

    saveButton.addEventListener('click', function() {
        const inputValue = input.value.trim();

        if (inputValue.length > 0) {
            localStorage.setItem('Text', inputValue);

            setTimeout(function() {
                console.log(localStorage.getItem('Text'));
            }, 2000);
        }
    })

    parentElement.append(inputDiv);
    inputDiv.append(input, saveButton);
}

function setInputDivStyle(inputDiv, input, saveButton) {
    inputDiv.style.marginTop = '20px';
    input.style.borderWidth = '3px'
    saveButton.style.borderWidth = '3px'
    saveButton.style.marginLeft = '10px';
}

function init() {
    createH1Element(contentSection, 'Hello World !');
    createOlElement(contentSection);
    createSquareDiv(contentSection, 50, 'red');
    createCalculatorObject();
    createInputDiv(contentSection);
}

init();