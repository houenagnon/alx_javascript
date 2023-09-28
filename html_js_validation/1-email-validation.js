// Fonction pour valider l'e-mail
function validateEmail() {
    const email = document.getElementById("email").value;
    const error = document.getElementById("error");
  
    // Réinitialisez le message d'erreur à chaque vérification
    error.innerHTML = "";
  
    // Utilisez une expression régulière pour valider le format de l'e-mail
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (emailPattern.test(email)) {
      return true; // L'e-mail est valide
    } else {
      error.innerHTML = "Please enter a valid email address.";
      return false; // L'e-mail est invalide
    }
  }
  
  // Ajoutez un écouteur d'événements au formulaire pour la soumission du formulaire
  const emailForm = document.getElementById("emailForm");
  emailForm.addEventListener("submit", function (event) {
    if (!validateEmail()) {
      event.preventDefault(); // Empêcher la soumission du formulaire si l'e-mail est invalide
    }
  });
  