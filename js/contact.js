/*==================================================
CONTACT HERO JS
==================================================*/

(function () {

    /*==================================
    SCROLL REVEAL
    ==================================*/

    const contactElements = document.querySelectorAll(
        ".contact-hero-content,.contact-info-card,.contact-trust,.contact-scroll"
    );

    if (contactElements.length) {

        const contactObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        }, {

            threshold:0.18

        });

        contactElements.forEach(item => {

            contactObserver.observe(item);

        });

    }

    /*==================================
    CARD 3D EFFECT
    ==================================*/

    document.querySelectorAll(".contact-info-card").forEach(card => {

        card.addEventListener("mousemove",(e)=>{

            if(window.innerWidth < 992) return;

            const rect = card.getBoundingClientRect();

            const x = (e.clientX - rect.left) / rect.width - .5;
            const y = (e.clientY - rect.top) / rect.height - .5;

            card.style.transform = `
                perspective(1000px)
                rotateY(${x*8}deg)
                rotateX(${-y*8}deg)
                translateY(-10px)
            `;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

    /*==================================
    ICON BOUNCE
    ==================================*/

    document.querySelectorAll(".contact-icon").forEach(icon=>{

        icon.addEventListener("mouseenter",()=>{

            icon.animate([

                {

                    transform:"scale(1)"

                },

                {

                    transform:"scale(1.18) rotate(12deg)"

                },

                {

                    transform:"scale(1)"

                }

            ],{

                duration:500,

                easing:"ease-out"

            });

        });

    });

    /*==================================
    BUTTON HOVER
    ==================================*/

    document.querySelectorAll(".contact-btn").forEach(button=>{

        button.addEventListener("mouseenter",()=>{

            button.style.transform="translateY(-5px) scale(1.03)";

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform="";

        });

    });

    /*==================================
    TRUST ITEMS
    ==================================*/

    document.querySelectorAll(".trust-item").forEach(item=>{

        item.addEventListener("mouseenter",()=>{

            item.style.transform="translateY(-8px)";

        });

        item.addEventListener("mouseleave",()=>{

            item.style.transform="";

        });

    });

    /*==================================
    SCROLL BUTTON
    ==================================*/

    const scrollButton = document.querySelector(".contact-scroll a");

    if(scrollButton){

        scrollButton.addEventListener("mouseenter",()=>{

            scrollButton.style.transform="translateY(-5px)";

        });

        scrollButton.addEventListener("mouseleave",()=>{

            scrollButton.style.transform="";

        });

    }

    /*==================================
    ICON FLOAT ANIMATION
    ==================================*/

    document.querySelectorAll(".contact-icon").forEach(icon=>{

        setInterval(()=>{

            icon.animate([

                {

                    transform:"translateY(0)"

                },

                {

                    transform:"translateY(-6px)"

                },

                {

                    transform:"translateY(0)"

                }

            ],{

                duration:2200,

                easing:"ease-in-out"

            });

        },3500);

    });

})();

/*==================================================
CHOOSE YOUR SERVICE JS
==================================================*/

(function () {

    /*==================================
    SCROLL REVEAL
    ==================================*/

    const serviceElements = document.querySelectorAll(
        ".services-header,.service-card"
    );

    if (serviceElements.length) {

        const serviceObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        }, {

            threshold:0.18

        });

        serviceElements.forEach(item => {

            serviceObserver.observe(item);

        });

    }

    /*==================================
    3D CARD EFFECT
    ==================================*/

    document.querySelectorAll(".service-card").forEach(card => {

        card.addEventListener("mousemove",(e)=>{

            if(window.innerWidth < 992) return;

            const rect = card.getBoundingClientRect();

            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            card.style.transform = `
                perspective(1000px)
                rotateY(${x * 7}deg)
                rotateX(${-y * 7}deg)
                translateY(-10px)
            `;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform = "";

        });

    });

    /*==================================
    IMAGE PARALLAX
    ==================================*/

    document.querySelectorAll(".service-card img").forEach(image => {

        image.addEventListener("mousemove",(e)=>{

            if(window.innerWidth < 992) return;

            const rect = image.getBoundingClientRect();

            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            image.style.transform = `
                scale(1.08)
                translate(${x * 12}px, ${y * 12}px)
            `;

        });

        image.addEventListener("mouseleave",()=>{

            image.style.transform = "";

        });

    });

    /*==================================
    ICON ANIMATION
    ==================================*/

    document.querySelectorAll(".service-icon").forEach(icon => {

        icon.addEventListener("mouseenter",()=>{

            icon.animate([

                {

                    transform:"scale(1)"

                },

                {

                    transform:"scale(1.15) rotate(10deg)"

                },

                {

                    transform:"scale(1)"

                }

            ],{

                duration:500,

                easing:"ease-out"

            });

        });

    });

    /*==================================
    BUTTON HOVER
    ==================================*/

    document.querySelectorAll(".service-overlay a").forEach(button => {

        button.addEventListener("mouseenter",()=>{

            button.style.transform = "translateX(8px)";

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform = "";

        });

    });

    /*==================================
    SERVICE LABEL PULSE
    ==================================*/

    document.querySelectorAll(".service-label").forEach(label => {

        setInterval(()=>{

            label.animate([

                {

                    opacity:.8

                },

                {

                    opacity:1

                },

                {

                    opacity:.8

                }

            ],{

                duration:1200

            });

        },3500);

    });

})();

