const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});

  // prevent form submit
  const form = document.querySelector("form");
  form.addEventListener('submit', function (e) {
      e.preventDefault();
  });
  


// Get the reset button and form
const resetButton = document.getElementById('resetButton');
const forms = document.querySelector("#myForm"); // Ensure this is the correct ID for your form

// Add event listener to the reset button
resetButton.addEventListener('click', function(e) {
    // Prevent the default reset behavior
    e.preventDefault();

    // Ask for user confirmation
    const confirmReset = confirm('Are you sure you want to reset the form?');

    // If the user confirms, reset the form
    if (confirmReset) {
        forms.reset();  // Resets all form fields
        alert('Form has been reset!');  // Show an alert (optional)
    } else {
        alert('Reset was canceled!');  // Show an alert if reset is canceled (optional)
    }
});
