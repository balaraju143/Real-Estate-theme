/*==================================
DASHBOARD JS
==================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==================================
    SIDEBAR
    ==================================*/

    const sidebar = document.querySelector(".dashboard-sidebar");
    const menuBtn = document.querySelector(".menu-toggle");
    const closeBtn = document.querySelector(".close-sidebar");
    const overlay = document.querySelector(".sidebar-overlay");

    menuBtn.addEventListener("click", () => {

        sidebar.classList.add("active");
        overlay.classList.add("active");

    });

    closeBtn.addEventListener("click", () => {

        sidebar.classList.remove("active");
        overlay.classList.remove("active");

    });

    overlay.addEventListener("click", () => {

        sidebar.classList.remove("active");
        overlay.classList.remove("active");

    });

    /*==================================
    COUNTER
    ==================================*/

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const updateCounter = () => {

            const target = +counter.dataset.target;

            const current = +counter.innerText;

            const increment = Math.ceil(target / 80);

            if (current < target) {

                counter.innerText = current + increment;

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

    /*==================================
    CHART
    ==================================*/

    const chart = document.getElementById("salesChart");

    if(chart){

        new Chart(chart,{

            type:"line",

            data:{

                labels:[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul"
                ],

                datasets:[{

                    label:"Sales",

                    data:[
                        22,
                        35,
                        42,
                        38,
                        56,
                        72,
                        90
                    ],

                    borderColor:"#19d1ff",

                    backgroundColor:"rgba(25,209,255,.12)",

                    borderWidth:4,

                    fill:true,

                    tension:.4,

                    pointRadius:5,

                    pointBackgroundColor:"#19d1ff"

                }]

            },

            options:{

                responsive:true,

                maintainAspectRatio:false,

                plugins:{

                    legend:{

                        display:false

                    }

                },

                scales:{

                    x:{

                        ticks:{

                            color:"#9db2c8"

                        },

                        grid:{

                            color:"rgba(255,255,255,.05)"

                        }

                    },

                    y:{

                        ticks:{

                            color:"#9db2c8"

                        },

                        grid:{

                            color:"rgba(255,255,255,.05)"

                        }

                    }

                }

            }

        });

    }

    /*==================================
    CARD ANIMATION
    ==================================*/

    const cards = document.querySelectorAll(".dashboard-card,.dashboard-box");

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";

                entry.target.style.transform="translateY(0)";

            }

        });

    },{

        threshold:.15

    });

    cards.forEach(card=>{

        card.style.opacity="0";

        card.style.transform="translateY(40px)";

        card.style.transition=".8s ease";

        observer.observe(card);

    });

    /*==================================
    ACTIVE MENU
    ==================================*/

    const menus = document.querySelectorAll(".sidebar-menu a");

    menus.forEach(menu=>{

        menu.addEventListener("click",()=>{

            menus.forEach(item=>item.classList.remove("active"));

            menu.classList.add("active");

        });

    });

    /*==================================
    HEADER BUTTON EFFECT
    ==================================*/

    document.querySelectorAll(".header-right button").forEach(btn=>{

        btn.addEventListener("mouseenter",()=>{

            btn.style.transform="translateY(-5px)";

        });

        btn.addEventListener("mouseleave",()=>{

            btn.style.transform="translateY(0)";

        });

    });

});