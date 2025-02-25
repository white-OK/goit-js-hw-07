const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();
     if (email === "" || password === "") {
    return alert(`All form fields must be filled in`);
  }
    const formData = {
        email: email,
        password: password,
    };
    console.log(formData);
    form.reset(); 
}
