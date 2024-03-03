function setupEditModal(data, noteKey) {
    const modal = document.getElementById('editNoteModal');
    const titleEdit = document.getElementById('titleEdit');
    const contentEdit = document.getElementById('contentEdit');

    titleEdit.value = data.title;
    contentEdit.value = data.content;

    modal.setAttribute('data-key', noteKey);
}

export { setupEditModal };