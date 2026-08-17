// Pagination
// let currentPage = 1;
// const postsPerPage = 3;
// const totalPosts = 9;
// const totalPages = Math.ceil(totalPosts / postsPerPage);
// const container = document.querySelector(".pagination");
// const prevButton = document.querySelector(".prev");
// const nextButton = document.querySelector(".next");

// function renderPosts() {
//   container.innerHTML = "";
//   const start = (currentPage - 1) * postsPerPage;
//   const end = start + postsPerPage;
//   for (let i = start; i < end && i < totalPosts; i++) {
//     const post = document.createElement("div");
//     post.className = "post";
//     post.textContent = `Post ${i + 1}`;
//     container.appendChild(post);
//   }
//   prevButton.disabled = currentPage === 1;
//   nextButton.disabled = currentPage === totalPages;
// }

// prevButton.addEventListener("click", () => {
//   if (currentPage > 1) {
//     currentPage--;
//     renderPosts();
//   }
// });

// nextButton.addEventListener("click", () => {
//   if (currentPage < totalPages) {
//     currentPage++;
//     renderPosts();
//   }
// });

// renderPosts();

// infinite Scroll
const container = document.querySelector(".infinite-scroll");
const loadingIndicator = document.querySelector(".loading-indicator");
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMorePosts();
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function loadMorePosts() {
  loadingIndicator.style.display = "block";
  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      const post = document.createElement("div");
      post.className = "post";
      post.textContent = `Post ${container.children.length + 1}`;
      container.appendChild(post);
    }
    loadingIndicator.style.display = "none";
  }, 1000);
}

// Load More Button
// const loadMoreButton = document.querySelector(".load-more");
// const container = document.querySelector(".infinite-scroll");
// loadMoreButton.addEventListener("click", () => {
//   loadMorePosts();
// });

// function loadMorePosts() {
//   for (let i = 0; i < 3; i++) {
//     const post = document.createElement("div");
//     post.className = "post";
//     post.textContent = `Post ${container.children.length + 1}`;
//     container.appendChild(post);
//   }
// }
