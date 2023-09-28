function validatePassword() {
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  // Réinitialisez le message d'erreur à chaque vérification
  error.innerHTML = "";

  // The password must be at least 8 characters long.
  if (password.length < 8) {
    error.innerHTML = "The password must be at least 8 characters long.";
  }
  // The password must contain at least one uppercase letter.
  else if (!/[A-Z]/.test(password)) {
    error.innerHTML = "The password must contain at least one uppercase letter.";
  }
  // The password must contain at least one lowercase letter.
  else if (!/[a-z]/.test(password)) {
    error.innerHTML = "The password must contain at least one lowercase letter.";
  }
  // The password must contain at least one numeric digit.
  else if (!/\d/.test(password)) {
    error.innerHTML = "The password must contain at least one numeric digit.";
  }
  // The password must contain at least one special character (e.g., !@#$%^&*).
  else if (!/[@#$%^&*!]/.test(password)) {
    error.innerHTML = "The password must contain at least one special character (e.g., !@#$%^&*).";
  }
  
  // If the password meets all the criteria, allow the form submission.
  if (error.innerHTML === "") {
    return true; // Password is valid
  } else {
    return false; // Password is invalid
  }
}

var passwordForm = document.getElementById("passwordForm");
passwordForm.addEventListener("submit", function (event) {
    if (!validatePassword()) {
        // Prevent form submission if password is invalid
        event.preventDefault();
    }
});