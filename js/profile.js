/*==================================================
ABOUT HERO JS
==================================================*/

(function(){

    /*==================================
    SCROLL REVEAL
    ==================================*/

    const aboutElements=document.querySelectorAll(

        ".about-left,.about-main-image,.about-card"

    );

    if(aboutElements.length){

        const aboutObserver=new IntersectionObserver((entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },{

            threshold:.20

        });

        aboutElements.forEach(item=>{

            aboutObserver.observe(item);

        });

    }

    /*==================================
    IMAGE PARALLAX
    ==================================*/

    const aboutImage=document.querySelector(".about-main-image");

    if(aboutImage){

        aboutImage.addEventListener("mousemove",(e)=>{

            if(window.innerWidth<992) return;

            const rect=aboutImage.getBoundingClientRect();

            const x=(e.clientX-rect.left)/rect.width-.5;

            const y=(e.clientY-rect.top)/rect.height-.5;

            aboutImage.style.transform=

            `perspective(1000px)
             rotateY(${x*8}deg)
             rotateX(${-y*8}deg)
             scale(1.03)`;

        });

        aboutImage.addEventListener("mouseleave",()=>{

            aboutImage.style.transform="";

        });

    }

    /*==================================
    FLOATING CARD TILT
    ==================================*/

    document.querySelectorAll(".about-card")

    .forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            if(window.innerWidth<992) return;

            const rect=card.getBoundingClientRect();

            const x=(e.clientX-rect.left)/rect.width-.5;

            const y=(e.clientY-rect.top)/rect.height-.5;

            card.style.transform=

            `perspective(800px)
             rotateY(${x*10}deg)
             rotateX(${-y*10}deg)
             translateY(-8px)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

    /*==================================
    ICON PULSE
    ==================================*/

    const aboutIcons=document.querySelectorAll(".card-icon");

    if(aboutIcons.length){

        setInterval(()=>{

            aboutIcons.forEach(icon=>{

                icon.animate([

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

                    duration:1800,

                    easing:"ease-in-out"

                });

            });

        },2200);

    }

    /*==================================
    GLOW EFFECT
    ==================================*/

    const aboutGlow=document.querySelector(".about-glow");

    if(aboutGlow){

        let glowScale=1;

        let direction=1;

        setInterval(()=>{

            glowScale+=direction*0.05;

            if(glowScale>=1.15){

                direction=-1;

            }

            if(glowScale<=1){

                direction=1;

            }

            aboutGlow.style.transform=

            `translate(-50%,-50%) scale(${glowScale})`;

        },120);

    }

})();


/*==================================================
VISION & VALUES JS
==================================================*/

(function(){

    /*==================================
    REVEAL ANIMATION
    ==================================*/

    const valueElements=document.querySelectorAll(

        ".values-header,.values-center,.value-card,.values-cta"

    );

    if(valueElements.length){

        const valueObserver=new IntersectionObserver((entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },{

            threshold:.20

        });

        valueElements.forEach(item=>{

            valueObserver.observe(item);

        });

    }

    /*==================================
    CENTER PARALLAX
    ==================================*/

    const valuesOrbit=document.querySelector(".values-orbit");
    const valuesCenter=document.querySelector(".values-center");

    if(valuesOrbit && valuesCenter){

        valuesOrbit.addEventListener("mousemove",(e)=>{

            if(window.innerWidth<992) return;

            const rect=valuesOrbit.getBoundingClientRect();

            const x=(e.clientX-rect.left)/rect.width-.5;
            const y=(e.clientY-rect.top)/rect.height-.5;

            valuesCenter.style.transform=

            `translate(-50%,-50%)
             rotate(${x*6}deg)
             scale(1.04)`;

        });

        valuesOrbit.addEventListener("mouseleave",()=>{

            valuesCenter.style.transform="translate(-50%,-50%)";

        });

    }

    /*==================================
    VALUE CARD TILT
    ==================================*/

    document.querySelectorAll(".value-card")

    .forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            if(window.innerWidth<992) return;

            const rect=card.getBoundingClientRect();

            const x=(e.clientX-rect.left)/rect.width-.5;
            const y=(e.clientY-rect.top)/rect.height-.5;

            card.style.transform=

            `perspective(900px)
             rotateY(${x*8}deg)
             rotateX(${-y*8}deg)
             translateY(-10px)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

    /*==================================
    RANDOM ICON BOUNCE
    ==================================*/

    const valueIcons=document.querySelectorAll(".value-icon");

    if(valueIcons.length){

        setInterval(()=>{

            valueIcons.forEach((icon,index)=>{

                setTimeout(()=>{

                    icon.animate([

                        {

                            transform:"translateY(0)"

                        },

                        {

                            transform:"translateY(-12px) scale(1.08)"

                        },

                        {

                            transform:"translateY(0)"

                        }

                    ],{

                        duration:900,

                        easing:"ease-out"

                    });

                },index*180);

            });

        },3500);

    }

    /*==================================
    CENTER GLOW ROTATION
    ==================================*/

    const centerGlow=document.querySelector(".center-glow");

    if(centerGlow){

        let glowRotation=0;

        function rotateGlow(){

            glowRotation+=0.25;

            centerGlow.style.transform=

            `rotate(${glowRotation}deg) scale(1)`;

            requestAnimationFrame(rotateGlow);

        }

        rotateGlow();

    }

    /*==================================
    BUTTON HOVER
    ==================================*/

    const valuesButton=document.querySelector(".values-btn");

    if(valuesButton){

        valuesButton.addEventListener("mouseenter",()=>{

            valuesButton.style.transform="translateY(-8px) scale(1.03)";

        });

        valuesButton.addEventListener("mouseleave",()=>{

            valuesButton.style.transform="translateY(0) scale(1)";

        });

    }

})();



