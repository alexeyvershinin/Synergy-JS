import { createNodeCard, } from './noteUtils.js';
import { showAboutSection } from './aboutSection.js';

function saveNoteToLocalStorage(title, content, date) {
    const notes = JSON.parse(localStorage.getItem('notes')) || {};

    const existingNote = Object.entries(notes).find(([key, note]) => note.title === title && note.content === content && note.date === date);
    if (existingNote) {
        return existingNote[0];
    }

    const noteId = generateUniqueId();

    const newNote = {
        title: title,
        content: content,
        date: date
    };

    notes[noteId] = newNote;

    localStorage.setItem('notes', JSON.stringify(notes));

    return noteId;
}

function loadNotesFromLocalStorage() {
    const notes = JSON.parse(localStorage.getItem('notes')) || {};

    for (const noteKey in notes) {
        if (notes.hasOwnProperty(noteKey)) {
            const note = notes[noteKey];
            createNodeCard(note.title, note.content);
        }
    }
}

function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function deleteNoteFromStorage(noteKey) {
    const notes = JSON.parse(localStorage.getItem('notes')) || {};

    delete notes[noteKey];
    localStorage.setItem('notes', JSON.stringify(notes));

    if (isLocalStorageEmpty()) {
        showAboutSection();
    }
}

function isLocalStorageEmpty() {
    const notes = JSON.parse(localStorage.getItem('notes')) || {};
    return Object.keys(notes).length === 0;
}

function getNoteData(noteKey) {
    const notes = JSON.parse(localStorage.getItem('notes')) || {};
    return notes[noteKey];
}

function editNoteData(noteKey, title, content, formattedDate) {
    const notes = JSON.parse(localStorage.getItem('notes')) || {};

    if (notes.hasOwnProperty(noteKey)) {
        notes[noteKey] = {
            title: title,
            content: content,
            date: formattedDate
        };

        localStorage.setItem('notes', JSON.stringify(notes));
    }
}

export { saveNoteToLocalStorage, loadNotesFromLocalStorage, deleteNoteFromStorage, getNoteData, editNoteData };