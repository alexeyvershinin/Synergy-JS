import { createNodeCard, editNodeCard } from "./noteUtils.js";
import { loadNotesFromLocalStorage } from "./noteStorage.js";


document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltips = Array.from(tooltipTriggerList).map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    const showModalLink = document.getElementById('showModalLink');
    const addNoteModal = $('#addNoteModal');
    const submitAddNoteForm = document.getElementById('submitAddNoteForm');
    const submitEditNoteForm = document.getElementById('submitEditNoteForm');

    showModalLink.addEventListener('click', handleShowModal);
    addNoteModal.on('hidden.bs.modal', handleHideModal);
    submitAddNoteForm.addEventListener('click', handleSubmitAddNote);
    submitEditNoteForm.addEventListener('click', handleSubmitEditNote);

    loadNotesFromLocalStorage();
});

function handleShowModal(event) {
    event.preventDefault();
    showModal(`#addNoteModal`);
}

function handleHideModal() {
    const titleInput = document.getElementById('titleInput');
    const contentInput = document.getElementById('contentInput');

    titleInput.value = '';
    contentInput.value = '';
}

function handleSubmitAddNote(event) {
    console.log(true)
    const title = document.getElementById('titleInput').value.trim();
    const content = document.getElementById('contentInput').value.trim();

    if (title.length > 0 && content.length > 0) {
        event.preventDefault()
        $('#addNoteModal').modal('hide');
        createNodeCard(title, content);
    }
}

function handleSubmitEditNote() {
    const modal = document.getElementById('editNoteModal');
    const noteKey = modal.getAttribute('data-key');
    
    const title = document.getElementById('titleEdit').value.trim();
    const content = document.getElementById('contentEdit').value.trim();

    if (title.length > 0 && content.length > 0) {
        event.preventDefault()
        $('#editNoteModal').modal('hide');
        editNodeCard(title, content, noteKey);
    }
}

function showModal(id) {
    $(`${id}`).modal('show');
}

export { showModal };
