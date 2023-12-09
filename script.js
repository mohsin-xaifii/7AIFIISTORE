let cursor = document.getElementById("cursor")
let logo = document.getElementById("logo")
let hamburger = document.getElementById("hamicon")
let close = document.getElementById("close-btn")
let show = document.getElementById("nav-inner")
// let square = document.getElementById("img-line")
let slider = document.getElementById("slider")
let innerCartIcon = document.querySelector("#cart-icon")
let cartPage = document.querySelector("#cart-inner")
let cartClose = document.querySelector("#cart-close-btn")


// TOGGLE NAV-INNER
function toggleNav(){
    hamburger.addEventListener("click",function(){
        hamburger.style.display = "none"
        close.style.display = "flex"
        gsap.to("#nav-inner",{
            top:0,
            // delay:0.1,
            duration:0.5,
            ease:"power1.inOut"
        }),
        gsap.from(".nav-inner-right",{
            width:0,
            duration:1,
            ease: "power1"
        })
    })
    
    // CLOSE NAV-INNER
    close.addEventListener("click",function(){
        hamburger.style.display = "flex"
        close.style.display = "none"
        gsap.to("#nav-inner",{
            top:"-200%",
            delay:0.1,
            ease:"power1.inOut"
        })
    })
}
toggleNav()


// IMG-TOGGLE ON HOVER
function changeImg(imgchanger){
    slider.src = imgchanger;
}


document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x - 80 + "px"
    cursor.style.top = dets.y - 80 + "px"
})




// NAVBAR
gsap.from(".left-nav",{
    opacity:0,
    delay:0.5,
    }
)
gsap.from(".right-nav",{
    opacity:0,
    delay:0.5
})

// CART_OPEN
innerCartIcon.addEventListener("click",function(){
    gsap.to("#cart-inner",{
        right:0,
        display:"block",
        delay:0.1,
        duration:0.5,
        ease:"power1.inOut"
    })
})
// CART_CLOSE   
cartClose.addEventListener("click",function(){
    gsap.to("#cart-inner",{
        right:"-100%",
        display:"none",
        delay:0.1,
        duration:0.5,
        ease:"power1.inOut"
    })
})



// HEADER
gsap.from(".header-heading",{
    y:"50%",
    opacity:0,
    delay:0.5
})
gsap.from(".header-wardrobe",{
    y:"50%",
    opacity:0,
    delay:1
})
gsap.from(".header-collection",{
    y:"50%",
    opacity:0,
    delay:2
})
gsap.from("header img",{
    x:"50%",
    opacity:0,
    delay:1
})
// gsap.from("#img-line",{
//     transform:"rotate(150deg)",
//     opacity:0,
//     delay:1
// })

// CATEGORY SECTION

gsap.to("#cat",{
    transform:"translateY(1vw)",
    scrollTrigger:{
        trigger:".category-section",
        scroller:"body",
        start:"top 80%",
        end:"bottom 50%",
        scrub:3
    }
})


// <!-- NEWEST ARRIVAL -->

gsap.from(".left-text h1",{
    transform:"translateX(-200px)",
    scrollTrigger:{
        trigger:"#main-heading",
        scroller:"body",
        start:"top 50%",
        end:"bottom 45%",
        scrub:2
    }
})
gsap.from(".right-text h1",{
    transform:"translateX(200px)",
    scrollTrigger:{
        trigger:"#main-heading",
        scroller:"body",
        start:"top 50%",
        end:"bottom 45%",
        scrub:2
    }
})


// COMING SOON
gsap.from("#soon h1",{
    transform:"translateX(500px)",
    opacity:0,
    scrollTrigger:{
        trigger:"#soon",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        scrub:3
    }
})

// PINNED
gsap.to("#pinned h1",{
    transform:"translateX(-70%)",
    color:"#CCC5B9",
    scrollTrigger:{
        trigger:"#pinned",
        scroller:"body",
        // markers:true,
        start:"top 7%",
        end:"top -300% ",
        scrub:3,
        pin:true,
        // pinSpacing:false
    }
})
gsap.to("#pinned","#pinned-section",{
    backgroundColor:"#CCC5B9",
    scrollTrigger:{
        trigger:"#pinned",
        scroller:"body",
        start:"top 7%",
        end:"top -300% ",
        scrub:3,
    }
})

// FILTER-BTN

    filterBtn.addEventListener("click",function(){
        filterBtn.style.backgroundColor = "transparent"
        filterBtn.style.color = "#252422"
        })
