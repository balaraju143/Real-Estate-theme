/*=========================================
HOME HERO JAVASCRIPT
=========================================*/

// =========================================
// HERO LOAD ANIMATION
// =========================================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

// =========================================
// HERO REVEAL
// =========================================

const revealItems=document.querySelectorAll(

".hero-content,.main-property,.floating-card"

);

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.25});

revealItems.forEach(item=>{

revealObserver.observe(item);

});

// =========================================
// PARALLAX PROPERTY CARD
// =========================================

const property=document.querySelector(".main-property");

document.addEventListener("mousemove",(e)=>{

if(window.innerWidth<992) return;

const x=(window.innerWidth/2-e.clientX)/45;

const y=(window.innerHeight/2-e.clientY)/45;

property.style.transform=

`rotateY(${-x}deg)
 rotateX(${y}deg)
 translateY(-8px)`;

});

document.addEventListener("mouseleave",()=>{

property.style.transform="rotateY(0deg) rotateX(0deg)";

});

// =========================================
// LIGHT FOLLOW EFFECT
// =========================================

const light1=document.querySelector(".light-one");

const light2=document.querySelector(".light-two");

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

light1.style.transform=

`translate(${x*60}px,${y*50}px)`;

light2.style.transform=

`translate(${-x*50}px,${-y*40}px)`;

});

// =========================================
// SEARCH BUTTON
// =========================================

const searchBtn=document.querySelector(".search-button");

searchBtn.addEventListener("click",()=>{

searchBtn.innerHTML=

'<i class="fa-solid fa-spinner fa-spin"></i>';

setTimeout(()=>{

searchBtn.innerHTML=

'<i class="fa-solid fa-magnifying-glass"></i>';

},1000);

});

// =========================================
// VIDEO
// =========================================

const video=document.querySelector(".hero-video");

if(video){

video.play().catch(()=>{});

}

// =========================================
// BUTTON HOVER
// =========================================

document.querySelectorAll(".btn-primary,.btn-secondary")

.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});

// =========================================
// FLOATING CARD
// =========================================

const floating=document.querySelector(".floating-card");

let direction=1;

setInterval(()=>{

if(window.innerWidth<768) return;

floating.style.transform=

`translateY(${direction*10}px)`;

direction*=-1;

},2500);

// =========================================
// SMOOTH SCROLL
// =========================================

document.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(

this.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


const customSelect=document.querySelector(".custom-select");

const selected=document.querySelector(".select-selected");

const options=document.querySelectorAll(".select-options div");

selected.addEventListener("click",()=>{

    customSelect.classList.toggle("active");

});

options.forEach(option=>{

    option.addEventListener("click",()=>{

        selected.innerHTML=

        option.innerText+

        '<i class="fa-solid fa-angle-down"></i>';

        customSelect.classList.remove("active");

    });

});

document.addEventListener("click",(e)=>{

    if(!customSelect.contains(e.target)){

        customSelect.classList.remove("active");

    }

});


/*=========================================
FEATURED COLLECTION JS
=========================================*/

// =========================================
// REVEAL ANIMATION
// =========================================

const estateElements=document.querySelectorAll(

'.estate-image,.estate-content'

);

const estateObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.25

});

estateElements.forEach(item=>{

estateObserver.observe(item);

});

// =========================================
// IMAGE PARALLAX
// =========================================

const estateImages=document.querySelectorAll(".estate-image");

estateImages.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

if(window.innerWidth<992)return;

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*10;

const rotateX=((rect.height/2-y)/rect.height)*10;

card.style.transform=

