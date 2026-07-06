/*==================================================
JOURNAL HERO JS
==================================================*/

(function () {

    /*==================================
    SCROLL REVEAL
    ==================================*/

    const journalElements = document.querySelectorAll(
        ".journal-content, .journal-image, .journal-stats, .journal-scroll"
    );

    if (journalElements.length) {

        const journalObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        }, {

            threshold: 0.2

        });

        journalElements.forEach(item => {

            journalObserver.observe(item);

        });

    }

    /*==================================
    IMAGE PARALLAX
    ==================================*/

    const journalImage = document.querySelector(".journal-image");

    if (journalImage) {

        journalImage.addEventListener("mousemove", (e) => {

            if (window.innerWidth < 992) return;

            const img = journalImage.querySelector("img");

            const rect = journalImage.getBoundingClientRect();

            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            img.style.transform = `
                scale(1.08)
                translate(${x * 15}px, ${y * 15}px)
            `;

        });

        journalImage.addEventListener("mouseleave", () => {

            journalImage.querySelector("img").style.transform = "";

        });

    }

    /*==================================
    FEATURED CARD FLOAT
    ==================================*/

    const featuredCard = document.querySelector(".featured-post-card");

    if (featuredCard) {

        setInterval(() => {

            featuredCard.animate([

                {
                    transform: "translateY(0px)"
                },

                {
                    transform: "translateY(-8px)"
                },

                {
                    transform: "translateY(0px)"
                }

            ], {

                duration: 2500,
                easing: "ease-in-out"

            });

        }, 3000);

    }

    /*==================================
    AUTHOR CARD FLOAT
    ==================================*/

    const authorCard = document.querySelector(".journal-author-card");

    if (authorCard) {

        setInterval(() => {

            authorCard.animate([

                {
                    transform: "translateY(0px)"
                },

                {
                    transform: "translateY(-8px)"
                },

                {
                    transform: "translateY(0px)"
                }

            ], {

                duration: 2800,
                easing: "ease-in-out"

            });

        }, 3500);

    }

    /*==================================
    BUTTON HOVER
    ==================================*/

    document.querySelectorAll(".journal-btn").forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "translateY(-5px) scale(1.03)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "";

        });

    });

    /*==================================
    TAGS HOVER
    ==================================*/

    document.querySelectorAll(".journal-tags span").forEach(tag => {

        tag.addEventListener("mouseenter", () => {

            tag.style.transform = "translateY(-5px)";

        });

        tag.addEventListener("mouseleave", () => {

            tag.style.transform = "";

        });

    });

    /*==================================
    STATS HOVER
    ==================================*/

    document.querySelectorAll(".journal-stat").forEach(stat => {

        stat.addEventListener("mouseenter", () => {

            stat.style.transform = "translateY(-10px)";

        });

        stat.addEventListener("mouseleave", () => {

            stat.style.transform = "";

        });

    });

    /*==================================
    AUTHOR BUTTON ROTATION
    ==================================*/

    const authorBtn = document.querySelector(".journal-author-card a");

    if (authorBtn) {

        authorBtn.addEventListener("mouseenter", () => {

            authorBtn.style.transform = "rotate(45deg) scale(1.1)";

        });

        authorBtn.addEventListener("mouseleave", () => {

            authorBtn.style.transform = "";

        });

    }

})();

/*==================================================
LATEST ARTICLES JS
==================================================*/

