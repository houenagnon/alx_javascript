// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Retrieve the values of the form fields
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    
    // Get user-inputted values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
  
    // Check if the required fields are filled
    if (name === "" || email === "") {
      alert("Please fill in all required fields.");
      return;
    }
  
    // You can add additional validations here if needed
  
    // Display a success message if everything is correct
    alert("Form submitted successfully!");
  }
  
  // Add an event listener to listen for form submission
  const submitForm = document.getElementById("submitForm");
  submitForm.addEventListener("submit", handleFormSubmit);
  