// Redirect if not logged in
function checkLogin() {
  const loggedIn = localStorage.getItem("loggedIn");
  const currentPage = window.location.pathname;

  if (!loggedIn && currentPage !== "/index.html" && !currentPage.endsWith("index.html")) {
    window.location.href = "index.html";
  }
}

// Logout function
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

// Handle login form
document.addEventListener("DOMContentLoaded", () => {
  checkLogin();

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username && password) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
      } else {
        alert("Please enter valid details!");
      }
    });
  }
});
