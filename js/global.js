window.onload = function(){

    setTimeout(function(){

        const loader = document.getElementById("loader");

        loader.style.opacity="0";

        loader.style.visibility="hidden";

    },3000);

};

// ===========================
// MOBILE MENU
// ===========================

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");

if(menuToggle){

    menuToggle.addEventListener("click",function(){

        menuToggle.classList.toggle("active");

        mobileMenu.classList.toggle("active");

        menuOverlay.classList.toggle("active");

    });

}

menuOverlay.addEventListener("click",function(){

    menuToggle.classList.remove("active");

    mobileMenu.classList.remove("active");

    menuOverlay.classList.remove("active");

});

document.querySelectorAll(".mobile-links a").forEach(link=>{

    link.addEventListener("click",function(){

        menuToggle.classList.remove("active");

        mobileMenu.classList.remove("active");

        menuOverlay.classList.remove("active");

    });

});


/*==================================================
FOOTER JS
==================================================*/

(function(){

    /*==================================
    SCROLL TO TOP
    ==================================*/

    const scrollTopBtn=document.querySelector(".scroll-top");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            scrollTopBtn.classList.add("show");

        }else{

            scrollTopBtn.classList.remove("show");

        }

    });

    if(scrollTopBtn){

        scrollTopBtn.addEventListener("click",()=>{

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }

    /*==================================
    FOOTER REVEAL
    ==================================*/

    const footerElements=document.querySelectorAll(

        ".footer-about,.footer-links,.footer-contact,.footer-bottom"

    );

    const footerObserver=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    footerElements.forEach(item=>{

        footerObserver.observe(item);

    });

    /*==================================
    SOCIAL ICON HOVER
    ==================================*/

    document.querySelectorAll(".footer-social a")

    .forEach(icon=>{

        icon.addEventListener("mouseenter",()=>{

            icon.style.transform="translateY(-8px) rotate(360deg)";

        });

        icon.addEventListener("mouseleave",()=>{

            icon.style.transform="translateY(0) rotate(0deg)";

        });

    });

    /*==================================
    FOOTER LINK HOVER
    ==================================*/

    document.querySelectorAll(".footer-links a")

    .forEach(link=>{

        link.addEventListener("mouseenter",()=>{

            link.style.transform="translateX(8px)";

        });

        link.addEventListener("mouseleave",()=>{

            link.style.transform="translateX(0)";

        });

    });

    /*==================================
    CONTACT ICON FLOAT
    ==================================*/

    document.querySelectorAll(".footer-contact i")

    .forEach(icon=>{

        icon.addEventListener("mouseenter",()=>{

            icon.style.transform="scale(1.2) rotate(12deg)";

        });

        icon.addEventListener("mouseleave",()=>{

            icon.style.transform="scale(1) rotate(0deg)";

        });

    });

    /*==================================
    LOGO HOVER
    ==================================*/

    const footerLogo=document.querySelector(".footer-logo img");

    if(footerLogo){

        footerLogo.addEventListener("mouseenter",()=>{

            footerLogo.style.transform="scale(1.08)";

        });

        footerLogo.addEventListener("mouseleave",()=>{

            footerLogo.style.transform="scale(1)";

        });

    }

})();