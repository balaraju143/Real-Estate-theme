/*==================================================
REGISTER PAGE JS
==================================================*/

(() => {

    const form = document.getElementById("registerForm");

    if (!form) return;

    const roleCards = document.querySelectorAll(".role-card");

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const terms = document.getElementById("terms");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    const registerBtn = document.getElementById("registerBtn");

    const togglePassword = document.getElementById("togglePassword");
    const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

    let selectedRole = "admin";

    /*==============================
    ROLE
    ==============================*/

    roleCards.forEach(card => {

        card.addEventListener("click", () => {

            roleCards.forEach(item => item.classList.remove("active"));

            card.classList.add("active");

            selectedRole = card.dataset.role;

        });

    });

    /*==============================
    PASSWORD TOGGLE
    ==============================*/

    function togglePasswordField(button, input){

        button.addEventListener("click",()=>{

            if(input.type==="password"){

                input.type="text";

                button.innerHTML='<i class="fa-solid fa-eye"></i>';

            }else{

                input.type="password";

                button.innerHTML='<i class="fa-solid fa-eye-slash"></i>';

            }

        });

    }

    togglePasswordField(togglePassword,password);
    togglePasswordField(toggleConfirmPassword,confirmPassword);

    /*==============================
    HELPERS
    ==============================*/

    function setError(input,error,message){

        input.parentElement.classList.remove("success");
        input.parentElement.classList.add("error");

        error.textContent=message;

    }

    function setSuccess(input,error){

        input.parentElement.classList.remove("error");
        input.parentElement.classList.add("success");

        error.textContent="";

    }

    /*==============================
    NAME
    ==============================*/

    function validateName(){

        const value=fullName.value.trim();

        if(value===""){

            setError(fullName,nameError,"Full name is required.");

            return false;

        }

        if(!/^[A-Za-z ]+$/.test(value)){

            setError(fullName,nameError,"Only letters are allowed.");

            return false;

        }

        if(value.length<3){

            setError(fullName,nameError,"Minimum 3 characters required.");

            return false;

        }

        setSuccess(fullName,nameError);

        return true;

    }

    /*==============================
    EMAIL
    ==============================*/

    function validateEmail(){

        const value=email.value.trim();

        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(value===""){

            setError(email,emailError,"Email is required.");

            return false;

        }

        if(!regex.test(value)){

            setError(email,emailError,"Enter a valid email.");

            return false;

        }

        setSuccess(email,emailError);

        return true;

    }

    /*==============================
    PHONE
    ==============================*/

    function validatePhone(){

        const value=phone.value.trim();

        if(value===""){

            setError(phone,phoneError,"Phone number is required.");

            return false;

        }

        if(!/^[0-9]{10}$/.test(value)){

            setError(phone,phoneError,"Enter a valid 10-digit number.");

            return false;

        }

        setSuccess(phone,phoneError);

        return true;

    }

    /*==============================
    PASSWORD
    ==============================*/

    function validatePassword(){

        const value=password.value;

        const regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

        if(value===""){

            setError(password,passwordError,"Password is required.");

            return false;

        }

        if(!regex.test(value)){

            setError(password,passwordError,"Use 8+ chars, uppercase, lowercase, number & special character.");

            return false;

        }

        setSuccess(password,passwordError);

        return true;

    }

    /*==============================
    CONFIRM PASSWORD
    ==============================*/

    function validateConfirmPassword(){

        if(confirmPassword.value===""){

            setError(confirmPassword,confirmPasswordError,"Confirm password is required.");

            return false;

        }

        if(password.value!==confirmPassword.value){

            setError(confirmPassword,confirmPasswordError,"Passwords do not match.");

            return false;

        }

        setSuccess(confirmPassword,confirmPasswordError);

        return true;

    }

    /*==============================
    TERMS
    ==============================*/

    function validateTerms(){

        if(!terms.checked){

            alert("Please accept the Terms & Conditions.");

            return false;

        }

        return true;

    }

    /*==============================
    REAL TIME
    ==============================*/

    fullName.addEventListener("input",()=>{

        fullName.value=fullName.value.replace(/[^A-Za-z ]/g,"");

        validateName();

    });

    email.addEventListener("input",validateEmail);

    phone.addEventListener("input",()=>{

        phone.value=phone.value.replace(/\D/g,"").slice(0,10);

        validatePhone();

    });

    password.addEventListener("input",()=>{

        validatePassword();

        validateConfirmPassword();

    });

    confirmPassword.addEventListener("input",validateConfirmPassword);

    /*==============================
    SUBMIT
    ==============================*/

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        const valid=

            validateName() &&
            validateEmail() &&
            validatePhone() &&
            validatePassword() &&
            validateConfirmPassword() &&
            validateTerms();

        if(valid){

            registerBtn.classList.add("loading");

            registerBtn.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Creating Account...';

            // Save role (optional)
            localStorage.setItem("userRole",selectedRole);

            setTimeout(()=>{

                window.location.href="login.html";

            },1000);

        }

    });

})();