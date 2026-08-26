const toggleBtn = document.querySelector(".info-toggle");
const infoPanel = document.getElementById("product-info");

toggleBtn.addEventListener("click", () => {
  const isHidden = infoPanel.classList.toggle("hidden");
  toggleBtn.setAttribute("aria-expanded", !isHidden);
  toggleBtn.textContent = isHidden ? "More Info" : "Hide Info";

  if (!isHidden) {
    infoPanel.focus();
  }
});

// const btn = document.getElementById("show-details-btn");
// const content = document.getElementById("extra-content");

// btn.addEventListener("click", () => {
//   const isHidden = content.classList.toggle("hidden");
//   btn.setAttribute("aria-expanded", !isHidden);
//   if (!isHidden) {
//     content.focus();
//   }
// });
