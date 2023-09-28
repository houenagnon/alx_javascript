function generateInputFields(numFields) {
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; 
  
    for (let i = 1; i <= numFields; i++) {
      const inputField = document.createElement("input");
      inputField.type = "text";
      inputField.name = "field" + i;
      inputField.placeholder = "Field " + i;
      inputContainer.appendChild(inputField);
    }
  }
  
  function validateForm(event) {
    const inputFields = document.querySelectorAll("#inputContainer input");
  
    for (const inputField of inputFields) {
      if (inputField.value.trim() === "") {
        alert("Please fill in all fields.");
        event.preventDefault(); 
        return;
      }
    }
  }
  
  const numFieldsDropdown = document.getElementById("numFields");
  numFieldsDropdown.addEventListener("change", function () {
    const selectedValue = parseInt(numFieldsDropdown.value);
    generateInputFields(selectedValue);
  });
  
  const dynamicForm = document.getElementById("dynamicForm");
  dynamicForm.addEventListener("submit", validateForm);
  