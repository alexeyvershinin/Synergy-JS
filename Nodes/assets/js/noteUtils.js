import { saveNoteToLocalStorage, editNoteData } from './noteStorage.js';
import { hideAboutSection } from './aboutSection.js';
import { handleDeleteButton, handleEditButton } from './noteHandlers.js';

function createElement(tag, classes = [], textContent = '') {
    const element = document.createElement(tag);
    if (classes.length > 0) {
        element.classList.add(...classes);
    }
    element.textContent = textContent;
    return element;
}

function createButton(id, tooltipText, iconClass) {
    const button = createElement('button', ['btn'], '');
    button.setAttribute('type', 'button');
    button.setAttribute('id', id);
    button.setAttribute('data-bs-toggle', 'tooltip');
    button.setAttribute('data-bs-custom-class', 'custom-tooltip');
    button.setAttribute('data-bs-title', tooltipText);
    button.innerHTML = `<i class="${iconClass}"></i>`;
    return button;
}

function createNodeCard(title, content) {
    const colDiv = createElement('div', ['col']);
    const cardDiv = createElement('div', ['card']);
    const cardBodyDiv = createElement('div', ['card-body']);

    const formattedDate = getCurrentDate();

    const noteKey = saveNoteToLocalStorage(title, content, formattedDate);

    cardDiv.setAttribute('id', noteKey);

    const cardTitle = createElement('h5', ['card-title'], title);
    const cardSubtitle = createElement('h6', ['card-subtitle', 'mb-2', 'text-body-secondary'], formattedDate);
    const cardText = createElement('p', ['card-text'], content);

    const buttonContainer = createElement('div', ['d-flex', 'justify-content-end']);

    const deleteButton = createButton('deleteBtn', 'Удалить заметку', 'bi bi-trash3');
    const editButton = createButton('editBtn', 'Редактировать заметку', 'bi bi-pencil-square');
    deleteButton.setAttribute('data-key', noteKey);
    editButton.setAttribute('data-key', noteKey);

    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(editButton);

    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardSubtitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(buttonContainer);

    cardDiv.appendChild(cardBodyDiv);
    colDiv.appendChild(cardDiv);

    hideAboutSection();

    const containerDiv = document.querySelector('.row-cols-4');
    containerDiv.appendChild(colDiv);

    deleteButton.addEventListener('click', handleDeleteButton);
    editButton.addEventListener('click', handleEditButton);
}

function editNodeCard(title, content, noteKey) {
    const noteCard = document.getElementById(noteKey);

    const formattedDate = getCurrentDate();

    const cardTitle = noteCard.querySelector('.card-title');
    const cardSubtitle = noteCard.querySelector('.card-subtitle');
    const cardContext = noteCard.querySelector('.card-text');

    cardTitle.textContent = title;
    cardSubtitle.textContent = formattedDate;
    cardContext.textContent = content;

    editNoteData(noteKey, title, content, formattedDate);
}

function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().split('T')[0];
}

export { createNodeCard, editNodeCard };