/*==================================================
LEADERSHIP TEAM JS
==================================================*/

(function(){

    /*==================================
    SCROLL REVEAL
    ==================================*/

    const teamElements=document.querySelectorAll(

        ".team-header,.team-card,.highlight-box,.team-cta"

    );

    if(teamElements.length){

        const teamObserver=new IntersectionObserver((entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },{

            threshold:.20

        });

        teamElements.forEach(item=>{

            teamObserver.observe(item);

        });

    }

    /*==================================
    3D CARD TILT
    ==================================*/

    document.querySelectorAll(".team-card").forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            if(window.innerWidth<992) return;

            const rect=card.getBoundingClientRect();

            const x=(e.clientX-rect.left)/rect.width-.5;

            const y=(e.clientY-rect.top)/rect.height-.5;

            card.style.transform=`
                perspective(1000px)
                rotateY(${x*12}deg)
                rotateX(${-y*12}deg)
                translateY(-12px)
            `;

        });

        card.addEventListener("mouseleave",()=>{

            if(card.classList.contains("featured")){

                card.style.transform="translateY(-25px)";

            }else{

                card.style.transform="";

            }

        });

    });

    /*==================================
    IMAGE PARALLAX
    ==================================*/

    document.querySelectorAll(".team-image img").forEach(image=>{

        image.addEventListener("mousemove",(e)=>{

            if(window.innerWidth<992) return;

            const rect=image.getBoundingClientRect();

            const x=(e.clientX-rect.left)/rect.width-.5;

            const y=(e.clientY-rect.top)/rect.height-.5;

            image.style.transform=`
                scale(1.12)
                translate(${x*10}px,${y*10}px)
            `;

        });

        image.addEventListener("mouseleave",()=>{

            image.style.transform="";

        });

    });

    /*==================================
    EXPERIENCE BADGE PULSE
    ==================================*/

    const badges=document.querySelectorAll(".experience");

    if(badges.length){

        setInterval(()=>{

            badges.forEach((badge,index)=>{

                setTimeout(()=>{

                    badge.animate([

                        {

                            transform:"scale(1)"

                        },

                        {

                            transform:"scale(1.08)"

                        },

                        {

                            transform:"scale(1)"

                        }

                    ],{

                        duration:800,

                        easing:"ease-in-out"

                    });

                },index*200);

            });

        },3500);

    }

    /*==================================
    HIGHLIGHT ICON BOUNCE
    ==================================*/

    document.querySelectorAll(".highlight-icon").forEach(icon=>{

        icon.addEventListener("mouseenter",()=>{

            icon.animate([

                {

                    transform:"translateY(0)"

                },

                {

                    transform:"translateY(-10px) rotate(12deg)"

                },

                {

                    transform:"translateY(0)"

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

    const teamBtn=document.querySelector(".team-btn");

    if(teamBtn){

        teamBtn.addEventListener("mouseenter",()=>{

            teamBtn.style.transform="translateY(-8px) scale(1.03)";

        });

        teamBtn.addEventListener("mouseleave",()=>{

            teamBtn.style.transform="translateY(0) scale(1)";

        });

    }

    /*==================================
    SOCIAL ICON ROTATION
    ==================================*/

    document.querySelectorAll(".team-social a").forEach(icon=>{

        icon.addEventListener("mouseenter",()=>{

            icon.style.transform="translateY(-6px) rotate(360deg)";

        });

        icon.addEventListener("mouseleave",()=>{

            icon.style.transform="translateY(0) rotate(0deg)";

        });

    });

})();


/*==================================================
START YOUR LUXURY JOURNEY JS
==================================================*/

(function(){

    /*==================================
    REVEAL ANIMATION
    ==================================*/

    const journeyElements=document.querySelectorAll(

        ".journey-header,.journey-showcase,.journey-cta"

    );

    if(journeyElements.length){

        const journeyObserver=new IntersectionObserver((entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },{

            threshold:.20

        });

        journeyElements.forEach(item=>{

            journeyObserver.observe(item);

        });

    }

    /*==================================
    CENTER PARALLAX
    ==================================*/

    const journeyShowcase=document.querySelector(".journey-showcase");
    const journeyCenter=document.querySelector(".journey-center");

    if(journeyShowcase && journeyCenter){

        journeyShowcase.addEventListener("mousemove",(e)=>{

            if(window.innerWidth<992) return;

            const rect=journeyShowcase.getBoundingClientRect();

            const x=(e.clientX-rect.left)/rect.width-.5;
            const y=(e.clientY-rect.top)/rect.height-.5;

            journeyCenter.style.transform=

            `translate(-50%,-50%)
             rotate(${x*8}deg)
             translate(${x*12}px,${y*12}px)`;

        });

        journeyShowcase.addEventListener("mouseleave",()=>{

            journeyCenter.style.transform="translate(-50%,-50%)";

        });

    }

    /*==================================
    CARD TILT EFFECT
    ==================================*/

    document.querySelectorAll(".journey-card").forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            if(window.innerWidth<992) return;

            const rect=card.getBoundingClientRect();

            const x=(e.clientX-rect.left)/rect.width-.5;
            const y=(e.clientY-rect.top)/rect.height-.5;

            card.style.transform=`
                perspective(900px)
                rotateY(${x*10}deg)
                rotateX(${-y*10}deg)
                scale(1.04)
            `;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

    /*==================================
    GLOW PULSE
    ==================================*/

    const journeyGlow=document.querySelector(".journey-glow");

    if(journeyGlow){

        let glowScale=1;
        let direction=1;

        setInterval(()=>{

            glowScale+=direction*0.04;

            if(glowScale>=1.18){

                direction=-1;

            }

            if(glowScale<=1){

                direction=1;

            }

            journeyGlow.style.transform=
            `translate(-50%,-50%) scale(${glowScale})`;

        },120);

    }

    /*==================================
    KEY ICON ANIMATION
    ==================================*/

    const journeyKey=document.querySelector(".journey-icon");

    if(journeyKey){

        setInterval(()=>{

            journeyKey.animate([

                {

                    transform:"rotate(0deg)"

                },

                {

                    transform:"rotate(-12deg)"

                },

                {

                    transform:"rotate(12deg)"

                },

                {

                    transform:"rotate(0deg)"

                }

            ],{

                duration:1500,

                easing:"ease-in-out"

            });

        },3000);

    }

    /*==================================
    BUTTON RIPPLE EFFECT
    ==================================*/

    document.querySelectorAll(".journey-btn").forEach(button=>{

        button.addEventListener("click",function(e){

            const ripple=document.createElement("span");

            const rect=this.getBoundingClientRect();

            const size=Math.max(rect.width,rect.height);

            ripple.style.width=size+"px";
            ripple.style.height=size+"px";

            ripple.style.left=(e.clientX-rect.left-size/2)+"px";
            ripple.style.top=(e.clientY-rect.top-size/2)+"px";

            ripple.style.position="absolute";
            ripple.style.borderRadius="50%";
            ripple.style.background="rgba(255,255,255,.35)";
            ripple.style.transform="scale(0)";
            ripple.style.animation="journeyRipple .7s ease-out";
            ripple.style.pointerEvents="none";

            this.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },700);

        });

    });

})();