`perspective(1000px)
 rotateY(${rotateY}deg)
 rotateX(${rotateX}deg)
 translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(1000px) rotateY(0deg) rotateX(0deg)";

});

});

// =========================================
// CONTENT HOVER
// =========================================

document.querySelectorAll(".estate-content")

.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

// =========================================
// BUTTON HOVER
// =========================================

document.querySelectorAll(".estate-bottom a")

.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});

// =========================================
// IMAGE SCALE
// =========================================

estateImages.forEach(card=>{

const img=card.querySelector("img");

card.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

card.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

// =========================================
// FLOAT EFFECT
// =========================================

let estatedirection=1;

setInterval(()=>{

if(window.innerWidth<992)return;

estateImages.forEach(card=>{

card.style.translate=`0 ${direction*6}px`;

});

estatedirection*=-1;

},2500);

// =========================================
// MOBILE RESET
// =========================================

window.addEventListener("resize",()=>{

if(window.innerWidth<992){

estateImages.forEach(card=>{

card.style.transform="none";

card.style.translate="0";

});

}

});

// =========================================
// SMOOTH SCROLL
// =========================================

document.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(

this.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*==================================================
WHY SECTION JAVASCRIPT
==================================================*/

(function(){

    /*=============================
    REVEAL ANIMATION
    =============================*/

    const whyElements=document.querySelectorAll(

        ".why-image,.why-content,.timeline-item,.achievement-card"

    );

    if(whyElements.length){

        const whyObserver=new IntersectionObserver((entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },{

            threshold:.20

        });

        whyElements.forEach(item=>{

            whyObserver.observe(item);

        });

    }

    /*=============================
    COUNTER ANIMATION
    =============================*/

    const counters=document.querySelectorAll(".counter");

    let counterStarted=false;

    function startCounters(){

        if(counterStarted) return;

        counterStarted=true;

        counters.forEach(counter=>{

            const target=+counter.dataset.target;

            let current=0;

            const increment=Math.ceil(target/120);

            const timer=setInterval(()=>{

                current+=increment;

                if(current>=target){

                    counter.innerHTML=target+"+";

                    clearInterval(timer);

                }else{

                    counter.innerHTML=current+"+";

                }

            },20);

        });

    }

    const whyBottom=document.querySelector(".why-bottom");

    if(whyBottom){

        const counterObserver=new IntersectionObserver((entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    startCounters();

                }

            });

        },{

            threshold:.30

        });

        counterObserver.observe(whyBottom);

    }

    /*=============================
    IMAGE PARALLAX
    =============================*/

    const whyImage=document.querySelector(".why-image");

    if(whyImage){

        whyImage.addEventListener("mousemove",(e)=>{

            if(window.innerWidth<992) return;

            const rect=whyImage.getBoundingClientRect();

            const x=(e.clientX-rect.left)/rect.width-.5;

            const y=(e.clientY-rect.top)/rect.height-.5;

            whyImage.style.transform=

            `perspective(1200px)
             rotateY(${x*8}deg)
             rotateX(${-y*8}deg)`;

        });

        whyImage.addEventListener("mouseleave",()=>{

            whyImage.style.transform=

            "perspective(1200px) rotateY(0deg) rotateX(0deg)";

        });

    }

    /*=============================
    FLOATING CARDS
    =============================*/

    const awardCard=document.querySelector(".floating-award");

    const expCard=document.querySelector(".floating-experience");

    let whyFloat=1;

    if(awardCard && expCard){

        setInterval(()=>{

            if(window.innerWidth<768) return;

            awardCard.style.transform=

            `translateY(${whyFloat*8}px)`;

            expCard.style.transform=

            `translateY(${-whyFloat*8}px)`;

            whyFloat*=-1;

        },2500);

    }

    /*=============================
    BUTTON EFFECT
    =============================*/

    const whyBtn=document.querySelector(".why-btn");

    if(whyBtn){

        whyBtn.addEventListener("mouseenter",()=>{

            whyBtn.style.transform="translateY(-6px)";

        });

        whyBtn.addEventListener("mouseleave",()=>{

            whyBtn.style.transform="translateY(0px)";

        });

    }

})();


/*==================================================
LIFESTYLE SECTION JS
==================================================*/

(function () {

    /*==================================
    REVEAL ANIMATION
    ==================================*/

    const lifestyleItems = document.querySelectorAll(
        ".lifestyle-image,.feature-card,.life-card"
    );

    if (lifestyleItems.length) {

        const lifestyleObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        }, {

            threshold: 0.2

        });

        lifestyleItems.forEach(item => {

            lifestyleObserver.observe(item);

        });

    }

    /*==================================
    COUNTER
    ==================================*/

    const lifeCounters = document.querySelectorAll(".life-counter");

    let lifestyleCounterStarted = false;

    function startLifestyleCounters() {

        if (lifestyleCounterStarted) return;

        lifestyleCounterStarted = true;

        lifeCounters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let value = 0;

            const increment = Math.ceil(target / 100);

            const timer = setInterval(() => {

                value += increment;

                if (value >= target) {

                    counter.innerHTML = target + "+";

                    clearInterval(timer);

                } else {

                    counter.innerHTML = value + "+";

                }

            }, 20);

        });

    }

    const lifestyleStats = document.querySelector(".lifestyle-stats");

    if (lifestyleStats) {

        const statsObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    startLifestyleCounters();

                }

            });

        }, {

            threshold: .3

        });

        statsObserver.observe(lifestyleStats);

    }

    /*==================================
    IMAGE PARALLAX
    ==================================*/

    const lifestyleImage = document.querySelector(".lifestyle-image");

    if (lifestyleImage) {

        lifestyleImage.addEventListener("mousemove", (e) => {

            if (window.innerWidth < 992) return;

            const rect = lifestyleImage.getBoundingClientRect();

            const x = (e.clientX - rect.left) / rect.width - .5;

            const y = (e.clientY - rect.top) / rect.height - .5;

            lifestyleImage.style.transform =

                `perspective(1200px)
                 rotateY(${x * 10}deg)
                 rotateX(${-y * 10}deg)`;

        });

        lifestyleImage.addEventListener("mouseleave", () => {

            lifestyleImage.style.transform =

                "perspective(1200px) rotateY(0deg) rotateX(0deg)";

        });

    }

    /*==================================
    FEATURE CARD HOVER
    ==================================*/

    const featureCards = document.querySelectorAll(".feature-card");

    featureCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateX(12px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateX(0px)";

        });

    });

    /*==================================
    PLAY BADGE FLOAT
    ==================================*/

    const playBadge = document.querySelector(".image-badge");

    if (playBadge) {

        let lifestyleFloat = 1;

        setInterval(() => {

            if (window.innerWidth < 768) return;

            playBadge.style.transform =

                `translateY(${lifestyleFloat * 10}px)`;

            lifestyleFloat *= -1;

        }, 2500);

    }

})();


/*==================================================
LUXURY AMENITIES JS
==================================================*/

(function(){

    /*==================================
    REVEAL ANIMATION
    ==================================*/

    const amenityItems=document.querySelectorAll(

        ".amenity-center,.amenity-card,.amenity-counter"

    );

    if(amenityItems.length){

        const amenityObserver=new IntersectionObserver((entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },{

            threshold:.20

        });

        amenityItems.forEach(item=>{

            amenityObserver.observe(item);

        });

    }

    /*==================================
    COUNTER
    ==================================*/

    const amenityNumbers=document.querySelectorAll(".amenity-number");

    let amenityCounterStarted=false;

    function startAmenityCounters(){

        if(amenityCounterStarted) return;

        amenityCounterStarted=true;

        amenityNumbers.forEach(counter=>{

            const target=Number(counter.dataset.target);

            let value=0;

            const increment=Math.ceil(target/100);

            const timer=setInterval(()=>{

                value+=increment;

                if(value>=target){

                    counter.innerHTML=target+"+";

                    clearInterval(timer);

                }else{

                    counter.innerHTML=value+"+";

                }

            },20);

        });

    }

    const amenityBottom=document.querySelector(".amenity-bottom");

    if(amenityBottom){

        const amenityCounterObserver=new IntersectionObserver((entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    startAmenityCounters();

                }

            });

        },{

            threshold:.30

        });

        amenityCounterObserver.observe(amenityBottom);

    }

    /*==================================
    CENTER IMAGE PARALLAX
    ==================================*/

    const amenityCenter=document.querySelector(".amenity-center");

    if(amenityCenter){

        amenityCenter.addEventListener("mousemove",(e)=>{

            if(window.innerWidth<992) return;

            const rect=amenityCenter.getBoundingClientRect();

            const x=(e.clientX-rect.left)/rect.width-.5;

            const y=(e.clientY-rect.top)/rect.height-.5;

            amenityCenter.style.transform=

            `translate(-50%,-50%)
             perspective(1200px)
             rotateY(${x*12}deg)
             rotateX(${-y*12}deg)
             scale(1.03)`;

        });

        amenityCenter.addEventListener("mouseleave",()=>{

            amenityCenter.style.transform=

            "translate(-50%,-50%)";

        });

    }

    /*==================================
    CARD HOVER
    ==================================*/

    document.querySelectorAll(".amenity-card")

    .forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            if(window.innerWidth<768) return;

            card.style.transform="translateY(-12px) scale(1.03)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

    /*==================================
    BUTTON EFFECT
    ==================================*/

    const amenityBtn=document.querySelector(".amenity-button a");

    if(amenityBtn){

        amenityBtn.addEventListener("mouseenter",()=>{

            amenityBtn.style.transform="translateY(-6px)";

        });

        amenityBtn.addEventListener("mouseleave",()=>{

            amenityBtn.style.transform="translateY(0)";

        });

    }

    /*==================================
    FLOAT CENTER IMAGE
    ==================================*/

    let amenityFloat=1;

    setInterval(()=>{

        if(window.innerWidth<992) return;

        if(!amenityCenter) return;

        amenityCenter.animate([

            {

                transform:`translate(-50%,-50%) translateY(0px)`

            },

            {

                transform:`translate(-50%,-50%) translateY(${amenityFloat*10}px)`

            },

            {

                transform:`translate(-50%,-50%) translateY(0px)`

            }

        ],{

            duration:2500,

            easing:"ease-in-out"

        });

        amenityFloat*=-1;

    },2500);

})();


/*==================================================
PROPERTY JOURNEY JS
==================================================*/

(function(){

    /*==================================
    REVEAL ANIMATION
    ==================================*/

    const journeyItems=document.querySelectorAll(

        ".journey-card,.journey-cta"

    );

    if(journeyItems.length){

        const journeyObserver=new IntersectionObserver((entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },{

            threshold:.20

        });

        journeyItems.forEach(item=>{

            journeyObserver.observe(item);

        });

    }

    /*==================================
    TIMELINE PROGRESS
    ==================================*/

    const timeline=document.querySelector(".timeline-line");

    if(timeline){

        window.addEventListener("scroll",()=>{

            const rect=timeline.getBoundingClientRect();

            const visible=window.innerHeight-rect.top;

            const height=timeline.offsetHeight;

            let progress=(visible/height)*100;

            progress=Math.max(0,Math.min(progress,100));

            timeline.style.background=

            `linear-gradient(
            to bottom,
            #19d1ff ${progress}%,
            rgba(255,255,255,.08) ${progress}%)`;

        });

    }

    /*==================================
    STEP ICON HOVER
    ==================================*/

    document.querySelectorAll(".step-icon")

    .forEach(icon=>{

        icon.addEventListener("mouseenter",()=>{

            icon.style.transform="rotate(15deg) scale(1.08)";

        });

        icon.addEventListener("mouseleave",()=>{

            icon.style.transform="rotate(0deg) scale(1)";

        });

    });

    /*==================================
    CARD TILT EFFECT
    ==================================*/

    document.querySelectorAll(".journey-card")

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
             translateY(-8px)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

    /*==================================
    STEP NUMBER PULSE
    ==================================*/

    const stepNumbers=document.querySelectorAll(".step-number");

    let pulseDirection=1;

    if(stepNumbers.length){

        setInterval(()=>{

            if(window.innerWidth<768) return;

            stepNumbers.forEach(step=>{

                step.animate([

                    {

                        transform:"scale(1)"

                    },

                    {

                        transform:`scale(${1+(pulseDirection*.08)})`

                    },

                    {

                        transform:"scale(1)"

                    }

                ],{

                    duration:1800,

                    easing:"ease-in-out"

                });

            });

            pulseDirection*=-1;

        },1800);

    }

    /*==================================
    CTA BUTTON
    ==================================*/

    const journeyButton=document.querySelector(".journey-btn");

    if(journeyButton){

        journeyButton.addEventListener("mouseenter",()=>{

            journeyButton.style.transform="translateY(-6px)";

        });

        journeyButton.addEventListener("mouseleave",()=>{

            journeyButton.style.transform="translateY(0px)";

        });

    }

})();


/*==================================================
PRIME LOCATIONS JS
==================================================*/

(function(){

    /*==================================
    REVEAL ANIMATION
    ==================================*/

    const locationItems=document.querySelectorAll(

        ".world-map,.location-card,.location-cta"

    );

    if(locationItems.length){

        const locationObserver=new IntersectionObserver((entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },{

            threshold:.20

        });

        locationItems.forEach(item=>{

            locationObserver.observe(item);

        });

    }

    /*==================================
    WORLD MAP PARALLAX
    ==================================*/

    const worldMap=document.querySelector(".world-map");

    if(worldMap){

        worldMap.addEventListener("mousemove",(e)=>{

            if(window.innerWidth<992) return;

            const rect=worldMap.getBoundingClientRect();

            const x=(e.clientX-rect.left)/rect.width-.5;

            const y=(e.clientY-rect.top)/rect.height-.5;

            worldMap.style.transform=

            `translate(${x*12}px,${y*12}px) scale(1.03)`;

        });

        worldMap.addEventListener("mouseleave",()=>{

            worldMap.style.transform="translate(0,0) scale(1)";

        });

    }

    /*==================================
    LOCATION CARD 3D EFFECT
    ==================================*/

    document.querySelectorAll(".location-card")

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
             translateY(-8px)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

    /*==================================
    PIN PULSE
    ==================================*/

    const pins=document.querySelectorAll(".location-pin");

    if(pins.length){

        setInterval(()=>{

            pins.forEach(pin=>{

                pin.animate([

                    {

                        transform:"scale(1)"

                    },

                    {

                        transform:"scale(1.25)"

                    },

                    {

                        transform:"scale(1)"

                    }

                ],{

                    duration:1200,

                    easing:"ease-in-out"

                });

            });

        },1800);

    }

    /*==================================
    CTA BUTTON
    ==================================*/

    const locationButton=document.querySelector(".location-btn");

    if(locationButton){

        locationButton.addEventListener("mouseenter",()=>{

            locationButton.style.transform="translateY(-6px)";

        });

        locationButton.addEventListener("mouseleave",()=>{

            locationButton.style.transform="translateY(0)";

        });

    }

    /*==================================
    RANDOM FLOATING CARDS
    ==================================*/

    let floatDirection=1;

    setInterval(()=>{

        if(window.innerWidth<992) return;

        document.querySelectorAll(".location-card")

        .forEach((card,index)=>{

            const move=(index%2===0?8:-8)*floatDirection;

            card.animate([

                {

                    transform:`translateY(0px)`

                },

                {

                    transform:`translateY(${move}px)`

                },

                {

                    transform:`translateY(0px)`

                }

            ],{

                duration:2500+(index*200),

                easing:"ease-in-out"

            });

        });

        floatDirection*=-1;

    },2600);

})();


/*==================================================
CLIENT TESTIMONIALS JS
==================================================*/

(function(){

    const testimonials=[

        {
            text:"Stackly transformed our property investment journey. Every detail was handled professionally, and we found our dream beachfront villa beyond expectations.",
            name:"Emily Carter",
            role:"Luxury Investor • Dubai",
            image:"images/client4.webp"
        },

        {
            text:"The team understood exactly what we wanted. Our penthouse purchase was smooth, transparent and completely stress-free.",
            name:"James Wilson",
            role:"Business Owner • London",
            image:"images/client6.webp"
        },

        {
            text:"An exceptional experience from beginning to end. Their premium service exceeded every expectation we had.",
            name:"Sophia Brown",
            role:"Interior Designer • Paris",
            image:"images/client5.webp"
        },

        {
            text:"Finding a luxury waterfront home was effortless. The consultants were knowledgeable and always available.",
            name:"Daniel Miller",
            role:"Property Investor • Singapore",
            image:"images/pic2.webp"
        },

        {
            text:"Professional, trustworthy and highly recommended. Stackly truly delivers a world-class luxury buying experience.",
            name:"Olivia Taylor",
            role:"Entrepreneur • Malibu",
            image:"images/pic6.webp"
        }

    ];

    const testimonialCard=document.querySelector(".testimonial-card");
    const testimonialText=document.querySelector(".testimonial-text");
    const clientImage=document.querySelector(".client-info img");
    const clientName=document.querySelector(".client-info h4");
    const clientRole=document.querySelector(".client-info span");
    const avatars=document.querySelectorAll(".client-avatar");
    const progress=document.querySelector(".testimonial-progress span");

    if(!testimonialCard) return;

    let currentIndex=0;
    let slider;

    function showTestimonial(index){

        testimonialCard.style.opacity="0";
        testimonialCard.style.transform="translateY(30px)";

        setTimeout(()=>{

            testimonialText.textContent=testimonials[index].text;
            clientImage.src=testimonials[index].image;
            clientName.textContent=testimonials[index].name;
            clientRole.textContent=testimonials[index].role;

            avatars.forEach(item=>item.classList.remove("active"));
            avatars[index].classList.add("active");

            testimonialCard.style.opacity="1";
            testimonialCard.style.transform="translateY(0)";

            progress.style.animation="none";
            progress.offsetHeight;
            progress.style.animation="testimonialProgress 5s linear forwards";

        },250);

    }

    function nextSlide(){

        currentIndex++;

        if(currentIndex>=testimonials.length){

            currentIndex=0;

        }

        showTestimonial(currentIndex);

    }

    function startSlider(){

        slider=setInterval(nextSlide,5000);

    }

    function restartSlider(){

        clearInterval(slider);

        startSlider();

    }

    avatars.forEach((avatar,index)=>{

        avatar.addEventListener("click",()=>{

            currentIndex=index;

            showTestimonial(index);

            restartSlider();

        });

    });

    /* Swipe Support */

    let startX=0;

    testimonialCard.addEventListener("touchstart",(e)=>{

        startX=e.touches[0].clientX;

    });

    testimonialCard.addEventListener("touchend",(e)=>{

        let endX=e.changedTouches[0].clientX;

        if(startX-endX>60){

            nextSlide();

            restartSlider();

        }

        if(endX-startX>60){

            currentIndex--;

            if(currentIndex<0){

                currentIndex=testimonials.length-1;

            }

            showTestimonial(currentIndex);

            restartSlider();

        }

    });

    /* Reveal Animation */

    const testimonialElements=document.querySelectorAll(

        ".testimonial-header,.testimonial-card,.client-avatar,.testimonial-progress"

    );

    const testimonialObserver=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.2

    });

    testimonialElements.forEach(item=>{

        testimonialObserver.observe(item);

    });

    showTestimonial(0);

    startSlider();

})();