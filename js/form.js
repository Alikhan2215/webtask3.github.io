document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("form");
  let errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", function (event) {
    // prevent the form from submitting by default
    event.preventDefault();

    errorMessage.innerHTML = "";

    // get the values of the email and password
    let email = form.email.value;
    let password = form.passwd.value;

    // validate
    if (!email || !password) {
      errorMessage.innerHTML = "Please fill in all required fields.";
    }
    else if (!isValidEmail(email)) {
      errorMessage.innerHTML = "Please enter a valid email address.";
    }
    else if (!isValidPassword(password)) {
      errorMessage.innerHTML =
        "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one digit.";
    }
    else {
      form.submit();
    }
  });
});

// function to validate email using a simple regex
function isValidEmail(email) {
  let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
}
function isValidPassword(password) {
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  return passwordRegex.test(password);
}
