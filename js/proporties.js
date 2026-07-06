/*==================================================
PROPERTY HERO JS
==================================================*/

(function () {

    /*==================================
    SCROLL REVEAL
    ==================================*/

    const heroItems = document.querySelectorAll(
        ".property-hero-content,.property-hero-image-wrapper,.property-trust,.hero-scroll"
    );

    if (heroItems.length) {

        const heroObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        }, {

            threshold: 0.2

        });

        heroItems.forEach(item => {

            heroObserver.observe(item);

        });

    }

    /*==================================
    IMAGE PARALLAX
    ==================================*/

    const heroImage = document.querySelector(".property-main-image");

    if (heroImage) {

        heroImage.addEventListener("mousemove", (e) => {

            if (window.innerWidth < 992) return;

            const img = heroImage.querySelector("img");

            const rect = heroImage.getBoundingClientRect();

            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            img.style.transform = `
                scale(1.08)
                translate(${x * 18}px,${y * 18}px)
            `;

        });

        heroImage.addEventListener("mouseleave", () => {

            const img = heroImage.querySelector("img");

            img.style.transform = "scale(1)";

        });

    }

    /*==================================
    FLOATING CARDS TILT
    ==================================*/

    document.querySelectorAll(".price-card,.location-card,.agent-card").forEach(card => {

        card.addEventListener("mousemove", (e) => {

            if (window.innerWidth < 992) return;

            const rect = card.getBoundingClientRect();

            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            card.style.transform = `
                perspective(900px)
                rotateY(${x * 8}deg)
                rotateX(${-y * 8}deg)
                translateY(-6px)
            `;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    /*==================================
    BUTTON HOVER
    ==================================*/

    document.querySelectorAll(".hero-btn").forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateY(-6px) scale(1.03)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });

    /*==================================
    TRUST ITEMS
    ==================================*/

    document.querySelectorAll(".trust-item").forEach(item => {

        item.addEventListener("mouseenter", () => {

            item.animate([

                {
                    transform: "translateY(0)"
                },

                {
                    transform: "translateY(-8px)"
                },

                {
                    transform: "translateY(0)"
                }

            ], {

                duration: 500,
                easing: "ease-out"

            });

        });

    });

    /*==================================
    PRICE CARD PULSE
    ==================================*/

    const priceCard = document.querySelector(".price-card");

    if (priceCard) {

        setInterval(() => {

            priceCard.animate([

                {
                    transform: "scale(1)"
                },

                {
                    transform: "scale(1.04)"
                },

                {
                    transform: "scale(1)"
                }

            ], {

                duration: 1200,
                easing: "ease-in-out"

            });

        }, 3500);

    }

    /*==================================
    AGENT CALL BUTTON
    ==================================*/

    const callBtn = document.querySelector(".agent-card a");

    if (callBtn) {

        callBtn.addEventListener("mouseenter", () => {

            callBtn.style.transform = "rotate(15deg) scale(1.1)";

        });

        callBtn.addEventListener("mouseleave", () => {

            callBtn.style.transform = "";

        });

    }

    /*==================================
    STATS COUNT EFFECT
    ==================================*/

    const stats = document.querySelectorAll(".property-stat h3");

    stats.forEach(stat => {

        stat.addEventListener("mouseenter", () => {

            stat.animate([

                {
                    transform: "scale(1)"
                },

                {
                    transform: "scale(1.12)"
                },

                {
                    transform: "scale(1)"
                }

            ], {

                duration: 500

            });

        });

    });

})();


/*==================================================
FEATURED PROPERTIES JS
==================================================*/

