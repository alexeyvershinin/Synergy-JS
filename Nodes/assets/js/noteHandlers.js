import { showModal } from './noteManager.js';
import { deleteNoteFromStorage, getNoteData } from './noteStorage.js';
import { setupEditModal } from './editModal.js';

function handleDeleteButton() {
    if (confirm('Вы действительно хотите удалить заметку?')) {
        const noteKey = this.getAttribute('data-key');
        const cardToRemove = document.getElementById(noteKey);

        cardToRemove.classList.add('deleteAnimation');

        cardToRemove.addEventListener('animationend', function () {
            cardToRemove.parentNode.remove();
        });

        deleteNoteFromStorage(noteKey);
    }
}

function handleEditButton() {
    showModal('#editNoteModal');

    const noteKey = this.getAttribute('data-key');
    const data = getNoteData(noteKey);

    setupEditModal(data, noteKey);
}

export { handleDeleteButton, handleEditButton };