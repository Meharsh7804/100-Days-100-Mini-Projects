document.addEventListener("DOMContentLoaded", function () {
  const postsContainer = document.getElementById("posts-container");
  const loginLink = document.getElementById("login-link");
  const logoutLink = document.getElementById("logout-link");
  const loginModal = document.getElementById("login-modal");
  const loginForm = document.getElementById("login-form");
  const postForm = document.getElementById("post-form");
  const createPostSection = document.getElementById("create-post-section");

  let isLoggedIn = false;
  let posts = [];

  function renderPosts() {
    postsContainer.innerHTML = "";
    posts.forEach((post, index) => {
      const postElement = document.createElement("div");
      postElement.className = "post";
      postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <p><strong>Tags:</strong> ${post.tags.join(", ")}</p>
                ${
                  isLoggedIn
                    ? `<button onclick="deletePost(${index})">Delete</button>`
                    : ""
                }
            `;
      postsContainer.appendChild(postElement);
    });
  }

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    isLoggedIn = true;
    loginModal.style.display = "none";
    loginLink.style.display = "none";
    logoutLink.style.display = "block";
    createPostSection.style.display = "block";
  });

  logoutLink.addEventListener("click", function () {
    isLoggedIn = false;
    logoutLink.style.display = "none";
    loginLink.style.display = "block";
    createPostSection.style.display = "none";
  });

  postForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const tags = document
      .getElementById("tags")
      .value.split(",")
      .map((tag) => tag.trim());
    posts.push({ title, content, tags });
    renderPosts();
    postForm.reset();
  });

  // Function to handle post deletion
  window.deletePost = function (index) {
    posts.splice(index, 1);
    renderPosts();
  };

  // Show login modal
  loginLink.addEventListener("click", function () {
    loginModal.style.display = "block";
  });

  // Hide login modal on click outside
  loginModal.addEventListener("click", function (e) {
    if (e.target === loginModal) {
      loginModal.style.display = "none";
    }
  });

  // Initial render
  renderPosts();
});
