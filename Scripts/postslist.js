// Get the trash icons
const trashIcons = document.querySelectorAll('.delete-icon');

// Get the delete buttons in the modal
const deleteYesBtn = document.getElementById('deleteYesBtn');
const deleteNoBtn = document.getElementById('deleteNoBtn');

// Hide the delete modal by default
const deleteModal = document.getElementById('deleteModal');
deleteModal.style.display = 'none';

// Add click event listeners to the trash icons
trashIcons.forEach((trashIcon) => {
  trashIcon.addEventListener('click', () => {
    const modal = trashIcon.closest('.post-card').querySelector('.deleteModal');
    if (deleteModal) {
      deleteModal.style.display = 'block';
    }
  });
});

// Add click event listener to the No button
deleteNoBtn.addEventListener('click', () => {
  const modal = deleteNoBtn.closest('.modal');
  if (modal) {
    modal.style.display = 'none';
  }
});

// Add click event listener to the Yes button
deleteYesBtn.addEventListener('click', () => {
  const modal = deleteYesBtn.closest('.deleteModal');
  const postCard = deleteYesBtn.closest('.post-card');

  // Delete the post (you need to implement this logic)
  postCard.remove();

  // Hide the modal
  if (modal) {
    modal.style.display = 'none';
  }
});