(function () {

    /*==================================
    SCROLL REVEAL
    ==================================*/

    const articleItems = document.querySelectorAll(
        ".articles-header,.featured-article,.side-article"
    );

    if (articleItems.length) {

        const articleObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        }, {

            threshold:0.18

        });

        articleItems.forEach(item => {

            articleObserver.observe(item);

        });

    }

    /*==================================
    FEATURED CARD 3D
    ==================================*/

    const featuredArticle = document.querySelector(".featured-article");

    if(featuredArticle){

        featuredArticle.addEventListener("mousemove",(e)=>{

            if(window.innerWidth<992) return;

            const rect=featuredArticle.getBoundingClientRect();

            const x=(e.clientX-rect.left)/rect.width-.5;

            const y=(e.clientY-rect.top)/rect.height-.5;

            featuredArticle.style.transform=`
                perspective(1000px)
                rotateY(${x*6}deg)
                rotateX(${-y*6}deg)
                translateY(-8px)
            `;

        });

        featuredArticle.addEventListener("mouseleave",()=>{

            featuredArticle.style.transform="";

        });

    }

    /*==================================
    IMAGE PARALLAX
    ==================================*/

    document.querySelectorAll(
        ".featured-article-image img,.side-article-image img"
    ).forEach(image=>{

        image.addEventListener("mousemove",(e)=>{

            if(window.innerWidth<992) return;

            const rect=image.getBoundingClientRect();

            const x=(e.clientX-rect.left)/rect.width-.5;

            const y=(e.clientY-rect.top)/rect.height-.5;

            image.style.transform=`
                scale(1.08)
                translate(${x*10}px,${y*10}px)
            `;

        });

        image.addEventListener("mouseleave",()=>{

            image.style.transform="";

        });

    });

    /*==================================
    READ MORE BUTTON
    ==================================*/

    document.querySelectorAll(
        ".read-more-btn,.read-link,.view-all-btn"
    ).forEach(btn=>{

        btn.addEventListener("mouseenter",()=>{

            btn.style.transform="translateX(8px)";

        });

        btn.addEventListener("mouseleave",()=>{

            btn.style.transform="";

        });

    });

    /*==================================
    CATEGORY BADGE
    ==================================*/

    document.querySelectorAll(".article-category").forEach(badge=>{

        badge.addEventListener("mouseenter",()=>{

            badge.animate([

                {

                    transform:"scale(1)"

                },

                {

                    transform:"scale(1.1)"

                },

                {

                    transform:"scale(1)"

                }

            ],{

                duration:400

            });

        });

    });

    /*==================================
    AUTHOR IMAGE
    ==================================*/

    document.querySelectorAll(".article-author img").forEach(img=>{

        img.addEventListener("mouseenter",()=>{

            img.animate([

                {

                    transform:"scale(1)"

                },

                {

                    transform:"scale(1.12)"

                },

                {

                    transform:"scale(1)"

                }

            ],{

                duration:500

            });

        });

    });

    /*==================================
    SIDE CARD FLOAT
    ==================================*/

    document.querySelectorAll(".side-article").forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-6px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

})();

/*==================================================
TRENDING CATEGORIES JS
==================================================*/

(function () {

    /*==================================
    SCROLL REVEAL
    ==================================*/

    const categoryElements = document.querySelectorAll(
        ".categories-header,.category-card"
    );

    if (categoryElements.length) {

        const categoryObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        }, {

            threshold:0.18

        });

        categoryElements.forEach(item => {

            categoryObserver.observe(item);

        });

    }

    /*==================================
    3D CARD EFFECT
    ==================================*/

    document.querySelectorAll(".category-card").forEach(card => {

        card.addEventListener("mousemove",(e)=>{

            if(window.innerWidth < 992) return;

            const rect = card.getBoundingClientRect();

            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            card.style.transform = `
                perspective(1000px)
                rotateY(${x*7}deg)
                rotateX(${-y*7}deg)
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

    document.querySelectorAll(".category-card img").forEach(image=>{

        image.addEventListener("mousemove",(e)=>{

            if(window.innerWidth < 992) return;

            const rect=image.getBoundingClientRect();

            const x=(e.clientX-rect.left)/rect.width-.5;
            const y=(e.clientY-rect.top)/rect.height-.5;

            image.style.transform=`
                scale(1.08)
                translate(${x*12}px,${y*12}px)
            `;

        });

        image.addEventListener("mouseleave",()=>{

            image.style.transform="";

        });

    });

    /*==================================
    ICON BOUNCE
    ==================================*/

    document.querySelectorAll(".category-icon").forEach(icon=>{

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

                duration:450

            });

        });

    });

    /*==================================
    ARTICLE COUNT PULSE
    ==================================*/

    document.querySelectorAll(".article-count").forEach(count=>{

        setInterval(()=>{

            count.animate([

                {
                    opacity:.75
                },

                {
                    opacity:1
                },

                {
                    opacity:.75
                }

            ],{

                duration:1200

            });

        },3500);

    });

    /*==================================
    EXPLORE BUTTON
    ==================================*/

    document.querySelectorAll(".category-overlay a").forEach(button=>{

        button.addEventListener("mouseenter",()=>{

            button.style.transform="translateX(8px)";

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform="";

        });

    });

})();