/*==================================================
CONTACT FORM VALIDATION
==================================================*/

(function () {

    const form = document.getElementById("contactForm");

    if (!form) return;

    const fullName = document.getElementById("fullname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");

    /*==================================
    NAME
    ==================================*/

    function validateName() {

        const value = fullName.value.trim();
        const regex = /^[A-Za-z ]+$/;

        if (value === "") {

            nameError.textContent = "Full name is required.";
            return false;

        }

        if (!regex.test(value)) {

            nameError.textContent = "Only letters and spaces are allowed.";
            return false;

        }

        if (value.length < 3) {

            nameError.textContent = "Minimum 3 characters required.";
            return false;

        }

        nameError.textContent = "";
        return true;

    }

    /*==================================
    EMAIL
    ==================================*/

    function validateEmail() {

        const value = email.value.trim();

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (value === "") {

            emailError.textContent = "Email is required.";
            return false;

        }

        if (!regex.test(value)) {

            emailError.textContent = "Enter a valid email address.";
            return false;

        }

        emailError.textContent = "";
        return true;

    }

    /*==================================
    PHONE
    ==================================*/

    function validatePhone() {

        const value = phone.value.trim();

        const regex = /^[0-9]{10}$/;

        if (value === "") {

            phoneError.textContent = "Phone number is required.";
            return false;

        }

        if (!regex.test(value)) {

            phoneError.textContent = "Enter a valid 10-digit phone number.";
            return false;

        }

        phoneError.textContent = "";
        return true;

    }

    /*==================================
    SUBJECT
    ==================================*/

    function validateSubject() {

        const value = subject.value.trim();

        if (value === "") {

            subjectError.textContent = "Subject is required.";
            return false;

        }

        if (value.length < 5) {

            subjectError.textContent = "Minimum 5 characters required.";
            return false;

        }

        subjectError.textContent = "";
        return true;

    }

    /*==================================
    MESSAGE
    ==================================*/

    function validateMessage() {

        const value = message.value.trim();

        if (value === "") {

            messageError.textContent = "Message is required.";
            return false;

        }

        if (value.length < 20) {

            messageError.textContent = "Minimum 20 characters required.";
            return false;

        }

        messageError.textContent = "";
        return true;

    }

    /*==================================
    REAL TIME VALIDATION
    ==================================*/

    fullName.addEventListener("input", validateName);
    email.addEventListener("input", validateEmail);
    phone.addEventListener("input", validatePhone);
    subject.addEventListener("input", validateSubject);
    message.addEventListener("input", validateMessage);

    /*==================================
    ONLY LETTERS IN NAME
    ==================================*/

    fullName.addEventListener("keypress", function(e){

        const char = String.fromCharCode(e.which);

        if(!/[A-Za-z ]/.test(char)){

            e.preventDefault();

        }

    });

    /*==================================
    ONLY NUMBERS IN PHONE
    ==================================*/

    phone.addEventListener("input", function(){

        this.value = this.value.replace(/\D/g,"").slice(0,10);

    });

    /*==================================
    FORM SUBMIT
    ==================================*/

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const validName = validateName();
        const validEmail = validateEmail();
        const validPhone = validatePhone();
        const validSubject = validateSubject();
        const validMessage = validateMessage();

        if(
            validName &&
            validEmail &&
            validPhone &&
            validSubject &&
            validMessage
        ){

            alert("Message sent successfully!");

            form.reset();

        }

    });

})();