/*==================================================
LOGIN PAGE JS
==================================================*/

(function () {

    /*==================================
    ELEMENTS
    ==================================*/

    const form = document.getElementById("loginForm");

    const roleCards = document.querySelectorAll(".role-card");

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    const loginBtn = document.getElementById("loginBtn");

    const togglePassword = document.getElementById("togglePassword");

    let selectedRole = "admin";

    /*==================================
    ROLE SELECTOR
    ==================================*/

    roleCards.forEach(card => {

        card.addEventListener("click", () => {

            roleCards.forEach(item => item.classList.remove("active"));

            card.classList.add("active");

            selectedRole = card.dataset.role;

        });

    });

    /*==================================
    PASSWORD TOGGLE
    ==================================*/

    togglePassword.addEventListener("click", () => {

        if (password.type === "password") {

            password.type = "text";

            togglePassword.innerHTML =
                '<i class="fa-solid fa-eye"></i>';

        } else {

            password.type = "password";

            togglePassword.innerHTML =
                '<i class="fa-solid fa-eye-slash"></i>';

        }

    });

    /*==================================
    VALIDATION FUNCTIONS
    ==================================*/

    function setError(input, message, error) {

        input.parentElement.classList.remove("success");

        input.parentElement.classList.add("error");

        error.textContent = message;

    }

    function setSuccess(input, error) {

        input.parentElement.classList.remove("error");

        input.parentElement.classList.add("success");

        error.textContent = "";

    }

    /*==================================
    NAME
    ==================================*/

    function validateName() {

        const value = fullName.value.trim();

        const regex = /^[A-Za-z ]+$/;

        if (value === "") {

            setError(fullName, "Full name is required.", nameError);

            return false;

        }

        if (!regex.test(value)) {

            setError(fullName, "Only letters are allowed.", nameError);

            return false;

        }

        if (value.length < 3) {

            setError(fullName, "Minimum 3 characters required.", nameError);

            return false;

        }

        setSuccess(fullName, nameError);

        return true;

    }

    /*==================================
    EMAIL
    ==================================*/

    function validateEmail() {

        const value = email.value.trim();

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (value === "") {

            setError(email, "Email is required.", emailError);

            return false;

        }

        if (!regex.test(value)) {

            setError(email, "Enter a valid email.", emailError);

            return false;

        }

        setSuccess(email, emailError);

        return true;

    }

    /*==================================
    PASSWORD
    ==================================*/

    function validatePassword() {

        const value = password.value;

        const regex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

        if (value === "") {

            setError(password, "Password is required.", passwordError);

            return false;

        }

        if (!regex.test(value)) {

            setError(
                password,
                "Min 8 chars, Upper, Lower, Number & Special Character.",
                passwordError
            );

            return false;

        }

        setSuccess(password, passwordError);

        return true;

    }

    /*==================================
    ONLY LETTERS IN NAME
    ==================================*/

    fullName.addEventListener("input", () => {

        fullName.value = fullName.value.replace(/[^A-Za-z ]/g, "");

        validateName();

    });

    /*==================================
    REAL TIME VALIDATION
    ==================================*/

    email.addEventListener("input", validateEmail);

    password.addEventListener("input", validatePassword);

    /*==================================
    SUBMIT
    ==================================*/

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const validName = validateName();
        const validEmail = validateEmail();
        const validPassword = validatePassword();

        if (validName && validEmail && validPassword) {

            loginBtn.classList.add("loading");

            loginBtn.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Signing In...';

            setTimeout(() => {

                if (selectedRole === "admin") {

                    window.location.href = "admin-dashboard.html";

                } else {

                    window.location.href = "client-dashboard.html";

                }

            }, 1000);

        }

    });

})();