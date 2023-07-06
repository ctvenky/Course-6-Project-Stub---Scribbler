function openModal(modalId) {
  var modal = document.getElementById(modalId + "Modal");
  modal.style.display = "block";
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId + "Modal");
  modal.style.display = "none";
}

function switchModal(currentModalId, targetModalId) {
  closeModal(currentModalId);
  openModal(targetModalId);
}
