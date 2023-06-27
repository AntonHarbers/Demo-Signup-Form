const passwordInput = document.querySelector("#passwordInput")
const confirmPasswordInput = document.querySelector("#confirmPasswordInput")
const submitButton = document.querySelector("#submitBtn")
const errorText = document.querySelector("#errorText")

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;

    console.log(password)
    console.log(confirmPassword)
  
    if (password !== confirmPassword) {
        errorText.classList.remove("hidden")
      return;
    }else{
        errorText.classList.add("hidden")
    }
    event.target.submit();
  });