(function(){

    /*==================================
    SCROLL REVEAL
    ==================================*/

    const featuredElements=document.querySelectorAll(

        ".featured-header,.featured-card"

    );

    if(featuredElements.length){

        const featuredObserver=new IntersectionObserver((entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },{

            threshold:.2

        });

        featuredElements.forEach(item=>{

            featuredObserver.observe(item);

        });

    }

    /*==================================
    3D CARD TILT
    ==================================*/

    document.querySelectorAll(".featured-card").forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            if(window.innerWidth<992) return;

            const rect=card.getBoundingClientRect();

            const x=(e.clientX-rect.left)/rect.width-.5;

            const y=(e.clientY-rect.top)/rect.height-.5;

            card.style.transform=`
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
    IMAGE PARALLAX
    ==================================*/

    document.querySelectorAll(".featured-image img").forEach(image=>{

        image.addEventListener("mousemove",(e)=>{

            if(window.innerWidth<992) return;

            const rect=image.getBoundingClientRect();

            const x=(e.clientX-rect.left)/rect.width-.5;

            const y=(e.clientY-rect.top)/rect.height-.5;

            image.style.transform=`
                scale(1.12)
                translate(${x*12}px,${y*12}px)
            `;

        });

        image.addEventListener("mouseleave",()=>{

            image.style.transform="";

        });

    });

    /*==================================
    WISHLIST BUTTON
    ==================================*/

    document.querySelectorAll(".wishlist-btn").forEach(button=>{

        button.addEventListener("click",function(){

            this.classList.toggle("active");

            const icon=this.querySelector("i");

            if(icon.classList.contains("fa-regular")){

                icon.classList.remove("fa-regular");

                icon.classList.add("fa-solid");

                icon.style.color="#ff4d6d";

            }else{

                icon.classList.remove("fa-solid");

                icon.classList.add("fa-regular");

                icon.style.color="#ffffff";

            }

        });

    });

    /*==================================
    PROPERTY BUTTON
    ==================================*/

    document.querySelectorAll(".property-footer a").forEach(btn=>{

        btn.addEventListener("mouseenter",()=>{

            btn.style.transform="translateX(8px)";

        });

        btn.addEventListener("mouseleave",()=>{

            btn.style.transform="translateX(0)";

        });

    });

    /*==================================
    RATING STAR
    ==================================*/

    document.querySelectorAll(".property-rating i").forEach(star=>{

        star.addEventListener("mouseenter",()=>{

            star.animate([

                {

                    transform:"rotate(0deg) scale(1)"

                },

                {

                    transform:"rotate(18deg) scale(1.4)"

                },

                {

                    transform:"rotate(0deg) scale(1)"

                }

            ],{

                duration:500,

                easing:"ease-out"

            });

        });

    });

    /*==================================
    BADGE GLOW
    ==================================*/

    document.querySelectorAll(".featured-badge").forEach(badge=>{

        setInterval(()=>{

            badge.animate([

                {

                    opacity:.7

                },

                {

                    opacity:1

                },

                {

                    opacity:.7

                }

            ],{

                duration:1500

            });

        },3500);

    });

})();


/*==================================================
WHY CHOOSE STACKLY JS
==================================================*/

(function () {

    /*==================================
    SCROLL REVEAL
    ==================================*/

    const timelineItems = document.querySelectorAll(
        ".why-header, .timeline-item, .why-cta"
    );

    if (timelineItems.length) {

        const timelineObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        }, {
            threshold: 0.15
        });

        timelineItems.forEach(item => {

            timelineObserver.observe(item);

        });

    }

    /*==================================
    TIMELINE CARD TILT
    ==================================*/

    document.querySelectorAll(".timeline-card").forEach(card => {

        card.addEventListener("mousemove", (e) => {

            if (window.innerWidth < 992) return;

            const rect = card.getBoundingClientRect();

            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            card.style.transform = `
                perspective(1000px)
                rotateY(${x * 8}deg)
                rotateX(${-y * 8}deg)
                translateY(-10px)
            `;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    /*==================================
    ICON BOUNCE
    ==================================*/

    document.querySelectorAll(".timeline-icon").forEach(icon => {

        icon.addEventListener("mouseenter", () => {

            icon.animate([

                {
                    transform: "scale(1)"
                },

                {
                    transform: "scale(1.18) rotate(10deg)"
                },

                {
                    transform: "scale(1)"
                }

            ], {

                duration: 500,
                easing: "ease-out"

            });

        });

    });

    /*==================================
    NUMBER PULSE
    ==================================*/

    document.querySelectorAll(".timeline-number").forEach(number => {

        setInterval(() => {

            number.animate([

                {
                    opacity: .2
                },

                {
                    opacity: .5
                },

                {
                    opacity: .2
                }

            ], {

                duration: 1500

            });

        }, 3500);

    });

    /*==================================
    CTA BUTTON
    ==================================*/

    const whyBtn = document.querySelector(".why-btn");

    if (whyBtn) {

        whyBtn.addEventListener("mouseenter", () => {

            whyBtn.style.transform = "translateY(-6px) scale(1.03)";

        });

        whyBtn.addEventListener("mouseleave", () => {

            whyBtn.style.transform = "";

        });

    }

    /*==================================
    TIMELINE DOTS
    ==================================*/

    document.querySelectorAll(".timeline-item").forEach(item => {

        item.addEventListener("mouseenter", () => {

            item.style.zIndex = "5";

        });

        item.addEventListener("mouseleave", () => {

            item.style.zIndex = "";

        });

    });

    /*==================================
    CTA FLOAT
    ==================================*/

    const cta = document.querySelector(".why-cta");

    if (cta) {

        setInterval(() => {

            cta.animate([

                {
                    transform: "translateY(0)"
                },

                {
                    transform: "translateY(-6px)"
                },

                {
                    transform: "translateY(0)"
                }

            ], {

                duration: 3000,
                easing: "ease-in-out"

            });

        }, 3500);

    }

})();


/*==================================================
LUXURY CTA JS
==================================================*/

(function () {

    /*==================================
    SCROLL REVEAL
    ==================================*/

    const luxuryItems = document.querySelectorAll(
        ".luxury-content,.luxury-image,.luxury-stats,.luxury-scroll"
    );

    if (luxuryItems.length) {

        const luxuryObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        }, {

            threshold: 0.2

        });

        luxuryItems.forEach(item => {

            luxuryObserver.observe(item);

        });

    }

    /*==================================
    IMAGE PARALLAX
    ==================================*/

    const luxuryImage = document.querySelector(".luxury-image");

    if (luxuryImage) {

        luxuryImage.addEventListener("mousemove", (e) => {

            if (window.innerWidth < 992) return;

            const img = luxuryImage.querySelector("img");

            const rect = luxuryImage.getBoundingClientRect();

            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            img.style.transform = `
                scale(1.08)
                translate(${x * 18}px, ${y * 18}px)
            `;

        });

        luxuryImage.addEventListener("mouseleave", () => {

            luxuryImage.querySelector("img").style.transform = "";

        });

    }

    /*==================================
    FLOATING CARDS
    ==================================*/

    document.querySelectorAll(".experience-card,.success-card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.animate([

                {
                    transform:"translateY(0px)"
                },

                {
                    transform:"translateY(-8px)"
                },

                {
                    transform:"translateY(0px)"
                }

            ],{

                duration:600,

                easing:"ease-out"

            });

        });

    });

    /*==================================
    BUTTON EFFECT
    ==================================*/

    document.querySelectorAll(".luxury-btn").forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "translateY(-5px) scale(1.03)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "";

        });

    });

    /*==================================
    BADGE HOVER
    ==================================*/

    document.querySelectorAll(".luxury-badge").forEach(badge => {

        badge.addEventListener("mouseenter", () => {

            badge.style.transform = "translateY(-5px)";

        });

        badge.addEventListener("mouseleave", () => {

            badge.style.transform = "";

        });

    });

    /*==================================
    STATS HOVER
    ==================================*/

    document.querySelectorAll(".luxury-stat").forEach(stat => {

        stat.addEventListener("mouseenter", () => {

            stat.style.transform = "translateY(-10px)";

        });

        stat.addEventListener("mouseleave", () => {

            stat.style.transform = "";

        });

    });

    /*==================================
    EXPERIENCE CARD PULSE
    ==================================*/

    const experience = document.querySelector(".experience-card");

    if (experience) {

        setInterval(() => {

            experience.animate([

                {

                    transform:"scale(1)"

                },

                {

                    transform:"scale(1.05)"

                },

                {

                    transform:"scale(1)"

                }

            ],{

                duration:1200

            });

        },3500);

    }

    /*==================================
    SUCCESS CARD PULSE
    ==================================*/

    const success = document.querySelector(".success-card");

    if (success) {

        setInterval(() => {

            success.animate([

                {

                    transform:"scale(1)"

                },

                {

                    transform:"scale(1.05)"

                },

                {

                    transform:"scale(1)"

                }

            ],{

                duration:1200

            });

        },4200);

    }

    /*==================================
    COUNTER ANIMATION
    ==================================*/

    const counters = document.querySelectorAll(".luxury-stat h3");

    counters.forEach(counter => {

        counter.addEventListener("mouseenter", () => {

            counter.animate([

                {

                    transform:"scale(1)"

                },

                {

                    transform:"scale(1.15)"

                },

                {

                    transform:"scale(1)"

                }

            ],{

                duration:500

            });

        });

    });

})();