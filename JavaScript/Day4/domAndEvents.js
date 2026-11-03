const email_input = document.getElementById("email");
const password_input = document.getElementById("password");
const email_error = document.getElementById("email-error");
const password_error = document.getElementById("password-error");
const login_btn = document.getElementById("login-btn");

const users = JSON.parse(localStorage.getItem("users")) || [];
console.log(users);

login_btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (email_input.value === "" && password_input.value === "") {
        showError("Email is required", email_error);
        showError("Password is required", password_error);
        return;
    } else if (email_input.value === "") {
        showError("Email is required", email_error);
        return;
    } else if (password_input.value === "") {
        showError("Password is required", password_error);
        return;
    }

    const credentials = {
        email: email_input.value,
        password: password_input.value
    }

    users.push(credentials);
    localStorage.setItem("users", JSON.stringify(users));

    console.log(users);
    clearForm();
});

function clearForm() {
    email_input.value = "";
    password_input.value = "";
    email_error.style.display = "none";
    password_error.style.display = "none";
}

function showError(msg, errorContainer) {
    errorContainer.textContent = msg;
    errorContainer.style.display = "block";
}