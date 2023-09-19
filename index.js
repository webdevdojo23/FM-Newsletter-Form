const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const main = document.getElementById("main");
const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modalBtn");

let isError = false;

form.addEventListener("submit", handleEmailInput); 
form.addEventListener("submit", handleSubmit);
modalBtn.addEventListener("click", handleDismiss);

function handleEmailInput(event) {
    event.preventDefault();

    const error = document.getElementById("error");

    const email = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(email == "") {
        isError = true;
        error.innerHTML = "Please fill out this field";
        emailInput.classList.add("invalid-input");
    }
    else {
        if(emailRegex.test(email)) {
            isError = false;
            error.innerHTML = "";
            emailInput.classList.remove("invalid-input");
        }

        else {
            isError = true;
            error.innerHTML = "Valid email required";
            emailInput.classList.add("invalid-input");
        }
    }

    // once form has been submitted - add event to check for validity on input change
    form.addEventListener("input", handleEmailInput);
}

function handleSubmit(event) {
    event.preventDefault();

    const email = document.getElementById("modal__email");

    if(!isError) {
        email.innerHTML = emailInput.value;
        emailInput.value = "";
        main.style.opacity = "0";
        main.style.visibility = "hidden";
        modal.style.display = "flex";
    }

}

function handleDismiss() {
    main.style.opacity = "100%";
    main.style.visibility = "visible";
    modal.style.display = "none";
}