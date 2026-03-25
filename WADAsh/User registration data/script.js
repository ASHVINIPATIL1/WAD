document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = { name, email, password };

  // Get existing users from localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Add new user
  users.push(user);

  // Save back to localStorage
  localStorage.setItem("users", JSON.stringify(users));

  // AJAX POST request
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://example.com/api/register", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("Data sent successfully:", xhr.responseText);
    }
  };

  xhr.send(JSON.stringify(user));

  // Redirect to display page
  window.location.href = "users.html";
});