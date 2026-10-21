const dialog = document.querySelector("dialog");
const closeButton = dialog.querySelector(".close-modal");
// const closeButton = dialog.querySelector("button:last-of-type");
const subscribeButton = document.querySelector(".cta-subscribe");
const openModalButton = document.getElementById("open-modal");

closeButton.addEventListener("click", () => {
  dialog.close();
});

openModalButton.addEventListener("click", () => {
  dialog.showModal();
});

subscribeButton.addEventListener("click", () => {
  alert("You're now subscribed to our yearly newsletter!");
});

// Close the modal when clicking outside of it
dialog.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  const isInDialog =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;
  if (!isInDialog) {
    dialog.close();
  }
});
