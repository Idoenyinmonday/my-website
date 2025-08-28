const form = document.getElementById("signupForm");
if (form) {
  console.log('hello');
}

form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop page refresh

  let isValid = true;

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  // Reset errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Validate name
  if (name === "") {
    setError("name", "Name is required");
    isValid = false;
  }

  // Validate email
  if (email === "") {
    setError("email", "Email is required");
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    setError("email", "Enter a valid email");
    isValid = false;
  }

  // Validate password
  if (password.length < 6) {
    setError("password", "Password must be at least 6 characters");
    isValid = false;
  }

  // Validate confirm password
  if (confirmPassword !== password) {
    setError("confirmPassword", "Passwords do not match");
    isValid = false;
  }

  if (isValid) {
    alert("Sign Up Successful!");
    form.reset();
    window.location.href='index.html';
  }
});

// Function to show error
function setError(inputId, message) {
  const input = document.getElementById(inputId);
  const errorEl = input.nextElementSibling;
  errorEl.textContent = message;
}
